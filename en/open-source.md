# Open Source Projects and Contributions

## Our Open Source Projects

Here are the open source projects maintained by HumpbackLab:

### 1. INAV
- **Project Description**: Flight controller firmware for inertial navigation and autonomous flight
- **GitHub**: [https://github.com/HumpbackLab/inav](https://github.com/HumpbackLab/inav)
- **Technology Stack**: C, Embedded Systems
- **Introduction**: We develop and optimize our flight controller firmware based on INAV to provide stable control for lightweight aircraft models.

### 2. Let's Fly
- **Project Description**: An Android application for controlling RC devices using CRSF protocol
- **GitHub**: [https://github.com/HumpbackLab/LetsFly](https://github.com/HumpbackLab/LetsFly)
- **Technology Stack**: Kotlin, Android, USB Serial Communication
- **Introduction**: Provides intuitive joystick controls, gyroscope-based flight control, and configurable channel switches. Supports USB OTG connection to RC hardware, suitable for mobile devices as remote controllers.

### 3. AT32 WebISP
- **Project Description**: Web-based ISP tool for AT32 microcontrollers
- **GitHub**: [https://github.com/HumpbackLab/AT32-WebISP](https://github.com/HumpbackLab/AT32-WebISP)
- **Technology Stack**: WebAssembly, JavaScript
- **Introduction**: A browser-based programming tool for AT32 chips that enables firmware flashing using serial ports.

### 4. morb
- **Project Description**: A lightweight in-process publish/subscribe library for Rust
- **GitHub**: [https://github.com/HumpbackLab/morb](https://github.com/HumpbackLab/morb)
- **Technology Stack**: Rust, mio, eventfd, Linux
- **Introduction**: Provides named topics, a fixed-size ring buffer, and poll-based notifications for efficient in-process message distribution on Linux, inspired by PX4's uORB design.

### 5. pymsp
- **Project Description**: A Python library for handling MSP (MultiWii Serial Protocol) messages
- **GitHub**: [https://github.com/HumpbackLab/pymsp](https://github.com/HumpbackLab/pymsp)
- **Technology Stack**: Python, MSP, Serial Protocol
- **Introduction**: Supports packing, unpacking, and streaming processing for both MSP v1 and MSP v2 messages, suitable for flight controller protocol debugging, data parsing, and ground-station tool development.

## Other Open Source Contributions

### [iNAV](https://github.com/iNavFlight/inav)
- [Fix hard faults when handling large MSP responses over CRSF
](https://github.com/iNavFlight/inav/pull/11369)
- [fix lsm6dxx driver lack gyroAlign setting issue.
](https://github.com/iNavFlight/inav/pull/11367)

### [PX4](https://github.com/PX4/PX4-Autopilot)
- [Add SPL06 barometer driver](https://github.com/PX4/PX4-Autopilot/pull/19229)
### [ExpressLRS](https://github.com/ExpressLRS/ExpressLRS)
- [don't stuck in WatiOnBusy(sx1280) (#1990)](https://github.com/ExpressLRS/ExpressLRS/commit/413494f062a4a717e21656ff6f0dd210ff84447c)
- [Add high pwm freq and duty mode support (#1850)](https://github.com/ExpressLRS/ExpressLRS/commit/37b3434db0a281e29099952c7260e96b4688f73f)
- [Fix PWM issue of esp8266 device when duty is 0 (#2684)](https://github.com/ExpressLRS/ExpressLRS/commit/43b97c08ecde07dc40e59b410dffaf1683da859c)
- [clear all form data before updating hardware setting (#2780)](https://github.com/ExpressLRS/ExpressLRS/commit/132ab0e14bf32dcb6451da2dc6362215f0f2b0cb)


## Mechanical Design

### A4 Paper Airplane Remote Control Mount
- **Project Description**: A 3D-printed mount for converting A4 paper airplanes into remote-controlled aircraft
- **Link**: [https://makerworld.com.cn/zh/models/2263294-a4zhi-yao-kong-zhi-fei-ji-ji-jia#profileId-2547856](https://makerworld.com.cn/zh/models/2263294-a4zhi-yao-kong-zhi-fei-ji-jia#profileId-2547856)
- **Technology Stack**: 3D Printing, SolidWorks
- **Introduction**: A lightweight 3D-printed mount specifically designed for A4 paper airplanes that can quickly convert a regular folded A4 paper airplane into a remote-controlled aircraft, supporting servo and small motor installation.

## Open Source Licenses

All our open source projects follow appropriate open source licenses. Please refer to the LICENSE file in each project for details.
