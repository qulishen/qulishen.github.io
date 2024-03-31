---
layout: post

title: "Diffusion Model 学习"

author: "lishenqu"

header-img: "img/background/3.jpg"

header-mask: 0.3

mathjax: true

tags:
  - 学习笔记

  - Diffusion
---

# 1. 第一节

### 1.1 一个不断添加噪音的逆向过程

![](/img/in-post/2024-03-26-Diffusion-Model/1710320817646.png)

### 1.2 与 VAE 的区别和联系

![VAE vs Diffusion](/img/in-post/2024-03-26-Diffusion-Model/1710320865237.png "VAE vs Diffusion")

### 1.3 Diffusion 的训练原理

![Training](/img/in-post/2024-03-26-Diffusion-Model/1710321131751.png "Training")

先产生一张 Noise Image，是通过 t 来选生成的；然后把选取的 t 和这张 noise Imgae 都输入到 Noise predictor 里面，得到预测的噪声，然后和真是的噪声作对比，得到损失。

### 1.4 Diffusion 的推理原理

![algorithm](/img/in-post/2024-03-26-Diffusion-Model/1710321825641.png "algorithm")

![清晰一点的流程](/img/in-post/2024-03-26-Diffusion-Model/1710321848436.png "清晰一点的流程")

# 2. 第二节

### 2.1 生成模型的目标

![影像生成](/img/in-post/2024-03-26-Diffusion-Model/1710322021997.png "影像生成")

### 2.2 参数学习的目标

![参数学习的目标](/img/in-post/2024-03-26-Diffusion-Model/1710322797738.png)

说白了就是，要找到一组参数，使得产生 x1,x2,....xm 的概率成绩越大越好。

优化公式推导：乘积——>积分

![最大似然等于最小KL divergence](/img/in-post/2024-03-26-Diffusion-Model/1710323151494.png "最大似然等于最小KL divergence")

# 3. 第三节 DDPM

### 3.1 前向过程原理(Forward process)

