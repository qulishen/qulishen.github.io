---
permalink: /
title: ""
excerpt: ""
author_profile: false
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

<header class="hero-profile">
  <div class="hero-profile__aside">
    <img class="hero-profile__avatar" src="images/zipai.jpg" alt="Lishen Qu">
    <div class="hero-profile__socials" aria-label="Contact links">
      <a href="{{ site.author.googlescholar }}" title="Google Scholar" aria-label="Google Scholar"><i class="ai ai-google-scholar" aria-hidden="true"></i></a>
      <a href="https://github.com/qulishen/" title="GitHub" aria-label="GitHub"><i class="fab fa-github" aria-hidden="true"></i></a>
      <a href="mailto:{{ site.author.email }}" title="Email" aria-label="Email"><i class="fas fa-envelope" aria-hidden="true"></i></a>
    </div>
  </div>

  <div class="hero-profile__main">
    <p class="hero-profile__eyebrow">About Me</p>
    <h1 class="hero-profile__name">Lishen Qu <span>瞿立燊</span></h1>
    <p class="hero-profile__role">Master's Student in Computer Vision</p>
    <p class="hero-profile__affiliation"><i class="fas fa-university" aria-hidden="true"></i> Nankai University &nbsp;·&nbsp; <i class="fas fa-map-marker-alt" aria-hidden="true"></i> Tianjin, China</p>
    <p class="hero-profile__email"><i class="fas fa-envelope" aria-hidden="true"></i> <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></p>
    <p class="hero-profile__bio">I am currently pursuing a Master's degree in the Computer Vision Lab led by <a href="https://cv.nankai.edu.cn/">Prof. Jufeng Yang</a> at <a href="https://www.nankai.edu.cn/">Nankai University</a>, where I earned my Bachelor's degree in Software Engineering from the <a href="https://cs.nankai.edu.cn/">Department of Software Engineering</a>.</p>
    <p class="hero-profile__bio">My research focuses on low-level vision, especially multi-exposure fusion, flicker removal, lens flare removal, and deblurring.</p>

    <div class="focus-banner">
      <i class="fas fa-lightbulb" aria-hidden="true"></i>
      <div><span>Research focus</span><strong>Computational Photography · Image Restoration · Low-level Vision</strong></div>
    </div>
    <div class="research-tags" aria-label="Research interests">
      <span>Multi-exposure Fusion</span><span>Flicker Removal</span><span>Lens Flare Removal</span><span>Deblurring</span>
    </div>
    <div class="profile-stats">
      <a href="{{ site.author.googlescholar }}"><strong id="total_cit">—</strong><span>Citations</span></a>
      <a href="https://github.com/qulishen/"><strong id="total_github_stars">—</strong><span>GitHub Stars</span></a>
      <a href="mailto:{{ site.author.email }}"><strong>Open</strong><span>to Collaborate</span></a>
    </div>
  </div>
</header>

<div class="section-heading"><span>✦</span><h2 id="news">News</h2></div>

<ul class="news-feed">
  <li class="is-highlight"><time>2026.06</time><span><strong>2 papers</strong> are accepted to ECCV 2026.</span></li>
  <li><time>2026.06</time><span>I will attend CVPR 2026 in Denver and give an oral presentation at the NTIRE 2026 Workshop. Welcome to join!</span></li>
  <li class="is-highlight"><time>2026.02</time><span><strong>1 paper</strong> is accepted to CVPR 2026.</span></li>
  <li><time>2026.01</time><span>We are hosting <a href="https://www.codabench.org/competitions/12728/#/pages-tab">NTIRE 2026 RAIM: Multi-Exposure Image Fusion in Dynamic Scenes</a>. Welcome to participate!</span></li>
  <li><time>2025.10</time><span>We won third place in the <a href="https://www.cvlai.net/aim/2025/AIM2025awards_certificates.pdf">AIM 2025 Challenge on Robust Offline Video Super-Resolution</a>.</span></li>
  <li class="is-highlight"><time>2025.09</time><span><strong>2 papers</strong> are accepted to NeurIPS 2025.</span></li>
  <li><time>2025.08</time><span>We won third place in the <a href="https://mipi-challenge.org/MIPI2025/award_certificates_2025.pdf">MIPI 2025 Challenge for Aberration Correction in Mobile Cameras</a>.</span></li>
  <li><time>2025.07</time><span>I joined Y Lab at the OPPO Research Institute.</span></li>
  <li><time>2025.04</time><span><strong>1 paper</strong> is accepted to CVPR 2025 as a Highlight.</span></li>
  <li><time>2024.07</time><span><strong>1 paper</strong> is accepted to ECCV 2024.</span></li>
