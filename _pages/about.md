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

<header class="hero-profile" id="about-me">
  <div class="hero-profile__aside">
    <img class="hero-profile__avatar" src="images/xinyi.jpg" alt="Lishen Qu">
    <div class="hero-profile__socials" aria-label="Contact links">
      <a href="{{ site.author.googlescholar }}" title="Google Scholar" aria-label="Google Scholar"><i class="ai ai-google-scholar" aria-hidden="true"></i></a>
      <a href="https://github.com/qulishen/" title="GitHub" aria-label="GitHub"><i class="fab fa-github" aria-hidden="true"></i></a>
      <a href="mailto:{{ site.author.email }}" title="Email" aria-label="Email"><i class="fas fa-envelope" aria-hidden="true"></i></a>
    </div>
  </div>

  <div class="hero-profile__main">
    <p class="hero-profile__eyebrow"><span class="lang-en">About Me</span><span class="lang-zh">关于我</span></p>
    <h1 class="hero-profile__name">Lishen Qu <span>瞿立燊</span></h1>
    <p class="hero-profile__role"><span class="lang-en">Master's Student in Computer Vision</span><span class="lang-zh">计算机视觉硕士研究生</span></p>
    <p class="hero-profile__affiliation"><i class="fas fa-university" aria-hidden="true"></i> <span class="lang-en">Nankai University</span><span class="lang-zh">南开大学</span> &nbsp;·&nbsp; <i class="fas fa-map-marker-alt" aria-hidden="true"></i> <span class="lang-en">Tianjin, China</span><span class="lang-zh">中国 · 天津</span></p>
    <p class="hero-profile__email"><i class="fas fa-envelope" aria-hidden="true"></i> <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></p>
    <p class="hero-profile__bio lang-en">I am currently pursuing a Master's degree in the Computer Vision Lab led by <a href="https://cv.nankai.edu.cn/">Prof. Jufeng Yang</a> at <a href="https://www.nankai.edu.cn/">Nankai University</a>, where I earned my Bachelor's degree in Software Engineering from the <a href="https://cs.nankai.edu.cn/">Department of Software Engineering</a>.</p>
    <p class="hero-profile__bio lang-zh">我目前在<a href="https://www.nankai.edu.cn/">南开大学</a>杨巨峰教授领导的<a href="https://cv.nankai.edu.cn/">计算机视觉实验室</a>攻读硕士学位；本科毕业于南开大学<a href="https://cs.nankai.edu.cn/">软件学院</a>软件工程专业。</p>
    <p class="hero-profile__bio lang-en">My research focuses on low-level vision, especially multi-exposure fusion, flicker removal, lens flare removal, and deblurring.</p>
    <p class="hero-profile__bio lang-zh">我的研究聚焦低层视觉，尤其关注多曝光融合、闪烁消除、镜头耀斑消除与图像去模糊。</p>

    <div class="focus-banner">
      <i class="fas fa-lightbulb" aria-hidden="true"></i>
      <div><span><span class="lang-en">Research focus</span><span class="lang-zh">研究方向</span></span><strong><span class="lang-en">Computational Photography · Image Restoration · Low-level Vision</span><span class="lang-zh">计算摄影 · 图像复原 · 低层视觉</span></strong></div>
    </div>
    <div class="research-tags" aria-label="Research interests">
      <span><span class="lang-en">Multi-exposure Fusion</span><span class="lang-zh">多曝光融合</span></span><span><span class="lang-en">Flicker Removal</span><span class="lang-zh">闪烁消除</span></span><span><span class="lang-en">Lens Flare Removal</span><span class="lang-zh">镜头耀斑消除</span></span><span><span class="lang-en">Deblurring</span><span class="lang-zh">图像去模糊</span></span>
    </div>
    <div class="profile-stats">
      <a href="{{ site.author.googlescholar }}">
        <span class="profile-stat__value"><i class="fas fa-graduation-cap" aria-hidden="true"></i><strong id="total_cit">—</strong></span>
        <span><span class="lang-en">Citations</span><span class="lang-zh">引用量</span></span>
      </a>
      <a href="https://github.com/qulishen/">
        <span class="profile-stat__value"><i class="fas fa-star" aria-hidden="true"></i><strong id="total_github_stars">—</strong></span>
        <span>GitHub Stars</span>
      </a>
      <div class="profile-stat--visits">
        <span class="profile-stat__value"><i class="fas fa-chart-line" aria-hidden="true"></i><strong id="recent_visits" aria-live="polite">—</strong></span>
        <span><span class="lang-en">Visits · 7 days</span><span class="lang-zh">近 7 天访问量</span></span>
      </div>
    </div>
  </div>
