document.querySelectorAll(".card-wrap").forEach((cardWrap) => {
  const card = cardWrap.querySelector(".project_card");
  const cardBg = cardWrap.querySelector(".card-bg");
  const imageUrl = cardWrap.dataset.image;
  cardBg.style.backgroundImage = `url(${imageUrl})`;

  let width, height, mouseX, mouseY;

  cardWrap.addEventListener("mousemove", (e) => {
    const rect = cardWrap.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    mouseX = e.clientX - rect.left - width / 2;
    mouseY = e.clientY - rect.top - height / 2;

    const rotateX = (mouseY / height) * -30;
    const rotateY = (mouseX / width) * 30;

    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    cardBg.style.transform = `translateX(${
      (mouseX / width) * -40
    }px) translateY(${(mouseY / height) * -40}px)`;
  });

  cardWrap.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
    cardBg.style.transform = "translateX(0) translateY(0)";
  });
});

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
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });

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

  var swiper = new Swiper(".swiper-container-h1", {
    direction: "horizontal",
    effect: "slide",
    autoplay: true,
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
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: "true",
    },
  });

  var swiperProduct = new Swiper(".productSwiper", {
    direction: "horizontal",
    effect: "slide",
    autoplay: true,
    parallax: true,
    speed: 1600,
    rtl: true,
    loop: true,
    centeredSlides: true,
    loopFillGroupWithBlank: true,
    slidesPerView: 4.5,
    spaceBetween: 20,
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
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
  });
});
