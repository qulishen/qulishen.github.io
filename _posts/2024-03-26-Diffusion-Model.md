---
layout: post

title: "Diffusion Model 学习"

author: "lishenqu"

header-img: "img/post-bg-infinity.jpg"

header-mask: 0.3

mathjax: true

tags:

  - 学习笔记

  - Diffusion
---
# 1. 第一节

### 1.1 一个不断添加噪音的逆向过程
![](/img/in-post/2024-03-26-Diffusion-Model/1710320817646.png)

### 1.2 与VAE的区别和联系

![VAE vs Diffusion](/img/in-post/2024-03-26-Diffusion-Model/1710320865237.png "VAE vs Diffusion")

### 1.3 Diffusion的训练原理

![Training](/img/in-post/2024-03-26-Diffusion-Model/1710321131751.png "Training")

先产生一张Noise Image，是通过t来选生成的；然后把选取的t和这张noise Imgae 都输入到Noise predictor 里面，得到预测的噪声，然后和真是的噪声作对比，得到损失。

### 1.4 Diffusion的推理原理

![algorithm](/img/in-post/2024-03-26-Diffusion-Model/1710321825641.png "algorithm")

![清晰一点的流程](/img/in-post/2024-03-26-Diffusion-Model/1710321848436.png "清晰一点的流程")

# 2. 第二节

### 2.1 生成模型的目标

![影像生成](/img/in-post/2024-03-26-Diffusion-Model/1710322021997.png "影像生成")

### 2.2 参数学习的目标

![参数学习的目标](/img/in-post/2024-03-26-Diffusion-Model/1710322797738.png)

说白了就是，要找到一组参数，使得产生x1,x2,....xm的概率成绩越大越好。

优化公式推导：乘积——>积分

![最大似然等于最小KL divergence](/img/in-post/2024-03-26-Diffusion-Model/1710323151494.png "最大似然等于最小KL divergence")

# 3. 第三节
### 3.1 前向过程原理(Forward process)

参考学习 [zhihu](https://zhuanlan.zhihu.com/p/563661713)

对于原始数据 $x_0$~$q(x_0)$, 总共包含T步的扩散过程的每一步都是对上一步得到的数据$x_{t-1}$按照如下方式增加高斯噪音：

$$
q(x_t|x_{t-1}) = N(x_t;\sqrt{1-\beta_{t}}x_{t-1},\beta_{t}I)
$$

通过**马尔科夫链+重参数技巧**可以得到$x_t$与$x_0$的直接关系

$$
q(x_t|x_0) = N(x_t;\sqrt{\bar\alpha_t}x_0,(1-\bar\alpha_{t})I)
$$

其中 $\alpha_t = 1-\beta_t$ 和 $\bar\alpha_{t}=\prod_{i=1}${a_{i}}$

这个特性很重要,可以看成$x_{t}$是原始数据$x_{0}$和随机噪音的线性组合. $\sqrt{\bar\alpha_t}$和$(1-\bar\alpha_{t})$是组合系数,被称为 signal_rate 和noise_rate. 然后就可以基于$\bar\alpha_{t}$ 而不是$\beta_{t}$ 来定义 noise schedule. 比如直接将 $\bar\alpha_{t}$ 设定为接近0的值,那么就可以保证得到最终的$x_T$近似为一个随机噪音.

![](/img/in-post/2024-03-26-Diffusion-Model/1278390128391.png)

### 3.2 反向过程 (reverse process)

对于反向过程,其实就是一个去噪的过程,如果我们知道反向过程的每一步的真实分布$q({x_{t-1}|x_{t}})$,那么从一个随机噪音$x_T$~N(0,1)开始,逐渐去噪就能得到一个真实的样本,即生成数据的过程.

反向过程也定义为一个马尔科夫链,只不过是由一系列的神经网络参数的高斯分布来组成.

$$
p_{\theta}(x_{\theta:T}) = p(x_T)\prod^T_{t=1}{p_{\theta}(x_{t-1}|x_{t})}
$$

$$
p_{\theta}(x_{t-1}|x_{t})=N(x_{t-1};\mu_\theta(x_t,t),\sum_{\theta}(x_{t},t))
$$
![alt text](../img/in-post/2024-03-26-Diffusion-Model/image.png)