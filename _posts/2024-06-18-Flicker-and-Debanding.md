---
layout: post

title: "频闪成因以及解决策略"

author: "lishenqu"

header-img: "img/post-bg-infinity.jpg"

header-mask: 0.3

mathjax: true

tags:

  - Flicker

  - 视频修复
---


> 参考 [CSDN](https://blog.csdn.net/qq_35247586/article/details/125118763)


# 华为 Camera 业务场景

![](/img/in-post/2023-05-06-valse-移动终端图像增强/image-1.png)

# 频闪分析

### 1. 成因和现象
交流电网中的传输的能量并不是稳定不变的，而是随着一个固定频率变化的，这个频率一般被称为工频，例如中国是50Hz，美国是60Hz。工频由电力系统决定。 工频的带来的这种能量变化称为flicker。

sensor捕捉到flicker而在图像上形成的条带的现象称为banding现象，通常简称banding（根本原因就是sensor 每一行像素点，所接收到的能量不同导致的），如上图所示，画面会出现频闪，感觉有水波纹一样的纹路在跳变。

1）由于快门曝光时间以及视频帧率 和 频率不匹配， 导致帧间进光量不同，造成了这一现象；

2）而PWM调光屏幕，不同的是，是从上到下扫描式的刷新，因此造成条纹现象。

### 2. 解决方案

数据集的获取？

网络模型的构建？


### 2. HDR Sensor成像

Digital Overlap作为目前主流的成像技术，