> 参考学习 [zhihu](https://zhuanlan.zhihu.com/p/563661713)

> 参考学习 [better](https://zhuanlan.zhihu.com/p/666552214)

对于原始数据 $x_0$~$q(x_0)$, 总共包含 T 步的扩散过程的每一步都是对上一步得到的数据$x_{t-1}$按照如下方式增加高斯噪音：

$$
q(x_t|x_{t-1}) = N(x_t;\sqrt{1-\beta_{t}}x_{t-1},\beta_{t}I)
$$

通过**马尔科夫链+重参数技巧**可以得到$x_t$与$x_0$的直接关系

$$
q(x_t|x_0) = N(x_t;\sqrt{\bar\alpha_t}x_0,(1-\bar\alpha_{t})I)
$$

其中 $\alpha_t = 1-\beta_t$ 和 $\bar\alpha_{t}=\prod_{i=1}{a_{i}}$

这个特性很重要,可以看成$x_{t}$是原始数据$x_{0}$和随机噪音的线性组合. $\sqrt{\bar\alpha_t}$和$(1-\bar\alpha_{t})$是组合系数,被称为 signal*rate 和 noise_rate. 然后就可以基于$\bar\alpha*{t}$ 而不是$\beta_{t}$ 来定义 noise schedule. 比如直接将 $\bar\alpha_{t}$ 设定为接近 0 的值,那么就可以保证得到最终的$x_T$近似为一个随机噪音.

![](/img/in-post/2024-03-26-Diffusion-Model/1278390128391.png)

### 3.2 反向过程 (reverse process)

对于反向过程,其实就是一个去噪的过程,如果我们知道反向过程的每一步的真实分布
$q({x_{t-1}|x_{t}})$,那么从一个随机噪音$x_T$~N(0,1)开始,逐渐去噪就能得到一个真实的样本,即生成数据的过程.

反向过程也定义为一个马尔科夫链,只不过是由一系列的神经网络参数的高斯分布来组成.

在去除参数的过程中,我们需要用$x_t$去预测$x_{t-1}$. 采用贝叶斯公式去计算后验概率

$$
P\left(x_{t-1} \mid x_t\right)=\frac{P\left(x_{t-1} x_t\right)}{P\left(x_t\right)}=\frac{P\left(x_t \mid x_{t-1}\right) P\left(x_{t-1}\right)}{P\left(x_t\right)}
$$

然后由于原图 $x_0$已知,进行公式改写:

$$
P\left(x_{t-1} \mid x_t, x_0\right)=\frac{P\left(x_t \mid x_{t-1}, x_0\right) P\left(x_{t-1} \mid x_0\right)}{P\left(x_t \mid x_0\right)}
$$

等式右边部分都变成先验概率，我们由前向加噪过程即可对公式进行改写，依据为
$x_t=\sqrt{\overline{\alpha_t}} x_0+\sqrt{1-\overline{\alpha_t}} \epsilon$ 和 $x*t=\sqrt{1-\beta_t} x*{t-1}+\sqrt{\beta_t} \epsilon $ 可以得到:

$$
P\left(x_{t-1} \mid x_t, x_0\right)=\frac{N\left(\sqrt{\alpha_t} x_{t-1}, 1-\alpha_t\right) N\left(\sqrt{\alpha_{t-1}} x_0, 1-\alpha_{t-1}^{-}\right)}{N\left(\sqrt{\overline{\alpha_t}} x_0, 1-\overline{\alpha_t}\right)}
$$

最后通过一系列 替换以及正态分布的性质,可以得到最终的结果.

$$
P\left(x_{t-1} \mid x_t\right)=N\left(\frac{1}{\sqrt{\alpha_t}}\left(x_t-\frac{1-\alpha_t}{\sqrt{1-\overline{\alpha_t}}} \epsilon\right), \frac{\left(1-\alpha_t\right)\left(1-\alpha_{t-1}^{-}\right)}{1-\overline{\alpha_t}}\right)
$$

但是, $\epsilon$的具体的值我们并不知道, 因此我们需要去训练一个网络去预测噪声,也就是 李宏毅提到的 noise predictor.

# 4. 第四节 DDIM

DDPM 的缺陷在于,推理速度过慢,因为其本身是一个马尔科夫链的过程,无法进行跳跃预测,即无法通过$x_t$直接去预测$x_{t-2}$,于是就有了 DDIM 的出现. 无需重新训练 DDPM,只需要对采样器进行修改即可.

$$
\begin{aligned}
& P\left(x_{t-1} \mid x_t, x_0\right) \sim N\left(\left(\sqrt{\alpha_{t-1}^{-}}-\frac{\sqrt{1-\alpha_{t-1}^{-}-\sigma^2}}{\sqrt{1-\overline{\alpha_t}}} \sqrt{\overline{\alpha_t}}\right) x_0+\left(\frac{\sqrt{1-\alpha_{t-1}^{-}-\sigma^2}}{\sqrt{1-\overline{\alpha_t}}}\right) x_t, \sigma^2\right) \\
& \sim N\left(\sqrt{\alpha_{t-1}^{-}} x_0+\sqrt{1-\alpha_{t-1}^{-}-\sigma^2} \frac{x_t-\sqrt{\alpha_t} x_0}{\sqrt{1-\overline{\alpha_t}}}, \sigma^2\right)
\end{aligned}
$$

采用与反向去噪同样的原理，将上述公式的$x_0$
进行替换，这里采用$\epsilon_t$
是因为前文已经说明过采用的是模型预测的正态分布

$$
x_{\text {prev }}=\sqrt{\alpha_{\text {prev }}^{-}}\left(\frac{x_t-\sqrt{1-\overline{\alpha_t}} \epsilon_t}{\sqrt{\overline{\alpha_t}}}\right)+\sqrt{1-\alpha_{\text {prev }}^{-}-\sigma^2} \epsilon_t+\sigma^2 \epsilon
$$

其中 $x_t$和$x_{prev}$可以相隔多个迭代步数.

# 5. 总结

### 5.1 DDPM 公式

定义:

$$
\begin{gathered}
x_t=\sqrt{\alpha_t} x_{t-1}+\sqrt{1-\alpha_t} \epsilon \\
\epsilon \sim N(0,1)
\end{gathered}
$$

经过推导得到 $x_0$和 $x_t$

$$
\begin{gathered}
x_t=\sqrt{\overline{\alpha_t}} x_0+\sqrt{1-\overline{\alpha_t}} \epsilon \\
x_0=\frac{x_t-\sqrt{1-\overline{\alpha_t}} \epsilon}{\sqrt{\overline{\alpha_t}}}
\end{gathered}
$$

进一步得到后验概率:

$$
P(x_{t-1}|x_t)=N(\frac1{\sqrt{\alpha_t}}(x_t-\frac{1-\alpha_t}{\sqrt{1-\bar{\alpha_t}}}\epsilon),\frac{(1-\alpha_t)(1-\alpha_{t-1}^-)}{1-\bar{\alpha_t}})
$$

$\text{其中的}\epsilon\text{由模型提供}$

### 5.2 DDIM 公式

DDIM 只修改了采样器，所以只需要重新定义后验概率即可

$$
\begin{aligned}x_{prev}&=\sqrt{\alpha_{\overline{prev}}}(\frac{x_t-\sqrt{1-\alpha_t}\epsilon_t}{\sqrt{\alpha_t}})+\sqrt{1-\alpha_{\overline{prev}}-\sigma^2}\epsilon_t+\sigma^2\epsilon\\\\\epsilon_t&=\frac{x_t-\sqrt{\alpha_t}x_0}{\sqrt{1-\bar{\alpha}_t}}\\\\x_0&=\frac{x_t-\sqrt{1-\bar{\alpha}_t}\epsilon_t}{\sqrt{\bar{\alpha}_t}}\end{aligned}
$$

$\text{其中的}\epsilon_t\text{由模型提供,}\sigma\text{的值可以为0,}x_{prev},x_t\text{中间可以差多个间隔}$
