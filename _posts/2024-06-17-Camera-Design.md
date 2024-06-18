---
layout: post

title: "耀斑-光学相关"

author: "lishenqu"

header-img: "img/post-bg-infinity.jpg"

header-mask: 0.3

mathjax: true

tags:

  - 光学

---
# 1. 透镜设计

由于光的折射发生在介质的交界面，这里以玻璃与空气为例，若能去除光在玻璃中直线传播的部分而保留发生折射的曲面，便能省下大量材料同时达到相同的聚光效果。如图，菲涅耳透镜便是通过此法使透镜变薄。曲面划分得越细，透镜越能够做薄。

随着光学材质技术的发展，以往难以用在摄影用镜头的菲涅耳透镜也逐渐出现在摄影镜头，如尼克尔镜头（Nikkor）的AF-S NIKKOR 300mm f/4E PF ED VR即使用了一片PF（Phase Fresnel）镜片，大幅减轻了重量与体积，根据尼康说法，使用菲涅尔透镜的镜头可以大幅降低色散。佳能EF接环镜头产品中有一部分使用了类似菲涅尔透镜的衍射镜片，称为“DO镜“。

![alt text](/img/in-post/2024-06-17-Camera-Design/Fresnel_Lens_P.gif)

# 2. 夫琅禾费远场衍射

[知乎](https://zhuanlan.zhihu.com/p/427845538)

对于 Scattering Flare Images 的成像规律，我们目前认为主要成因是来自于光线的衍射而非散射。使用夫琅禾费远场衍射可以证明散射耀斑的相似性。

$$
\begin{aligned}
E=& C\frac{A^{\prime}}f\exp(ikf)\exp\left[ik\left(\frac{x^2+y^2}{2f}\right)\right]  \\
&\iint_\Sigma\tilde{E}(x_1,y_1)\exp[-\mathrm{i}k(lx_1+\omega y_1)]\mathrm{d}x_1\mathrm{~d}y_1,
\end{aligned}
$$

# 3. 图像特征匹配。

# 4. 