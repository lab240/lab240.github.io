---
slug: dmn-prj-na-1
title: Собираем аналитику с ПДУ *)
authors: dmn
tags: [team, lab240]
---

:::note

*) Статья не совсем готова, ссылки могут и скорее всего не
работают. Как все будет готово, снимем эту плашку. 

:::

Про то, как мы быстро сделали систему визуализации работы ПДУ

## Предистория

Есть такой известный бренд в мире управления питанием для стоек в дата центрах - Raritan. Маститый вендор, предоставляющий софт с кучей аналитики по работе оборудования. А есть молодой производитель Elemy, у которого есть веб-интерфейс для просмотра текущих параметров, но нет аналитики. 

## Аналитика за полчаса ?

Однако Elemy "отдает" состояние линий и все электрические параметры по modbbus. Это значит что собрать и показать аналитику нет особенной сложности. Тем более, что у нас есть практически готовый докер для связки mqtt-telegraf-influx-grafana. В данном случае нам mqtt не нужна, мы можем отключить ее, а вот остальное весьма понадобиться.

Итак, нам дали Windows сервер (да, ужас), но слава Богу и там есть докер.

## Разворачиваем докер на Win сервере

:::tip

Докер для Win: https://www.docker.com/products/docker-desktop/

:::

Наш готовый докер с инструкцией по разворачиванию  https://gitlab.nnz-ipc.net/iot/grafana-influx

## Конфиг telegraf

Telegraf - мощнейшее средство перекладывания данных из источника к премнику. В нашем случа источник modbus rtu, а приемник база influxdb. Мы должны забрать регистры Elemy. Для начала мы взяли устройство ["АВТОМАТИЧЕСКИЙ СТОЕЧНЫЙ ПЕРЕКЛЮЧАТЕЛЬ
ATS-1204"](https://www.elemy.ru/products/ats-1204). 

Вот так выглядит конфиг для Elemy ATS-1204 на источник

```toml

[[inputs.modbus]]
  name = "Device"

  slave_id = 1

  timeout = "10s"

  controller = "tcp://192.168.0.36:502"
  configuration_type = "register"

  holding_registers = [
    { name = "Volt_output", byte_order = "AB",   data_type = "UINT16", scale=1.0,  address = [2]},
    { name = "Volt_input1", byte_order = "AB",   data_type = "UINT16", scale=1.0,  address = [5]},
    { name = "Volt_input2", byte_order = "AB",   data_type = "UINT16", scale=1.0,  address = [6]},
    { name = "Freq_input1", byte_order = "AB",   data_type = "UINT16", scale=0.01,  address = [7]},
    { name = "Freq_input2", byte_order = "AB",   data_type = "UINT16", scale=0.01,  address = [8]},
    { name = "Amp_output", byte_order = "AB",   data_type = "UINT16", scale=0.01,  address = [9]},
    { name = "Volt-ampere", byte_order = "AB",   data_type = "UINT16", scale=1.0,  address = [10]},
    { name = "Watt", byte_order = "AB",   data_type = "INT16", scale=1.0,  address = [11]},
    { name = "Volt-ampere-reactive", byte_order = "AB",   data_type = "UINT16", scale=1.0,  address = [12]},
    { name = "Cos-ph", byte_order = "AB",   data_type = "INT16", scale=1.0,  address = [13]},
  ]
```

В приемнике никаких изменений - 

## Результат

После выполнения несложных манипуляций мы получили вот такую дашборду в графане

<video controls>
  <source src="./img/grf1.mp4"/>
</video>

