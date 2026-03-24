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

# 😄 About Me

<div class="about-intro-card" markdown="1">

I am currently pursuing a Master's degree in the Computer Vision Lab led by [Prof. Jufeng Yang](https://cv.nankai.edu.cn/) at [Nankai University](https://www.nankai.edu.cn/), where I also completed my undergraduate studies in the [Department of Software Engineering](https://cs.nankai.edu.cn/).

My research interests focus on image restoration, with particular attention to flicker removal, lens flare removal and deblurring.

</div>

# 🔥 News

<section class="news-row-carousel" data-news-row-carousel>
  <div class="news-row-viewport">
    <div class="news-row-track" data-news-row-track>
      <article class="news-row-card">
        <p class="news-row-date">2026.02</p>
        <p class="news-row-text">🎉🎉 1 paper is accepted to CVPR 2026.</p>
      </article>
      <article class="news-row-card">
        <p class="news-row-date">2026.01</p>
        <p class="news-row-text">🎉🎉 We are hosting <a href="https://www.codabench.org/competitions/12728/#/pages-tab">NTIRE 2026 The 3rd Restore Any Image Model (RAIM): Multi-Exposure Image Fusion in Dynamic Scenes (Track 2)</a>. Welcome to participate!</p>
      </article>
      <article class="news-row-card">
        <p class="news-row-date">2025.10</p>
        <p class="news-row-text">We win the third place in the <a href="https://www.cvlai.net/aim/2025/AIM2025awards_certificates.pdf">AIM 2025 Challenge on Robust Offline Video Super-Resolution</a>.</p>
      </article>
      <article class="news-row-card">
        <p class="news-row-date">2025.09</p>
        <p class="news-row-text">🎉🎉 2 papers are accepted to NeurIPS 2025.</p>
      </article>
      <article class="news-row-card">
        <p class="news-row-date">2025.08</p>
        <p class="news-row-text">We win the third place in the <a href="https://mipi-challenge.org/MIPI2025/award_certificates_2025.pdf">MIPI 2025 Challenge for Aberration Correction in Mobile Cameras</a>.</p>
      </article>
      <article class="news-row-card">
        <p class="news-row-date">2025.07</p>
        <p class="news-row-text">😊 I joined Y Lab at the OPPO Research Institute.</p>
      </article>
      <article class="news-row-card">
        <p class="news-row-date">2025.04</p>
        <p class="news-row-text">🎉🎉 1 paper is accepted to CVPR 2025 highlight.</p>
      </article>
      <article class="news-row-card">
        <p class="news-row-date">2024.07</p>
        <p class="news-row-text">🎉🎉 1 paper is accepted to ECCV 2024.</p>
      </article>
    </div>
  </div>

  <div class="news-row-footer">
    <div class="news-row-dots" data-news-row-dots></div>
    <div class="news-row-controls">
      <button class="news-row-nav" type="button" data-news-row-prev aria-label="Previous news">&#8592;</button>
      <button class="news-row-nav" type="button" data-news-row-next aria-label="Next news">&#8594;</button>
    </div>
  </div>
</section>

