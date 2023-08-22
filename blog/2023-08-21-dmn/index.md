---
slug: telegraf-starlark
title: Работа с данными в Telegraf
authors: dmn
tags: [team, lab240]
---

## Предисловие. О Telegraf

Telegraf универсальный инструмент перекладывания данных от источников данных к приемникам данных. Классическим источником данных являются протоколы опроса датчиков, такие как modbus\mqtt, а классическим приемником данных являются базы данных (influxdb, mysql). Наличие сотен плагинов для Telegraf освобождает нас от написания микросервисов по перекладыванию данных, а применять один инструмент.

:::tip

- Ссылка на Telegraf: <https://www.influxdata.com/time-series-platform/telegraf/>
- Ссылка на плагины Telegraf: <https://docs.influxdata.com/telegraf/v1.26/plugins/>

:::

## Применение Telegraf

Мы используем "комбайн" Telegraf в наших решениях по сбору данных и любим его за универсальность.

Пример конфиг для сбора данных по modbus выглядит так

<!--truncate-->

Modbus TCP

```toml
[[inputs.modbus]]
  name = "Device"
  slave_id = 4
  timeout = "3s"

  controller = "tcp://127.0.0.1:502" 

  holding_registers = [
    { name = "elemy_binary1", byte_order = "AB",   data_type = "UINT16", scale=1.0,  address = [0]},
    { name = "elemy_binary2", byte_order = "AB",   data_type = "UINT16", scale=1.0,  address = [1]},
   ]

```

Modbus rtu (на примере датчика окружающей среды IPCDAS FS-C1)

```toml Modbus RTU

## FrontSensor C1 Шаблон для встроенного датчика тока
[[inputs.modbus]]

  name = "FS-C1"
  slave_id = 1
  timeout = "10s"

  # busy_retries = 0
  # busy_retries_wait = "100ms"

  controller = "file:///dev/ttyS1"
  baud_rate = 9600
  data_bits = 8
  parity = "N"
  stop_bits = 1
  transmission_mode = "RTU"

  holding_registers = [
    { name = "Volt_a",   byte_order = "AB",   data_type = "UINT16",   scale=0.01,     address = [72]},
    { name = "Amp_a",    byte_order = "AB",   data_type = "UINT16",   scale=1.0,      address = [73]},
    { name = "W_a",      byte_order = "AB",   data_type = "UINT16",   scale=1.0,      address = [74]},
    { name = "PF_a",     byte_order = "AB",   data_type = "UINT16",   scale=1.0,      address = [77]},
    { name = "Freq_a",   byte_order = "AB",   data_type = "UINT16",   scale=0.01,     address = [81]},
  ]

```

MQTT Config (на примере платформы donoff)

```toml

[[inputs.mqtt_consumer]]

  servers = ["tcp://SERVER:1883"]

  topics = ["/donoff/+/out/sensors/+"]

  username = "MQTT_USER"
  password = "MQTT_PASS"

  data_format = "value"
  data_type = "string"
  
  
[[inputs.mqtt_consumer.topic_parsing]]
    topic = "/donoff/+/out/sensors/+"
    tags = "/prj/dev/_/_/_"
    fields = "/_/_/_/_/sensor_name"

```

## Преобразование данных

Прежде чем данные пойдут в приемник, они могут быть обработаны, так называемыми процессорами. Не всегда получаемые готовы в прямом виде поступить в туже базу данных. Надо отфильтровать ненужные (лишние), преобразовать типы, и даже получить новые данные на основе исходных.

Пример простого процессора для MQTT

```toml
[[processors.pivot]]
    tag_key = "sensor_name"
    value_key = "value"
```

Однако, существует гораздо более мощный инструмент для преобразования данных - полноценный язык Starlark, синтаксис которого очень близок к Python.

:::tip

Описание языка Starlark: <https://github.com/bazelbuild/starlark/blob/master/spec.md>

:::

Пример раззбора топиков и значений из MQTT

