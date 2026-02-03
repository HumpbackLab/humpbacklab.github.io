# AT32F435mini INAV Flight Controller

**1S Integrated Flight Controller for Differential Thrust Fixed-Wing and Lightweight Aircraft**

![AT32F435mini Product](/manuals/flight-controller-manual/assets/product-overview.png)

## Overview

AT32F435mini is a compact flight controller designed for INAV firmware, integrating AT32F435 MCU and ELRS wireless link, suitable for 1S powered lightweight aircraft, especially differential thrust wingless fixed-wing aircraft (such as paper airplane conversions).

## Core Features

- **Ultra-Compact** - PCB size only 30.2mm × 14.6mm, extremely lightweight
- **Integrated Design** - Onboard ELRS receiver, no external modules needed
- **Complete Sensors** - Integrated IMU, barometer, magnetometer for stable flight
- **1S Optimized** - Power management solution designed for lightweight aircraft

## Hardware Specifications

| Component | Specification | Description |
|-----------|---------------|-------------|
| MCU | AT32F435CGU7 | QFN48 package, multiple UART/PWM |
| Wireless Link | ESP8285 + SX1280 | Onboard ELRS 2.4GHz, WiFi dual antenna |
| IMU | LSM6DSOWTR | 6-axis accelerometer/gyroscope |
| Magnetometer | QMC5883P | I2C interface, address 0x2C |
| Barometer | SPL06-001 | I2C interface, address 0x77 |
| Operating Voltage | 3.0V - 4.2V | 1S LiPo battery powered |

## Suitable Aircraft

- **Differential Thrust Fixed-Wing** - Dual motor differential control, no control surfaces needed
- **Paper Airplane Conversion** - Lightweight fixed-wing platform
- **1S Lightweight Aircraft** - Suitable for small indoor/outdoor flyers

## Core Advantages

- **Differential Control** - Dual motor differential steering simplifies mechanical structure
- **Integrated ELRS** - No external receiver needed, reduces wiring and weight
- **Open Source Firmware** - Based on INAV with rich community support
- **Easy to Debug** - Supports INAV Configurator graphical configuration

## User Manual

- [Download Complete User Manual (PDF)](/manuals/flight-controller-manual.pdf)
- [View PDF Online](/manuals/flight-controller-manual.pdf){target="_blank"}

<div style="margin-top: 20px; border: 1px solid var(--vp-c-divider); border-radius: 8px; overflow: hidden;">
  <iframe
    src="/manuals/flight-controller-manual.pdf"
    width="100%"
    height="800px"
    style="border: none;"
  ></iframe>
</div>

## Technical Support

For more technical support or product inquiries, please contact us through:

- **GitHub**: [HumpbackLab](https://github.com/HumpbackLab)
- **QQ Group**: 763833895
- **Bilibili**: [HumpbackLab](https://space.bilibili.com/3690979722791130)
