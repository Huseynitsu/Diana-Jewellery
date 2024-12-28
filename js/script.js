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
  // hamburger menu
  $(".menu-wrap").click(function (e) {
    $("header .menu-wrapper").animate({ top: "0" }, 300, "linear");
    $("body").css("overflow-y", "hidden");
  });

  $("header .menu-wrapper").click(function (e) {
    e.stopPropagation();
  });

  $("header .close-menu").click(function () {
    $("body").css("overflow-y", "visible");
    $("header .menu-wrapper").animate({ top: "-100%" }, 300, "linear");
    setTimeout(() => {
      $(".navbar-collapse").removeClass("show");
    }, 300);
  });

  // // body click
  // $("body").click(function () {
  //   $("body").css("overflow-y", "visible");
  //   $(".lang-list").slideUp();
  //   $("header .menu-wrapper").animate({ top: "-100%" }, 300, "linear");
  // });

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