</header>

<div class="section-heading"><span>✦</span><h2 id="news"><span class="lang-en">News</span><span class="lang-zh">最新动态</span></h2></div>

<ul class="news-feed">
  <li class="is-highlight"><time>2026.06</time><span class="lang-en"><strong>2 papers</strong> are accepted to ECCV 2026.</span><span class="lang-zh"><strong>2 篇论文</strong>被 ECCV 2026 接收。</span></li>
  <li><time>2026.06</time><span class="lang-en">I will attend CVPR 2026 in Denver and give an oral presentation at the NTIRE 2026 Workshop. Welcome to join!</span><span class="lang-zh">我将参加在丹佛举办的 CVPR 2026，并在 NTIRE 2026 Workshop 作口头报告，欢迎交流！</span></li>
  <li class="is-highlight"><time>2026.02</time><span class="lang-en"><strong>1 paper</strong> is accepted to CVPR 2026.</span><span class="lang-zh"><strong>1 篇论文</strong>被 CVPR 2026 接收。</span></li>
  <li><time>2026.01</time><span class="lang-en">We are hosting <a href="https://www.codabench.org/competitions/12728/#/pages-tab">NTIRE 2026 RAIM: Multi-Exposure Image Fusion in Dynamic Scenes</a>. Welcome to participate!</span><span class="lang-zh">我们正在举办 <a href="https://www.codabench.org/competitions/12728/#/pages-tab">NTIRE 2026 RAIM: Multi-Exposure Image Fusion in Dynamic Scenes</a>，欢迎参与！</span></li>
  <li><time>2025.10</time><span class="lang-en">We won third place in the <a href="https://www.cvlai.net/aim/2025/AIM2025awards_certificates.pdf">AIM 2025 Challenge on Robust Offline Video Super-Resolution</a>.</span><span class="lang-zh">我们在 <a href="https://www.cvlai.net/aim/2025/AIM2025awards_certificates.pdf">AIM 2025 Challenge on Robust Offline Video Super-Resolution</a> 中获得第三名。</span></li>
  <li class="is-highlight"><time>2025.09</time><span class="lang-en"><strong>2 papers</strong> are accepted to NeurIPS 2025.</span><span class="lang-zh"><strong>2 篇论文</strong>被 NeurIPS 2025 接收。</span></li>
  <li><time>2025.08</time><span class="lang-en">We won third place in the <a href="https://mipi-challenge.org/MIPI2025/award_certificates_2025.pdf">MIPI 2025 Challenge for Aberration Correction in Mobile Cameras</a>.</span><span class="lang-zh">我们在 <a href="https://mipi-challenge.org/MIPI2025/award_certificates_2025.pdf">MIPI 2025 Challenge for Aberration Correction in Mobile Cameras</a> 中获得第三名。</span></li>
  <li><time>2025.07</time><span class="lang-en">I joined Y Lab at the OPPO Research Institute.</span><span class="lang-zh">我加入 OPPO 研究院 Y Lab。</span></li>
  <li><time>2025.04</time><span class="lang-en"><strong>1 paper</strong> is accepted to CVPR 2025 as a Highlight.</span><span class="lang-zh"><strong>1 篇论文</strong>被 CVPR 2025 接收并入选 Highlight。</span></li>
  <li><time>2024.07</time><span class="lang-en"><strong>1 paper</strong> is accepted to ECCV 2024.</span><span class="lang-zh"><strong>1 篇论文</strong>被 ECCV 2024 接收。</span></li>
</ul>