</ul>

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

<div class="section-heading"><span><i class="fas fa-book-open" aria-hidden="true"></i></span><h2 id="publications">Publications</h2></div>

<div class="feature">
  <div class="feat-media"><img src="project/static/images/FreeMEF/1.png" alt="There and Back Again"></div>
  <div class="feat-info">
    <div class="feat-badges"><span class="feat-venue">ECCV 2026</span><span class="role role-first">First Author</span></div>
    <h3 class="feat-title">There and Back Again: A Flexible-Frame Transformer for Multi-Exposure Fusion</h3>
    <p class="feat-authors"><span class="me">Lishen Qu</span>, Yao Liu, Shihao Zhou, Jie Liang, Hui Zeng, Lei Zhang, Jufeng Yang</p>
    <p class="feat-desc">A flexible-frame transformer that reconstructs a natural high-dynamic-range result from bracketed exposures.</p>
    <div class="meta"><a class="chip chip-page" href="https://qulishen.github.io/MEF"><i class="fas fa-external-link-alt" aria-hidden="true"></i>Project</a><a class="chip chip-code" href="https://github.com/qulishen/FreeMEF"><i class="fab fa-github" aria-hidden="true"></i>GitHub</a><a class="chip chip-arxiv" href="https://arxiv.org/abs/2606.27905"><i class="ai ai-arxiv" aria-hidden="true"></i>arXiv</a></div>
  </div>
</div>

<div class="feature">
  <div class="feat-media"><img src="project/static/images/Expomotion/1.png" alt="ExpoMotion"></div>
  <div class="feat-info">
    <div class="feat-badges"><span class="feat-venue">ECCV 2026</span><span class="role role-cofirst">Co-First Author</span></div>
    <h3 class="feat-title">ExpoMotion: A Large-Scale Benchmark and A Householder Projection Network for Multi-Exposure Fusion</h3>
    <p class="feat-authors">Yao Liu<sup>*</sup>, <span class="me">Lishen Qu</span><sup>*</sup>, Shihao Zhou, Jie Liang, Hui Zeng, Lei Zhang, Jufeng Yang <small><sup>*</sup>Equal contribution.</small></p>
    <p class="feat-desc">A large-scale benchmark and learning framework for evaluating multi-exposure fusion under household lighting.</p>
    <div class="meta"><a class="chip chip-page" href="https://qulishen.github.io/MEF"><i class="fas fa-external-link-alt" aria-hidden="true"></i>Project</a><a class="chip chip-code" href="https://github.com/Leo-LiuYao/ExpoMotion"><i class="fab fa-github" aria-hidden="true"></i>GitHub</a><a class="chip chip-arxiv" href="https://arxiv.org/abs/2607.03110"><i class="ai ai-arxiv" aria-hidden="true"></i>arXiv</a></div>
  </div>
</div>

<div class="feature">
  <div class="feat-media"><img src="project/static/images/Flickerformer/0.png" alt="It Takes Two"></div>
  <div class="feat-info">
    <div class="feat-badges"><span class="feat-venue">CVPR 2026</span><span class="role role-first">First Author</span></div>
    <h3 class="feat-title">It Takes Two: A Duet of Periodicity and Directionality for Burst Flicker Removal</h3>
    <p class="feat-authors"><span class="me">Lishen Qu</span>, Shihao Zhou, Jie Liang, Hui Zeng, Lei Zhang, Jufeng Yang</p>
    <p class="feat-desc">A dual-stream model that jointly exploits periodicity and directionality to remove flicker from burst captures.</p>
    <div class="meta"><a class="chip chip-page" href="project/Flickerformer.html"><i class="fas fa-external-link-alt" aria-hidden="true"></i>Project</a><a class="chip chip-code" href="https://github.com/qulishen/Flickerformer"><i class="fab fa-github" aria-hidden="true"></i>GitHub</a><a class="chip" href="https://openaccess.thecvf.com/content/CVPR2026/papers/Qu_It_Takes_Two_A_Duet_of_Periodicity_and_Directionality_for_CVPR_2026_paper.pdf"><i class="fas fa-file-pdf" aria-hidden="true"></i>Paper</a></div>
  </div>
</div>

