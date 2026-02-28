---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am currently pursuing a Master's degree in the Computer Vision Lab led by [Prof. Jufeng Yang](https://cv.nankai.edu.cn/) at [Nankai University](https://www.nankai.edu.cn/), where I also completed my undergraduate studies in the [Department of Software Engineering](https://cs.nankai.edu.cn/).

My research interests focus on image restoration, with particular attention to flicker removal, lens flare removal and deblurring.

# 🔥 News

- _2026.02_: &nbsp;🎉🎉 1 paper is accepted to CVPR 2026.
- _2026.01_: &nbsp;🎉🎉 We are hosting [NTIRE 2026 The 3rd Restore Any Image Model (RAIM): Multi-Exposure Image Fusion in Dynamic Scenes (Track 2)](https://www.codabench.org/competitions/12728/#/pages-tab). Welcome to participate!
- _2025.10_: &nbsp; We win the third place in the [AIM 2025 Challenge on Robust Offline Video Super-Resolution](https://www.cvlai.net/aim/2025/AIM2025awards_certificates.pdf).
- _2025.09_: &nbsp;🎉🎉 2 paper are accepted to NeurIPS 2025.
- _2025.08_: &nbsp; We win the third place in the [MIPI 2025 Challenge for Aberration Correction in Mobile Cameras](https://mipi-challenge.org/MIPI2025/award_certificates_2025.pdf).
- _2025.07_: &nbsp; 😊 I joined Y Lab at the OPPO Research Institute.
- _2025.04_: &nbsp;🎉🎉 1 paper is accepted to CVPR 2025 highlight.
- _2024.07_: &nbsp;🎉🎉 1 paper is accepted to ECCV 2024.

# 📝 Publications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2026</div><img src='project/static/images/Flickerformer/0.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

It Takes Two: A Duet of Periodicity and Directionality for Burst Flicker Removal

**Lishen Qu**, Shihao Zhou, Jie Liang, Hui Zeng, Lei Zhang, Jufeng Yang

[**Project**](project/Flickerformer.html) [**Code**](https://github.com/qulishen/) [**PDF**](https://arxiv.org/abs/xxx)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2025</div><img src='project/static/images/BurstDeflicker/1.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

BurstDeflicker: A Benchmark Dataset for Flicker Removal in Dynamic Scenes

**Lishen Qu**, Zhihao Liu, Shihao Zhou, Yaqi Luo, Jie Liang, Hui Zeng, Lei Zhang, Jufeng Yang

[**Project**](project/BurstDeflicker.html) [**Code**](https://github.com/qulishen/BurstDeflicker) [**PDF**](https://arxiv.org/abs/2510.09996)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2025</div><img src='project/static/images/FlareX/1.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

FlareX: A Physics-Informed Dataset for Lens Flare Removal via 2D Synthesis and 3D Rendering

**Lishen Qu**, Zhihao Liu, Jinshan Pan, Shihao Zhou, Jinglei Shi, Duosheng Chen, Jufeng Yang

[**Project**](project/FlareX.html) [**Code**](https://github.com/qulishen/FlareX) [**PDF**](https://arxiv.org/abs/2510.09995)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2025 Highlight</div><img src='project/static/images/MDT/1.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

A Polarization-aided Transformer for Image Deblurring via Motion Vector Decomposition

Duosheng Chen, Shihao Zhou, Jinshan Pan, Jinglei Shi, **Lishen Qu**, Jufeng Yang

[**Project**](project/MDT.html) [**Code**](https://github.com/Calvin11311/MDT) [**PDF**](https://arxiv.org/pdf/2404.00358)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ECCV 2024</div><img src='project/static/images/Fpro/1.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Seeing the Unseen: A Frequency Prompt Guided Transformer for Image Restoration

Shihao Zhou, Jinshan Pan, Jinglei Shi, Duosheng Chen, **Lishen Qu**, Jufeng Yang

[**Project**](project/FPro.html) [**Code**](https://github.com/joshyZhou/FPro) [**PDF**](https://arxiv.org/pdf/2404.00288)

</div>
</div>

<!-- - [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet](https://github.com), A, B, C, **CVPR 2020** -->

# 🎖 Competitions

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICCV Workshop</div><img src='project/static/images/competition/AIM-2025.png' alt="sym" width="80%"></div></div>
<div class='paper-box-text' markdown="1">

AIM 2025 Challenge on Robust Offline Video Super-Resolution.

Zhihao Liu, **Lishen Qu**, Shihao Zhou, Jufeng Yang

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICCV Workshop</div><img src='project/static/images/competition/MIPI-2025.png' alt="sym" width="80%"></div></div>
<div class='paper-box-text' markdown="1">

MIPI 2025 Challenge for Aberration Correction in Mobile Cameras.

Shihao Zhou, Dayu Li, Juncheng Zhou, **Lishen Qu**, Jie Liang, Hui Zeng, Jufeng Yang

</div>
</div>

# 💼 Experiences

<div class='paper-box'><div class='paper-box-image' style="min-width: 150px; max-width: 18%;"><div><img src='project/static/images/oppo.png' alt="OPPO" style="width: 100%; max-width: 150px;"></div></div>
<div class='paper-box-text' markdown="1" style="padding-left: 1em; max-width: 82%;">

**Research Scientist/Engineer Intern** \| OPPO Research Institute, Y Lab.

Time: _2025.07 - (now)_

</div>
</div>

# 🎖 Honors and Awards

- _2024.06_, Outstanding Undergraduate Thesis Award, Nankai University
- _2023.09_, Huawei "Intelligent Foundation" Scholarship
- _2022.09_, SK Telecom Artificial Intelligence Scholarship, South Korea

# 📖 Educations

- _2024.09 - (now)_, Master student of Nankai University.
- _2020.09 - 2024.06_, Undergraduate student of Nankai University.
