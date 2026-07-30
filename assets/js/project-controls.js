(function () {
  "use strict";

  var storageKey = "site-lang";

  function getLanguage() {
    try {
      return localStorage.getItem(storageKey) === "zh" ? "zh" : "en";
    } catch (error) {
      return "en";
    }
  }

  function setLanguage(language) {
    var isChinese = language === "zh";
    document.body.classList.toggle("project-zh", isChinese);
    document.documentElement.lang = isChinese ? "zh-CN" : "en";

    document.querySelectorAll("[data-project-lang-toggle]").forEach(function (button) {
      button.setAttribute("aria-label", isChinese ? "Switch to English" : "切换至中文");
      button.querySelector(".lang-en").hidden = isChinese;
      button.querySelector(".lang-zh").hidden = !isChinese;
    });

    var actionTranslations = { Paper: "论文", Code: "代码", Project: "项目", Supplementary: "补充材料" };
    document.querySelectorAll(".publication-links .button").forEach(function (button) {
      var label = button.querySelector("span:last-child");
      if (!label) return;
      if (!label.dataset.langEn) label.dataset.langEn = label.textContent.trim();
      label.textContent = isChinese && actionTranslations[label.dataset.langEn]
        ? actionTranslations[label.dataset.langEn]
        : label.dataset.langEn;
    });
  }

  function saveLanguage(language) {
    try {
      localStorage.setItem(storageKey, language);
    } catch (error) {
      // The current page remains usable when storage is unavailable.
    }
  }

  function initialize() {
    var navigation = document.createElement("nav");
    navigation.className = "project-page-nav";
    navigation.setAttribute("aria-label", "Site navigation");
    navigation.innerHTML = [
      '<a href="../#about-me"><span class="lang-en">Home</span><span class="lang-zh">主页</span></a>',
      '<a href="../#publications"><span class="lang-en">Publications</span><span class="lang-zh">论文发表</span></a>',
      '<a href="../#experiences"><span class="lang-en">Experiences</span><span class="lang-zh">工作经历</span></a>'
    ].join("");
    var firstSection = document.body.querySelector("section");
    document.body.insertBefore(navigation, firstSection || document.body.firstChild);

    var control = document.createElement("button");
    control.type = "button";
    control.className = "project-lang-control";
    control.setAttribute("data-project-lang-toggle", "");
    control.innerHTML = '<span aria-hidden="true">文</span><span class="lang-en">中文</span><span class="lang-zh" hidden>EN</span>';
    document.body.appendChild(control);

    control.addEventListener("click", function () {
      var nextLanguage = document.body.classList.contains("project-zh") ? "en" : "zh";
      saveLanguage(nextLanguage);
      setLanguage(nextLanguage);
    });

    window.addEventListener("storage", function (event) {
      if (event.key === storageKey) setLanguage(event.newValue === "zh" ? "zh" : "en");
    });

    setLanguage(getLanguage());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
}());
