const setFavicon = () => {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const favicon = document.querySelector("link[rel='icon']");
  if (favicon) {
    favicon.href = isDarkMode
      ? "/img/dianafaviconwhite.png"
      : "/img/dianafavicon.png";
  }
};

setFavicon();

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", setFavicon);

$(document).ready(function () {
  var swiper = new Swiper(".swiper-container-h", {
    direction: "horizontal",
    effect: "slide",
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    parallax: true,
    speed: 1600,
    rtl: true,
    loop: true,
    loopFillGroupWithBlank: !0,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  });
  var swiper = new Swiper(".swiper-container-h1", {
    direction: "horizontal",
    effect: "slide",
    autoplay: false,
    parallax: true,
    speed: 1600,
    rtl: true,
    loop: true,
    loopFillGroupWithBlank: !0,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: "true",
    },
  });
});