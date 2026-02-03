# LightFin

**面向差速固定翼与轻量机型的 1S 一体式飞控解决方案**

![LightFin 产品外观](/manuals/flight-controller-manual/assets/product-overview.png)

## 产品概述

LightFin 是一款为 INAV 固件设计的小型飞控，集成 AT32F435 主控与 ELRS 无线链路，适用于 1S 供电的轻量机型，特别是差速控制的无襟翼固定翼（如纸飞机改装）。

## 核心特性

- **超小体积** - PCB 尺寸仅 30.2mm × 14.6mm，重量极轻
- **一体化设计** - 板载 ELRS 接收机，无需外接模块
- **完整传感器** - 集成 IMU、气压计、磁力计，满足稳定飞行需求
- **1S 优化** - 专为轻量级机型设计的电源管理方案

## 硬件规格

| 组件 | 规格 | 说明 |
|------|------|------|
| 主控 MCU | AT32F435CGU7 | QFN48 封装，多路 UART/PWM |
| 无线链路 | ESP8285 + SX1280 | 板载 ELRS 2.4GHz，WiFi 双天线 |
| IMU | LSM6DSOWTR | 6 轴加速度计/陀螺仪 |
| 磁力计 | QMC5883P | I2C 接口，地址 0x2C |
| 气压计 | SPL06-001 | I2C 接口，地址 0x77 |
| 工作电压 | 3.0V - 4.2V | 1S 锂电池供电 |

## 适用机型

- **差速固定翼** - 双电机差速控制，无需舵面设计
- **纸飞机改装** - 轻量级固定翼平台
- **1S 轻量机型** - 适合小型室内/室外飞行器

## 核心优势

- **差速控制** - 双电机差速转向，简化机械结构
- **ELRS 一体化** - 无需外接接收机，降低布线和重量
- **开源固件** - 基于 INAV，社区支持丰富
- **易于调试** - 支持 INAV Configurator 图形化配置

## 用户手册

- [下载完整用户手册 (PDF)](/manuals/flight-controller-manual.pdf)
- [在线查看 PDF](/manuals/flight-controller-manual.pdf){target="_blank"}

<div style="margin-top: 20px; border: 1px solid var(--vp-c-divider); border-radius: 8px; overflow: hidden;">
  <iframe
    src="/manuals/flight-controller-manual.pdf"
    width="100%"
    height="800px"
    style="border: none;"
  ></iframe>
</div>

## 技术支持

如需更多技术支持或产品咨询，请通过以下方式联系我们：

- **GitHub**: [HumpbackLab](https://github.com/HumpbackLab)
- **QQ 群**: 763833895
- **Bilibili**: [座头鲸工作室](https://space.bilibili.com/3690979722791130)
