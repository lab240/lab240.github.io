---
slug: dmn-init
title: Team
authors: dmn
tags: [team, lab240]
---

import Image from '@theme/IdealImage';
import thumbnail from './img/l2-1.png';

# Lab240 Team

The lab is engaged in research and product creation in the field of electronics, networks, Linux, embedded, IoT, automation.

We work with RockChip, NXP, BroadCom, RAK chips and assemblies.

We deeply and broadly deal with Linux, preparing kernels, recipes, bootloaders, network system. We work with DPDK and develop our own protocol based on DPDK.

We design and implement our version of the SDN network with zeroconf.

We design in Compass, Altium Designer, easyEDA.

We write documentation in ESKD (when forced to).

## People

A distributed team of specialists.

- Group of circuit designers (+team lead)
- Group of network engineers (+team lead)
- Group of documentation preparation and release (+team lead)
- Designer-constructor
- DevOps
- Logistician

We have no managers =)

## Portfolio. Electronics

- Processor module [NAPI](https://github.com/dmnovikov/napiguide/blob/main/readmeNapi.md) based on Rockchip RK3308

- Data collection system ["Collector-Compact"](https://github.com/dmnovikov/napiguide/blob/main/frontcontrolcompact.md) based on Napi

- Data collection system ["Current Collector"](https://github.com/dmnovikov/napiguide/blob/main/readmeNapiFrontControl.md) based on Napi

- Industrial switch [FrontNet](https://github.com/dmnovikov/napiguide/blob/main/frontnet-l2.md) based on ASIC Broadcom Avenger.

- Data transmission system over 802.11ad wireless networks (partial participation) based on nxp ls1046
  
- Routing system of a moving object based on nxp lx2160

## Portfolio. Design

- Design of passive housing for Baikal, Elbrus boards

- Housing for the FrontNet switch

<Image img={thumbnail} />
  
- Housing for the "Collector" data collection system

## Portfolio. Software Developments

- NapiLinux - Linux distribution for embedded systems (based on Yocto build system)
  
- Web interface "Current Collector" (statistics system based on influx and grafana)
  
- FrontNet Lora connect - data transmission system through LoraWan network with data backup based on ChirpStack
  
- Flear path protocol - routing of a moving object based on Linux and DPDK