<div class="feature">
  <div class="feat-media"><img src="project/static/images/BurstDeflicker/1.png" alt="BurstDeflicker"></div>
  <div class="feat-info">
    <div class="feat-badges"><span class="feat-venue">NeurIPS 2025</span><span class="role role-first">First Author</span></div>
    <h3 class="feat-title">BurstDeflicker: A Benchmark Dataset for Flicker Removal in Dynamic Scenes</h3>
    <p class="feat-authors"><span class="me">Lishen Qu</span>, Zhihao Liu, Shihao Zhou, Yaqi Luo, Jie Liang, Hui Zeng, Lei Zhang, Jufeng Yang</p>
    <p class="feat-desc">A benchmark dataset and method suite for robust flicker removal in dynamic real-world scenes.</p>
    <div class="meta"><a class="chip chip-page" href="project/BurstDeflicker.html"><i class="fas fa-external-link-alt" aria-hidden="true"></i>Project</a><a class="chip chip-code" href="https://github.com/qulishen/BurstDeflicker"><i class="fab fa-github" aria-hidden="true"></i>GitHub</a><a class="chip chip-arxiv" href="https://arxiv.org/abs/2510.09996"><i class="ai ai-arxiv" aria-hidden="true"></i>arXiv</a></div>
  </div>
</div>

<div class="feature">
  <div class="feat-media"><img src="project/static/images/FlareX/1.png" alt="FlareX"></div>
  <div class="feat-info">
    <div class="feat-badges"><span class="feat-venue">NeurIPS 2025</span><span class="role role-first">First Author</span></div>
    <h3 class="feat-title">FlareX: A Physics-Informed Dataset for Lens Flare Removal via 2D Synthesis and 3D Rendering</h3>
    <p class="feat-authors"><span class="me">Lishen Qu</span>, Zhihao Liu, Jinshan Pan, Shihao Zhou, Jinglei Shi, Duosheng Chen, Jufeng Yang</p>
    <p class="feat-desc">A physics-informed dataset and rendering-aware approach for generalizable lens-flare removal.</p>
    <div class="meta"><a class="chip chip-page" href="project/FlareX.html"><i class="fas fa-external-link-alt" aria-hidden="true"></i>Project</a><a class="chip chip-code" href="https://github.com/qulishen/FlareX"><i class="fab fa-github" aria-hidden="true"></i>GitHub</a><a class="chip chip-arxiv" href="https://arxiv.org/abs/2510.09995"><i class="ai ai-arxiv" aria-hidden="true"></i>arXiv</a></div>
  </div>
</div>

<div class="feature">
  <div class="feat-media"><img src="project/static/images/MDT/1.png" alt="Polarization-aided Transformer"></div>
  <div class="feat-info">
    <div class="feat-badges"><span class="feat-venue">CVPR 2025 Highlight</span><span class="role role-coauthor">Co-Author</span></div>
    <h3 class="feat-title">A Polarization-aided Transformer for Image Deblurring via Motion Vector Decomposition</h3>
    <p class="feat-authors">Duosheng Chen, Shihao Zhou, Jinshan Pan, Jinglei Shi, <span class="me">Lishen Qu</span>, Jufeng Yang</p>
    <p class="feat-desc">A polarization-assisted transformer that decomposes motion vectors for sharper image deblurring.</p>
    <div class="meta"><a class="chip chip-page" href="project/MDT.html"><i class="fas fa-external-link-alt" aria-hidden="true"></i>Project</a><a class="chip chip-code" href="https://github.com/Calvin11311/MDT"><i class="fab fa-github" aria-hidden="true"></i>GitHub</a><a class="chip chip-arxiv" href="https://arxiv.org/pdf/2404.00358"><i class="ai ai-arxiv" aria-hidden="true"></i>arXiv</a></div>
  </div>
</div>

<div class="feature">
  <div class="feat-media"><img src="project/static/images/Fpro/1.png" alt="Seeing the Unseen"></div>
  <div class="feat-info">
    <div class="feat-badges"><span class="feat-venue">ECCV 2024</span><span class="role role-coauthor">Co-Author</span></div>
    <h3 class="feat-title">Seeing the Unseen: A Frequency Prompt Guided Transformer for Image Restoration</h3>
    <p class="feat-authors">Shihao Zhou, Jinshan Pan, Jinglei Shi, Duosheng Chen, <span class="me">Lishen Qu</span>, Jufeng Yang</p>
    <p class="feat-desc">A frequency-prompt transformer that restores degraded images by guiding recovery in spectral space.</p>
    <div class="meta"><a class="chip chip-page" href="project/FPro.html"><i class="fas fa-external-link-alt" aria-hidden="true"></i>Project</a><a class="chip chip-code" href="https://github.com/joshyZhou/FPro"><i class="fab fa-github" aria-hidden="true"></i>GitHub</a><a class="chip chip-arxiv" href="https://arxiv.org/pdf/2404.00288"><i class="ai ai-arxiv" aria-hidden="true"></i>arXiv</a></div>
  </div>