```toml
[[processors.starlark]]
 # Reads the Starlark script embedded

  source = '''
def apply(metric):

  #Разбор поля с названием сенсора 

  sm=str(metric.fields['sensor_name'])
 
  #Можно "пропустить" данные которые не нужны

  if sm == 'pzem004':
    metric.fields.clear()
    return metric

  #Преобразование типа данных
  sv=float(metric.fields['value'])

  #Преобразуем вместо value=значение к имя_сенсора=значение
  metric.fields[metric.fields['sensor_name']]=sv

  #Добавляем новое поле type (тип датчика) на основе имени дачтика и делаем undef если не удалось распознать.

  if 'temp' in sm:
    metric.fields['type']='temp'
  elif ('curr' in sm) or ('sct' in sm) :
    metric.fields['type']='current'
  elif ('sec' in sm):
    metric.fields['type']='seconds'
  elif ('power' in sm):
    metric.fields['type']='power'
  elif ('energy' in sm):
    metric.fields['type']='energy'
  elif ('energy' in sm):
    metric.fields['type']='volt'
  else:
    metric.fields['type']='undef'
    
  #Убираем лишние метрики    
  
  metric.fields.pop('value')
  metric.tags.pop('topic')
  metric.fields.pop('sensor_name')

  return metric
'''
```

Еще один пример применения starlark - разбор приходящих данных из modbus источника на биты (вот так придумал производитель)

```toml

[inputs.modbus]]
  name = "Device"
  slave_id = 4
  timeout = "3s"
  controller = "tcp://127.0.0.1:502"
  holding_registers = [
    { name = "elemy_binary1", byte_order = "AB",   data_type = "UINT16", scale=1.0,  address = [0]},
     ]

[[processors.starlark]]
 # Reads the Starlark script embedded

  source = '''
def apply(metric):
  
  ei=metric.fields['elemy_binary1']

  # Готовим массив из 16 значений

  bit_array=[None]*16

  # Берем входящее значение и раскладываем каждый бит в элементы массива
  
  for i in range(0,16):
   bit_array[i]=(ei>>i) & 1

  # Формируем метрики на основе битов (некоторые метрики multi_bit) согласно документации на устройство

  metric.fields['priority']=bit_array[1]+2*bit_array[0]
  
  
  metric.fields['switch_mode']=bit_array[2]
  
  metric.fields['is_input1_norm_state']=bit_array[8]
  metric.fields['is_input2_norm_state']=bit_array[9]
  
  metric.fields['is_input1_active']=bit_array[10]
  metric.fields['is_input2_active']=bit_array[11]
  
  metric.fields['load_state']=bit_array[13]+2*bit_array[12]
  
  metric.fields['is_out_voltage1']=bit_array[14]
  metric.fields['is_out_voltage2']=bit_array[15]
    
  return metric
'''
```

Надеемся из этих примеров становится понятно, насколько гибок и универсален инструмент Starlark.

:::note

Фантастические возможности, учитывая что данные в Telegraf могут быть взяты из многих и разных по природе источников. А далее с помощью простых программ на Starlark - обработаны, подчищены, добавлены и выданы в приемник.

:::

## Приемник данных

В качестве примера приведем вывод данных в базу данных influx_v2. Как видно, конфиг абсолютно "тупой", потому что все данные мы уже подготовили !

```toml

[[outputs.influxdb_v2]]
  ## The URLs of the InfluxDB cluster nodes.
  ##
  ## Multiple URLs can be specified for a single cluster, only ONE of the
  ## urls will be written to each interval.
  ##   ex: urls = ["https://us-west-2-1.aws.cloud2.influxdata.com"]
  urls = ["http://mon_influxdb2:8086"]

  ## Token for authentication.
  token = "TOKEN"

  ## Organization is the name of the organization you wish to write to.
  organization = "nnzipc"

  ## Destination bucket to write into.
  bucket = "bucket1"

  ## The value of this tag will be used to determine the bucket.  If this
  ## tag is not set the 'bucket' option is used as the default.
  # bucket_tag = ""

  ## If true, the bucket tag will not be added to the metric.
  # exclude_bucket_tag = false

  ## Timeout for HTTP messages.
  # timeout = "5s"

  ## Additional HTTP headers
  # http_headers = {"X-Special-Header" = "Special-Value"}

  ## HTTP Proxy override, if unset values the standard proxy environment
  ## variables are consulted to determine which proxy, if any, should be used.
  # http_proxy = "http://corporate.proxy:3128"

  ## HTTP User-Agent
  user_agent = "telegraf"

  ## Content-Encoding for write request body, can be set to "gzip" to
  ## compress body or "identity" to apply no encoding.
  # content_encoding = "gzip"

  ## Enable or disable uint support for writing uints influxdb 2.0.
  # influx_uint_support = false

  ## Optional TLS Config for use on HTTP connections.
  # tls_ca = "/etc/telegraf/ca.pem"
  # tls_cert = "/etc/telegraf/cert.pem"
  # tls_key = "/etc/telegraf/key.pem"
  ## Use TLS but skip chain & host verification
  # insecure_skip_verify = false

```

:boom: Удачи Вам (и нам) в передаче и преобразовании данных