<script>
  (function () {
    var publicationTranslations = {
      roles: ['First Author', 'Co-First Author', 'Co-Author'],
      rolesZh: ['第一作者', '共同第一作者', '合作作者'],
      descriptionsZh: [
        '提出灵活帧数 Transformer，从包围曝光序列中重建自然的高动态范围图像。',
        '构建大规模基准与学习框架，用于评估家庭照明条件下的多曝光融合。',
        '通过联合利用周期性与方向性的双流模型，消除连拍图像中的闪烁。',
        '提供面向真实动态场景稳健闪烁消除的基准数据集与方法套件。',
        '提出物理先验数据集与感知渲染方法，实现更具泛化性的镜头耀斑消除。',
        '利用偏振辅助 Transformer 分解运动向量，实现更清晰的图像去模糊。',
        '以频率提示引导频谱空间中的图像恢复，修复退化图像。'
      ]
    };
    function updatePublicationLanguage(isChinese) {
      document.querySelectorAll('.role').forEach(function (element) {
        if (!element.dataset.en) element.dataset.en = element.textContent.trim();
        var index = publicationTranslations.roles.indexOf(element.dataset.en);
        if (index >= 0) element.textContent = isChinese ? publicationTranslations.rolesZh[index] : element.dataset.en;
      });
      document.querySelectorAll('.feat-desc').forEach(function (element, index) {
        if (!element.dataset.en) element.dataset.en = element.textContent.trim();
        element.textContent = isChinese ? publicationTranslations.descriptionsZh[index] : element.dataset.en;
      });
    }
    document.addEventListener('site-language-change', function (event) {
      var isChinese = event.detail.language === 'zh';
      updatePublicationLanguage(isChinese);
      document.querySelectorAll('[data-news-row-dots]').forEach(function (container) {
        container.querySelectorAll('.news-row-dot').forEach(function (dot, index) {
          dot.setAttribute('aria-label', (isChinese ? '前往第 ' : 'Go to page ') + (index + 1) + (isChinese ? ' 页' : ''));
        });
      });
    });
    function boot() {
      updatePublicationLanguage(document.body.classList.contains('zh'));
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
          var isChinese = document.body.classList.contains("zh");
          dot.setAttribute("aria-label", (isChinese ? "前往第 " : "Go to page ") + (i + 1) + (isChinese ? " 页" : ""));
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

<div class="section-heading"><span><i class="fas fa-book-open" aria-hidden="true"></i></span><h2 id="publications"><span class="lang-en">Publications</span><span class="lang-zh">论文发表</span></h2></div>

<div class="feature">
  <div class="feat-media"><img src="project/static/images/FreeMEF/1.png" alt="There and Back Again"></div>
  <div class="feat-info">
    <div class="feat-badges"><span class="feat-venue">ECCV 2026</span><span class="role role-first">First Author</span></div>
    <h3 class="feat-title">There and Back Again: A Flexible-Frame Transformer for Multi-Exposure Fusion</h3>
    <p class="feat-authors"><span class="me">Lishen Qu</span>, Yao Liu, Shihao Zhou, Jie Liang, Hui Zeng, Lei Zhang, Jufeng Yang</p>
    <p class="feat-desc">A flexible-frame transformer that reconstructs a natural high-dynamic-range result from bracketed exposures.</p>
    <div class="meta"><a class="chip chip-page" href="https://qulishen.github.io/MEF"><i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="lang-en">Project</span><span class="lang-zh">项目</span></a><a class="chip chip-code" href="https://github.com/qulishen/FreeMEF"><i class="fab fa-github" aria-hidden="true"></i>GitHub</a><a class="chip chip-arxiv" href="https://arxiv.org/abs/2606.27905"><i class="ai ai-arxiv" aria-hidden="true"></i>arXiv</a></div>
  </div>
</div>

<div class="feature">
  <div class="feat-media"><img src="project/static/images/Expomotion/1.png" alt="ExpoMotion"></div>
  <div class="feat-info">
    <div class="feat-badges"><span class="feat-venue">ECCV 2026</span><span class="role role-cofirst">Co-First Author</span></div>
    <h3 class="feat-title">ExpoMotion: A Large-Scale Benchmark and A Householder Projection Network for Multi-Exposure Fusion</h3>
    <p class="feat-authors">Yao Liu<sup>*</sup>, <span class="me">Lishen Qu</span><sup>*</sup>, Shihao Zhou, Jie Liang, Hui Zeng, Lei Zhang, Jufeng Yang</p>
    <p class="feat-desc">A large-scale benchmark and learning framework for evaluating multi-exposure fusion under household lighting.</p>
    <div class="meta"><a class="chip chip-page" href="https://qulishen.github.io/MEF"><i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="lang-en">Project</span><span class="lang-zh">项目</span></a><a class="chip chip-code" href="https://github.com/Leo-LiuYao/ExpoMotion"><i class="fab fa-github" aria-hidden="true"></i>GitHub</a><a class="chip chip-arxiv" href="https://arxiv.org/abs/2607.03110"><i class="ai ai-arxiv" aria-hidden="true"></i>arXiv</a></div>
  </div>
</div>

<div class="feature">
  <div class="feat-media"><img src="project/static/images/Flickerformer/0.png" alt="It Takes Two"></div>
  <div class="feat-info">
    <div class="feat-badges"><span class="feat-venue">CVPR 2026</span><span class="role role-first">First Author</span></div>
    <h3 class="feat-title">It Takes Two: A Duet of Periodicity and Directionality for Burst Flicker Removal</h3>
    <p class="feat-authors"><span class="me">Lishen Qu</span>, Shihao Zhou, Jie Liang, Hui Zeng, Lei Zhang, Jufeng Yang</p>
    <p class="feat-desc">A dual-stream model that jointly exploits periodicity and directionality to remove flicker from burst captures.</p>
    <div class="meta"><a class="chip chip-page" href="project/Flickerformer.html"><i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="lang-en">Project</span><span class="lang-zh">项目</span></a><a class="chip chip-code" href="https://github.com/qulishen/Flickerformer"><i class="fab fa-github" aria-hidden="true"></i>GitHub</a><a class="chip" href="https://openaccess.thecvf.com/content/CVPR2026/papers/Qu_It_Takes_Two_A_Duet_of_Periodicity_and_Directionality_for_CVPR_2026_paper.pdf"><i class="fas fa-file-pdf" aria-hidden="true"></i><span class="lang-en">Paper</span><span class="lang-zh">论文</span></a></div>
  </div>
</div>

<div class="feature">
  <div class="feat-media"><img src="project/static/images/BurstDeflicker/1.png" alt="BurstDeflicker"></div>
  <div class="feat-info">
    <div class="feat-badges"><span class="feat-venue">NeurIPS 2025</span><span class="role role-first">First Author</span></div>
    <h3 class="feat-title">BurstDeflicker: A Benchmark Dataset for Flicker Removal in Dynamic Scenes</h3>
    <p class="feat-authors"><span class="me">Lishen Qu</span>, Zhihao Liu, Shihao Zhou, Yaqi Luo, Jie Liang, Hui Zeng, Lei Zhang, Jufeng Yang</p>
    <p class="feat-desc">A benchmark dataset and method suite for robust flicker removal in dynamic real-world scenes.</p>
    <div class="meta"><a class="chip chip-page" href="project/BurstDeflicker.html"><i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="lang-en">Project</span><span class="lang-zh">项目</span></a><a class="chip chip-code" href="https://github.com/qulishen/BurstDeflicker"><i class="fab fa-github" aria-hidden="true"></i>GitHub</a><a class="chip chip-arxiv" href="https://arxiv.org/abs/2510.09996"><i class="ai ai-arxiv" aria-hidden="true"></i>arXiv</a></div>
  </div>
</div>

<div class="feature">
  <div class="feat-media"><img src="project/static/images/FlareX/1.png" alt="FlareX"></div>
  <div class="feat-info">
    <div class="feat-badges"><span class="feat-venue">NeurIPS 2025</span><span class="role role-first">First Author</span></div>
    <h3 class="feat-title">FlareX: A Physics-Informed Dataset for Lens Flare Removal via 2D Synthesis and 3D Rendering</h3>
    <p class="feat-authors"><span class="me">Lishen Qu</span>, Zhihao Liu, Jinshan Pan, Shihao Zhou, Jinglei Shi, Duosheng Chen, Jufeng Yang</p>
    <p class="feat-desc">A physics-informed dataset and rendering-aware approach for generalizable lens-flare removal.</p>
    <div class="meta"><a class="chip chip-page" href="project/FlareX.html"><i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="lang-en">Project</span><span class="lang-zh">项目</span></a><a class="chip chip-code" href="https://github.com/qulishen/FlareX"><i class="fab fa-github" aria-hidden="true"></i>GitHub</a><a class="chip chip-arxiv" href="https://arxiv.org/abs/2510.09995"><i class="ai ai-arxiv" aria-hidden="true"></i>arXiv</a></div>
  </div>
</div>

<div class="feature">
  <div class="feat-media"><img src="project/static/images/MDT/1.png" alt="Polarization-aided Transformer"></div>
  <div class="feat-info">
    <div class="feat-badges"><span class="feat-venue">CVPR 2025 Highlight</span><span class="role role-coauthor">Co-Author</span></div>
    <h3 class="feat-title">A Polarization-aided Transformer for Image Deblurring via Motion Vector Decomposition</h3>
    <p class="feat-authors">Duosheng Chen, Shihao Zhou, Jinshan Pan, Jinglei Shi, <span class="me">Lishen Qu</span>, Jufeng Yang</p>
    <p class="feat-desc">A polarization-assisted transformer that decomposes motion vectors for sharper image deblurring.</p>
    <div class="meta"><a class="chip chip-page" href="project/MDT.html"><i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="lang-en">Project</span><span class="lang-zh">项目</span></a><a class="chip chip-code" href="https://github.com/Calvin11311/MDT"><i class="fab fa-github" aria-hidden="true"></i>GitHub</a><a class="chip chip-arxiv" href="https://arxiv.org/pdf/2404.00358"><i class="ai ai-arxiv" aria-hidden="true"></i>arXiv</a></div>
  </div>
</div>

<div class="feature">
  <div class="feat-media"><img src="project/static/images/Fpro/1.png" alt="Seeing the Unseen"></div>
  <div class="feat-info">
    <div class="feat-badges"><span class="feat-venue">ECCV 2024</span><span class="role role-coauthor">Co-Author</span></div>
    <h3 class="feat-title">Seeing the Unseen: A Frequency Prompt Guided Transformer for Image Restoration</h3>
    <p class="feat-authors">Shihao Zhou, Jinshan Pan, Jinglei Shi, Duosheng Chen, <span class="me">Lishen Qu</span>, Jufeng Yang</p>
    <p class="feat-desc">A frequency-prompt transformer that restores degraded images by guiding recovery in spectral space.</p>
    <div class="meta"><a class="chip chip-page" href="project/FPro.html"><i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="lang-en">Project</span><span class="lang-zh">项目</span></a><a class="chip chip-code" href="https://github.com/joshyZhou/FPro"><i class="fab fa-github" aria-hidden="true"></i>GitHub</a><a class="chip chip-arxiv" href="https://arxiv.org/pdf/2404.00288"><i class="ai ai-arxiv" aria-hidden="true"></i>arXiv</a></div>
  </div>
</div>

<!-- - [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet](https://github.com), A, B, C, **CVPR 2020** -->

<div class="section-heading"><span>📄</span><h2 id="workshop-reports"><span class="lang-en">Workshop Reports</span><span class="lang-zh">技术报告</span></h2></div>

<section class="news-row-carousel" data-news-row-carousel>
  <div class="news-row-viewport">
    <div class="news-row-track" data-news-row-track>
      <article class="news-row-card">
        <p class="news-row-date">CVPRW 2026</p>
        <p class="news-row-text lang-en">NTIRE 2026 The 3rd Restore Any Image Model (RAIM) Challenge: Professional Image Quality Assessment</p>
        <p class="news-row-text lang-zh">NTIRE 2026 第三届任意图像恢复模型（RAIM）挑战赛：专业图像质量评估</p>
        <div class="meta report-actions">
          <a class="chip chip-arxiv" href="https://openaccess.thecvf.com/content/CVPR2026W/NTIRE/papers/Qin_NTIRE_2026_The_3rd_Restore_Any_Image_Model_RAIM_Challenge_CVPRW_2026_paper.pdf"><i class="ai ai-arxiv" aria-hidden="true"></i>arXiv</a>
          <a class="chip chip-page" href="https://www.codabench.org/competitions/12789/"><i class="fas fa-trophy" aria-hidden="true"></i><span class="lang-en">Competition</span><span class="lang-zh">竞赛</span></a>
        </div>
      </article>
      <article class="news-row-card">
        <p class="news-row-date">CVPRW 2026</p>
        <p class="news-row-text lang-en">NTIRE 2026 The 3rd Restore Any Image Model (RAIM) Challenge: Multi-Exposure Image Fusion in Dynamic Scenes</p>
        <p class="news-row-text lang-zh">NTIRE 2026 第三届任意图像恢复模型（RAIM）挑战赛：动态场景多曝光图像融合</p>
        <div class="meta report-actions">
          <a class="chip chip-arxiv" href="https://arxiv.org/abs/2604.09030"><i class="ai ai-arxiv" aria-hidden="true"></i>arXiv</a>
          <a class="chip chip-page" href="https://www.codabench.org/competitions/12728/"><i class="fas fa-trophy" aria-hidden="true"></i><span class="lang-en">Competition</span><span class="lang-zh">竞赛</span></a>
        </div>
      </article>
      <article class="news-row-card">
        <p class="news-row-date">CVPRW 2026</p>
        <p class="news-row-text lang-en">NTIRE 2026 The 3rd Restore Any Image Model (RAIM) Challenge: AI Flash Portrait</p>
        <p class="news-row-text lang-zh">NTIRE 2026 第三届任意图像恢复模型（RAIM）挑战赛：AI 闪光灯人像</p>
        <div class="meta report-actions">
          <a class="chip chip-arxiv" href="https://arxiv.org/abs/2604.11230"><i class="ai ai-arxiv" aria-hidden="true"></i>arXiv</a>
          <a class="chip chip-page" href="https://www.codabench.org/competitions/12885/"><i class="fas fa-trophy" aria-hidden="true"></i><span class="lang-en">Competition</span><span class="lang-zh">竞赛</span></a>
        </div>
      </article>
    </div>
  </div>

  <div class="news-row-footer">
    <div class="news-row-dots" data-news-row-dots></div>
    <div class="news-row-controls">
      <button class="news-row-nav" type="button" data-news-row-prev aria-label="上一份报告" data-label-en="Previous reports" data-label-zh="上一份报告">&#8592;</button>
      <button class="news-row-nav" type="button" data-news-row-next aria-label="下一份报告" data-label-en="Next reports" data-label-zh="下一份报告">&#8594;</button>
    </div>
  </div>
</section>

<div class="section-heading"><span>🎖</span><h2 id="competitions"><span class="lang-en">Competitions</span><span class="lang-zh">竞赛经历</span></h2></div>

<div class='paper-box paper-box--brand paper-box--competition'><div class="badge">ICCV Workshop</div><div class='paper-box-image'><div><img src='project/static/images/competition/AIM-2025.png' alt="AIM 2025"></div></div>
<div class='paper-box-text'>
  <p class="lang-en">AIM 2025 Challenge on Robust Offline Video Super-Resolution.</p>
  <p class="lang-zh">AIM 2025 鲁棒离线视频超分辨率挑战赛。</p>
  <p>Zhihao Liu, <strong>Lishen Qu</strong>, Shihao Zhou, Jufeng Yang</p>
</div>
</div>

<div class='paper-box paper-box--brand paper-box--competition'><div class="badge">ICCV Workshop</div><div class='paper-box-image'><div><img src='project/static/images/competition/MIPI-2025.png' alt="MIPI 2025"></div></div>
<div class='paper-box-text'>
  <p class="lang-en">MIPI 2025 Challenge for Aberration Correction in Mobile Cameras.</p>
  <p class="lang-zh">MIPI 2025 移动相机像差校正挑战赛。</p>
  <p>Shihao Zhou, Dayu Li, Juncheng Zhou, <strong>Lishen Qu</strong>, Jie Liang, Hui Zeng, Jufeng Yang</p>
</div>
</div>

<div class="section-heading"><span>💼</span><h2 id="experiences"><span class="lang-en">Experiences</span><span class="lang-zh">工作经历</span></h2></div>

<div class='paper-box paper-box--brand paper-box--compact'><div class='paper-box-image'><div><img src='project/static/images/oppo.png' alt="OPPO"></div></div>
<div class='paper-box-text'>
  <p><strong><span class="lang-en">Research Scientist/Engineer Intern</span><span class="lang-zh">研究科学家／工程师实习生</span></strong> | OPPO <span class="lang-en">Research Institute</span><span class="lang-zh">研究院</span>, Y Lab.</p>
  <p><span class="lang-en">Time: <em>2025.07 - (now)</em></span><span class="lang-zh">时间：<em>2025.07 - 至今</em></span></p>
</div>
</div>

<div class="section-heading"><span>🏆</span><h2 id="honors"><span class="lang-en">Honors &amp; Awards</span><span class="lang-zh">荣誉与奖项</span></h2></div>

<div class="award-grid">
  <div class="award-card">
    <div class="award-icon"><i class="fas fa-trophy" aria-hidden="true"></i></div>
    <div><div class="award-title"><span class="lang-en">OPPO Outstanding Research Intern</span><span class="lang-zh">OPPO 杰出研究实习生</span></div><div class="award-sub"><span class="lang-en">Recognition for outstanding research contribution at OPPO Research Institute, Y Lab.</span><span class="lang-zh">表彰在 OPPO 研究院 Y Lab 作出的突出科研贡献。</span></div><div class="award-year">2026.05</div></div>
  </div>
  <div class="award-card">
    <div class="award-icon"><i class="fas fa-medal" aria-hidden="true"></i></div>
    <div><div class="award-title"><span class="lang-en">Gold Award, Huawei Ascend AI Innovation Competition</span><span class="lang-zh">华为昇腾 AI 创新大赛金奖</span></div><div class="award-sub"><span class="lang-en">Tianjin Division.</span><span class="lang-zh">天津赛区。</span></div><div class="award-year">2024.11</div></div>
  </div>
</div>

<ul class="info-list">
  <li><span class="when">2024.06</span><span class="lang-en"><strong>Outstanding Undergraduate Thesis Award</strong>, Nankai University.</span><span class="lang-zh"><strong>本科优秀毕业论文奖</strong>，南开大学。</span></li>
  <li><span class="when">2023.09</span><span class="lang-en"><strong>Huawei “Intelligent Foundation” Scholarship</strong>.</span><span class="lang-zh"><strong>华为“智能基座”奖学金</strong>。</span></li>
  <li><span class="when">2022.09</span><span class="lang-en"><strong>SK Telecom Artificial Intelligence Scholarship</strong>, South Korea.</span><span class="lang-zh"><strong>SK Telecom 人工智能奖学金</strong>，韩国。</span></li>
</ul>

<div class="section-heading"><span>📖</span><h2 id="educations"><span class="lang-en">Educations</span><span class="lang-zh">教育背景</span></h2></div>

<div class='paper-box paper-box--brand paper-box--compact'><div class='paper-box-image'><div><img src='project/static/images/nankai.png' alt="Nankai University"></div></div>
<div class='paper-box-text'>
  <p><strong><span class="lang-en">Master Student, Computer Science and Technology</span><span class="lang-zh">计算机科学与技术硕士研究生</span></strong> | <span class="lang-en">Nankai University</span><span class="lang-zh">南开大学</span></p>
  <p><span class="lang-en">Time: <em>2024.09 - (now)</em></span><span class="lang-zh">时间：<em>2024.09 - 至今</em></span></p>
</div>
</div>

<div class='paper-box paper-box--brand paper-box--compact'><div class='paper-box-image'><div><img src='project/static/images/nankai.png' alt="Nankai University"></div></div>
<div class='paper-box-text'>
  <p><strong><span class="lang-en">Bachelor's Degree, Software Engineering</span><span class="lang-zh">软件工程学士</span></strong> | <span class="lang-en">Nankai University</span><span class="lang-zh">南开大学</span></p>
  <p><span class="lang-en">Time: <em>2020.09 - 2024.06</em></span><span class="lang-zh">时间：<em>2020.09 - 2024.06</em></span></p>
</div>
</div>

<div class="section-heading"><span>🛠️</span><h2 id="services"><span class="lang-en">Academic Services</span><span class="lang-zh">学术服务</span></h2></div>

<div class="svc">
  <div class="svc-row">
    <div class="svc-label"><span class="lang-en">Conference Reviewer</span><span class="lang-zh">会议审稿人</span></div>
    <div class="svc-chips"><span class="svc-chip">NeurIPS</span><span class="svc-chip">CVPR</span><span class="svc-chip">CVPRW</span></div>
  </div>
  <div class="svc-row">
    <div class="svc-label"><span class="lang-en">Journal Reviewer</span><span class="lang-zh">期刊审稿人</span></div>
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