</div>

<!-- - [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet](https://github.com), A, B, C, **CVPR 2020** -->

# 📄 Workshop Reports

<section class="news-row-carousel" data-news-row-carousel>
  <div class="news-row-viewport">
    <div class="news-row-track" data-news-row-track>
    <article class="news-row-card">
        <p class="news-row-date">CVPRW 2026</p>
        <p class="news-row-text">
          NTIRE 2026 The 3rd Restore Any Image Model (RAIM) Challenge: Professional Image Quality Assessment
        </p>
        <div class="meta report-actions">
          <a class="chip chip-arxiv" href="https://openaccess.thecvf.com/content/CVPR2026W/NTIRE/papers/Qin_NTIRE_2026_The_3rd_Restore_Any_Image_Model_RAIM_Challenge_CVPRW_2026_paper.pdf"><i class="ai ai-arxiv" aria-hidden="true"></i>arXiv</a>
          <a class="chip chip-page" href="https://www.codabench.org/competitions/12789/"><i class="fas fa-trophy" aria-hidden="true"></i>Competition</a>
        </div>
      </article>
      <article class="news-row-card">
        <p class="news-row-date">CVPRW 2026</p>
        <p class="news-row-text">
          NTIRE 2026 The 3rd Restore Any Image Model (RAIM) Challenge: Multi-Exposure Image Fusion in Dynamic Scenes
        </p>
        <div class="meta report-actions">
          <a class="chip chip-arxiv" href="https://arxiv.org/abs/2604.09030"><i class="ai ai-arxiv" aria-hidden="true"></i>arXiv</a>
          <a class="chip chip-page" href="https://www.codabench.org/competitions/12728/"><i class="fas fa-trophy" aria-hidden="true"></i>Competition</a>
        </div>
      </article>
      <article class="news-row-card">
        <p class="news-row-date">CVPRW 2026</p>
        <p class="news-row-text">
          NTIRE 2026 The 3rd Restore Any Image Model (RAIM) Challenge: AI Flash Portrait
          <br>
          <a href="https://arxiv.org/abs/2604.11230">[arXiv]</a>
          <a href="https://www.codabench.org/competitions/12885/">[Competition]</a>
        </p>
      </article>
    </div>
  </div>

  <div class="news-row-footer">
    <div class="news-row-dots" data-news-row-dots></div>
    <div class="news-row-controls">
      <button class="news-row-nav" type="button" data-news-row-prev aria-label="Previous reports">&#8592;</button>
      <button class="news-row-nav" type="button" data-news-row-next aria-label="Next reports">&#8594;</button>
    </div>
  </div>
</section>

# 🎖 Competitions

<div class='paper-box paper-box--brand paper-box--competition'><div class="badge">ICCV Workshop</div><div class='paper-box-image'><div><img src='project/static/images/competition/AIM-2025.png' alt="sym"></div></div>
<div class='paper-box-text' markdown="1">

AIM 2025 Challenge on Robust Offline Video Super-Resolution.

Zhihao Liu, **Lishen Qu**, Shihao Zhou, Jufeng Yang

</div>
</div>

<div class='paper-box paper-box--brand paper-box--competition'><div class="badge">ICCV Workshop</div><div class='paper-box-image'><div><img src='project/static/images/competition/MIPI-2025.png' alt="sym"></div></div>
<div class='paper-box-text' markdown="1">

MIPI 2025 Challenge for Aberration Correction in Mobile Cameras.

Shihao Zhou, Dayu Li, Juncheng Zhou, **Lishen Qu**, Jie Liang, Hui Zeng, Jufeng Yang

</div>
</div>

# 💼 Experiences

<div class='paper-box paper-box--brand'><div class='paper-box-image'><div><img src='project/static/images/oppo.png' alt="OPPO"></div></div>
<div class='paper-box-text' markdown="1">

**Research Scientist/Engineer Intern** \| OPPO Research Institute, Y Lab.

Time: _2025.07 - (now)_

</div>
</div>

<div class="section-heading"><span>🏆</span><h2 id="honors">Honors &amp; Awards</h2></div>

<div class="award-grid">
  <div class="award-card">
    <div class="award-icon"><i class="fas fa-trophy" aria-hidden="true"></i></div>
    <div><div class="award-title">OPPO Outstanding Research Intern</div><div class="award-sub">Recognition for outstanding research contribution at OPPO Research Institute, Y Lab.</div><div class="award-year">2026.05</div></div>
  </div>
  <div class="award-card">
    <div class="award-icon"><i class="fas fa-medal" aria-hidden="true"></i></div>
    <div><div class="award-title">Gold Award, Huawei Ascend AI Innovation Competition</div><div class="award-sub">Tianjin Division.</div><div class="award-year">2024.11</div></div>
  </div>
</div>

<ul class="info-list">
  <li><span class="when">2024.06</span><span><strong>Outstanding Undergraduate Thesis Award</strong>, Nankai University.</span></li>
  <li><span class="when">2023.09</span><span><strong>Huawei “Intelligent Foundation” Scholarship</strong>.</span></li>
  <li><span class="when">2022.09</span><span><strong>SK Telecom Artificial Intelligence Scholarship</strong>, South Korea.</span></li>
</ul>

# 📖 Educations

<div class='paper-box paper-box--brand'><div class='paper-box-image'><div><img src='project/static/images/nankai.png' alt="Nankai University"></div></div>
<div class='paper-box-text' markdown="1">

**Master Student, Computer Science and Technology** \| Nankai University.

Time: _2024.09 - (now)_

</div>
</div>

<div class='paper-box paper-box--brand'><div class='paper-box-image'><div><img src='project/static/images/nankai.png' alt="Nankai University"></div></div>
<div class='paper-box-text' markdown="1">

**Bachelor's Degree, Software Engineering** \| Nankai University.

Time: _2020.09 - 2024.06_

</div>
</div>

<div class="section-heading"><span>🛠️</span><h2 id="services">Academic Services</h2></div>

<div class="svc">
  <div class="svc-row">
    <div class="svc-label">Conference Reviewer</div>
    <div class="svc-chips"><span class="svc-chip">NeurIPS</span><span class="svc-chip">CVPR</span><span class="svc-chip">CVPRW</span></div>
  </div>
  <div class="svc-row">
    <div class="svc-label">Journal Reviewer</div>
    <div class="svc-chips"><span class="svc-chip">IEEE TPAMI</span><span class="svc-chip">IJCV</span><span class="svc-chip">JJCIT</span></div>
  </div>
</div>

<style>
  .reveal-on-load {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.7s cubic-bezier(0.22, 0.61, 0.36, 1),
      transform 0.7s cubic-bezier(0.22, 0.61, 0.36, 1);
    will-change: opacity, transform;
  }

  .reveal-on-load.is-visible {
    opacity: 1;
    transform: none;
    will-change: auto;
  }

  @media (prefers-reduced-motion: reduce) {
    .reveal-on-load {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }
</style>

<script>
  (function () {
    function boot() {
      var selector = [
        ".page__content h1",
        ".about-intro-card",
        ".news-row-viewport",
        ".paper-box",
        ".feature"
      ].join(",");

      var elements = Array.prototype.slice.call(document.querySelectorAll(selector));
      if (!elements.length) return;

      var reduceMotion = window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion || !("IntersectionObserver" in window)) {
        elements.forEach(function (el) {
          el.classList.add("reveal-on-load", "is-visible");
        });
        return;
      }

      elements.forEach(function (el) {
        el.classList.add("reveal-on-load");
      });

      var viewportH = window.innerHeight || document.documentElement.clientHeight;
      var initial = [];
      var deferred = [];

      elements.forEach(function (el) {
        var top = el.getBoundingClientRect().top;
        if (top < viewportH * 0.95) {
          initial.push(el);
        } else {
          deferred.push(el);
        }
      });

      initial.sort(function (a, b) {
        return a.getBoundingClientRect().top - b.getBoundingClientRect().top;
      });

      // Force a reflow so the hidden (opacity:0) state is painted first,
      // then reveal top-to-bottom on the next frame to trigger the transition.
      void document.body.offsetHeight;

      requestAnimationFrame(function () {
        initial.forEach(function (el, index) {
          el.style.transitionDelay = Math.min(index * 110, 900) + "ms";
          el.classList.add("is-visible");
        });
      });

      if (deferred.length && "IntersectionObserver" in window) {
        var observer = new IntersectionObserver(function (entries, obs) {
          var visible = entries.filter(function (entry) {
            return entry.isIntersecting;
          });

          visible.sort(function (a, b) {
            return a.boundingClientRect.top - b.boundingClientRect.top;
          });

          visible.forEach(function (entry, index) {
            entry.target.style.transitionDelay = Math.min(index * 90, 400) + "ms";
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          });
        }, { threshold: 0.08, rootMargin: "0px 0px -8% 0px" });

        deferred.forEach(function (el) {
          observer.observe(el);
        });
      } else {
        deferred.forEach(function (el) {
          el.classList.add("is-visible");
        });
      }
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", boot);
    } else {
      boot();
    }
  })();
</script>
