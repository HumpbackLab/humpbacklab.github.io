# 开源项目与贡献

## 我们的开源项目

以下是座头鲸实验室维护的开源项目：

### 1. INAV
- **项目描述**: 面向惯性导航和自动驾驶的飞行控制器固件
- **GitHub地址**: [https://github.com/HumpbackLab/inav](https://github.com/HumpbackLab/inav)
- **技术栈**: C, Embedded Systems
- **简介**: 我们基于 INAV 开发和优化我们的飞行控制器固件，为轻量化航空模型提供稳定控制。

### 2. Let's Fly
- **项目描述**: 一款用于通过CRSF协议控制RC设备的安卓应用程序
- **GitHub地址**: [https://github.com/HumpbackLab/LetsFly](https://github.com/HumpbackLab/LetsFly)
- **技术栈**: Kotlin, Android, USB Serial Communication
- **简介**: 提供直观的操纵杆控制、陀螺仪飞行控制和可配置的通道开关，支持USB OTG连接RC硬件，适用于移动设备作为遥控器的场景。

### 3. AT32 WebISP
- **项目描述**: 基于网页的 AT32 微控制器编程工具
- **GitHub地址**: [https://github.com/HumpbackLab/AT32-WebISP](https://github.com/HumpbackLab/AT32-WebISP)
- **技术栈**: WebAssembly, JavaScript
- **简介**: 一个基于浏览器的 AT32 芯片编程工具，使用串口进行程序烧录

### 4. morb
- **项目描述**: 面向 Rust 的轻量级进程内发布/订阅库
- **GitHub地址**: [https://github.com/HumpbackLab/morb](https://github.com/HumpbackLab/morb)
- **技术栈**: Rust, mio, eventfd, Linux
- **简介**: 提供具名 Topic、固定大小环形缓冲区以及基于轮询的通知机制，适用于 Linux 环境下的高效进程内消息分发，设计灵感来自 PX4 的 uORB。



## 其他开源贡献

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


## 机械设计

### A4纸遥控飞机支架
- **项目描述**: 用于将A4纸飞机改装成遥控飞行器的3D打印支架
- **链接**: [https://makerworld.com.cn/zh/models/2263294-a4zhi-yao-kong-zhi-fei-ji-ji-jia#profileId-2547856](https://makerworld.com.cn/zh/models/2263294-a4zhi-yao-kong-zhi-fei-ji-jia#profileId-2547856)
- **技术栈**: 3D打印, SolidWorks
- **简介**: 专为A4纸飞机设计的轻量化3D打印支架，可快速将普通A4纸折叠飞机转换为遥控飞行器，支持舵机和小型电机安装。

## 开源许可证

我们所有的开源项目都遵循相应的开源许可证，详情请参阅各项目的 LICENSE 文件。
