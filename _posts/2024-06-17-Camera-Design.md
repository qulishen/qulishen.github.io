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

对于 Scattering Flare Images 的成像规律，对于带很长”尾巴“的耀斑，主要成因是来自于光线的衍射而非散射。使用夫琅禾费远场衍射可以证明散射耀斑的相似性。

其他：

（一）  镜片表面二次反射，即鬼影(ghost/ghost flare)

关键词：光源在视场内或附近、表面二次反射

（二）  手机摄影的鬼像(ghost/ghost image)

关键词：成像、中心对称

（三）  光源打在镜筒机械件上发生反射/散射，即眩光(flare)

关键词：光源在视场外、反射/散射

（四）  机械装配件部分阻挡正常光路，发生反射/散射，也称眩光(flare)

关键词：光源在视场内、机械装配件阻挡、反射/散射

（五）  特殊光学元件带来的杂光，如红外冷反射、菲涅尔透镜、衍射面、“星芒”等

[other](https://www.optkt.com/portal.php?mod=view&aid=694)

$$
\begin{aligned}
E=& C\frac{A^{\prime}}f\exp(ikf)\exp\left[ik\left(\frac{x^2+y^2}{2f}\right)\right]  \\
&\iint_\Sigma\tilde{E}(x_1,y_1)\exp[-\mathrm{i}k(lx_1+\omega y_1)]\mathrm{d}x_1\mathrm{~d}y_1,
\end{aligned}
$$

# 3. 艾里斑

# 4. 图像特征匹配