<script>
  (function () {
    function boot() {
    function initRowCarousel(root) {
      var track = root.querySelector("[data-news-row-track]");
      var cards = Array.prototype.slice.call(track.querySelectorAll(".news-row-card"));
      var prevBtn = root.querySelector("[data-news-row-prev]");
      var nextBtn = root.querySelector("[data-news-row-next]");
      var dotsContainer = root.querySelector("[data-news-row-dots]");
      var pageIndex = 0;
      var cardsPerPage = 3;
      var pageCount = 1;
      var dots = [];

      function getCardsPerPage() {
        if (window.innerWidth < 700) return 1;
        if (window.innerWidth < 1080) return 2;
        return 3;
      }

      function buildDots() {
        dotsContainer.innerHTML = "";
        dots = [];
        for (var i = 0; i < pageCount; i++) {
          var dot = document.createElement("button");
          dot.type = "button";
          dot.className = "news-row-dot";
          dot.setAttribute("aria-label", "Go to page " + (i + 1));
          dot.addEventListener("click", (function (index) {
            return function () {
              pageIndex = index;
              update();
            };
          })(i));
          dotsContainer.appendChild(dot);
          dots.push(dot);
        }
      }

      function update() {
        var targetCardIndex = pageIndex * cardsPerPage;
        var targetCard = cards[Math.min(targetCardIndex, cards.length - 1)];
        var offsetPx = targetCard ? targetCard.offsetLeft : 0;
        track.style.transform = "translateX(-" + offsetPx + "px)";

        if (prevBtn) prevBtn.disabled = pageIndex === 0;
        if (nextBtn) nextBtn.disabled = pageIndex >= pageCount - 1;

        dots.forEach(function (dot, i) {
          dot.classList.toggle("is-active", i === pageIndex);
        });
      }

      function layout() {
        cardsPerPage = getCardsPerPage();
        pageCount = Math.max(1, Math.ceil(cards.length / cardsPerPage));
        if (pageIndex > pageCount - 1) pageIndex = pageCount - 1;
        track.style.setProperty("--news-per-page", String(cardsPerPage));
        buildDots();
        update();
      }

      if (prevBtn) {
        prevBtn.addEventListener("click", function () {
          pageIndex = Math.max(0, pageIndex - 1);
          update();
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener("click", function () {
          pageIndex = Math.min(pageCount - 1, pageIndex + 1);
          update();
        });
      }

      layout();
      window.addEventListener("resize", layout);
    }

    var carousels = document.querySelectorAll("[data-news-row-carousel]");
    Array.prototype.forEach.call(carousels, initRowCarousel);
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", boot);
    } else {
      boot();
    }
  })();
</script>

# 📝 Publications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2026</div><img src='project/static/images/Flickerformer/0.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

It Takes Two: A Duet of Periodicity and Directionality for Burst Flicker Removal

**Lishen Qu**, Shihao Zhou, Jie Liang, Hui Zeng, Lei Zhang, Jufeng Yang

[**Project**](project/Flickerformer.html) [**Code**](https://github.com/qulishen/Flickerformer) [**PDF**](/project/static/pdfs/It_Takes_Two__A_Duet_of_Periodicity_and_Directionality_for_Burst_Flicker_Removal.pdf)

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

<section class="news-row-carousel" data-news-row-carousel>
  <div class="news-row-viewport">
    <div class="news-row-track" data-news-row-track>
      <article class="news-row-card">
        <p class="news-row-date">2024.11</p>
        <p class="news-row-text">Gold Award, Huawei Ascend AI Innovation Competition (Tianjin Division).</p>
      </article>
      <article class="news-row-card">
        <p class="news-row-date">2024.06</p>
        <p class="news-row-text">Outstanding Undergraduate Thesis Award, Nankai University.</p>
      </article>
      <article class="news-row-card">
        <p class="news-row-date">2023.09</p>
        <p class="news-row-text">Huawei "Intelligent Foundation" Scholarship.</p>
      </article>
      <article class="news-row-card">
        <p class="news-row-date">2022.09</p>
        <p class="news-row-text">SK Telecom Artificial Intelligence Scholarship, South Korea.</p>
      </article>
    </div>
  </div>

  <div class="news-row-footer">
    <div class="news-row-dots" data-news-row-dots></div>
    <div class="news-row-controls">
      <button class="news-row-nav" type="button" data-news-row-prev aria-label="Previous honors">&#8592;</button>
      <button class="news-row-nav" type="button" data-news-row-next aria-label="Next honors">&#8594;</button>
    </div>
  </div>
</section>

# 📖 Educations

<div class='paper-box'><div class='paper-box-image' style="min-width: 135px; max-width: 16%;"><div><img src='project/static/images/nankai.png' alt="Nankai University" style="width: 100%; max-width: 130px;"></div></div>
<div class='paper-box-text' markdown="1" style="padding-left: 1em; max-width: 84%;">

**Master Student, Computer Science and Technology** \| Nankai University.

Time: _2024.09 - (now)_

</div>
</div>

<div class='paper-box'><div class='paper-box-image' style="min-width: 135px; max-width: 16%;"><div><img src='project/static/images/nankai.png' alt="Nankai University" style="width: 100%; max-width: 130px;"></div></div>
<div class='paper-box-text' markdown="1" style="padding-left: 1em; max-width: 84%;">

**Undergraduate Student, Software Engineering** \| Nankai University.

Time: _2020.09 - 2024.06_

</div>
</div>

# 🤝 Academic Services

<section class="news-row-carousel" data-news-row-carousel>
  <div class="news-row-viewport">
    <div class="news-row-track" data-news-row-track>
      <article class="news-row-card">
        <p class="news-row-date">Journal Reviewer</p>
        <p class="news-row-text">IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)</p>
      </article>
      <article class="news-row-card">
        <p class="news-row-date">Conference Reviewer</p>
        <p class="news-row-text">Annual Conference on Neural Information Processing Systems (NeurIPS)</p>
      </article>
      <article class="news-row-card">
        <p class="news-row-date">Conference Reviewer</p>
        <p class="news-row-text">IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)</p>
      </article>
      <article class="news-row-card">
        <p class="news-row-date">Journal Reviewer</p>
        <p class="news-row-text">Jordanian Journal of Computers and Information Technology (JJCIT)</p>
      </article>
    </div>
  </div>

  <div class="news-row-footer">
    <div class="news-row-dots" data-news-row-dots></div>
    <div class="news-row-controls">
      <button class="news-row-nav" type="button" data-news-row-prev aria-label="Previous services">&#8592;</button>
      <button class="news-row-nav" type="button" data-news-row-next aria-label="Next services">&#8594;</button>
    </div>
  </div>
</section>
