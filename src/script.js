document.addEventListener("DOMContentLoaded", function () {
  /**
   * PRELOAD
   *
   * loading will be end after document is loaded
   */
  const preloader = document.querySelector("[data-preaload]");

  window.addEventListener("load", function () {
    if (preloader) {
      preloader.classList.add("loaded");
    }
    document.body.classList.add("loaded");
  });

  /**
   * add event listener on multiple elements
   */
  const addEventOnElements = function (elements, eventType, callback) {
    if (elements) {
      for (let i = 0, len = elements.length; i < len; i++) {
        console.log(elements[i]); // Log each element
        if (elements[i]) {
          elements[i].addEventListener(eventType, callback);
        } else {
          console.warn(`Element at index ${i} is null`);
        }
      }
    }
  };

  /**
   * NAVBAR
   */
  const navbar = document.querySelector("[data-navbar]");
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const overlay = document.querySelector("[data-overlay]");

  const toggleNavbar = function () {
    if (navbar) {
      navbar.classList.toggle("active");
    }
    if (overlay) {
      overlay.classList.toggle("active");
    }
    document.body.classList.toggle("nav-active");
  };

  addEventOnElements(navTogglers, "click", toggleNavbar);

  /**
   * HEADER & BACK TOP BTN
   */
  const header = document.querySelector("[data-header]");
  const backTopBtn = document.querySelector("[data-back-top-btn]");

  let lastScrollPos = 0;

  const hideHeader = function () {
    const isScrollBottom = lastScrollPos < window.scrollY;
    if (isScrollBottom) {
      if (header) {
        header.classList.add("hide");
      }
    } else {
      if (header) {
        header.classList.remove("hide");
      }
    }

    lastScrollPos = window.scrollY;
  };

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 50) {
      if (header) {
        header.classList.add("active");
      }
      if (backTopBtn) {
        backTopBtn.classList.add("active");
      }
      hideHeader();
    } else {
      if (header) {
        header.classList.remove("active");
      }
      if (backTopBtn) {
        backTopBtn.classList.remove("active");
      }
    }
  });

  /**
   * HERO SLIDER
   */
  const heroSlider = document.querySelector("[data-hero-slider]");
  const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
  const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
  const heroSliderNextBtn = document.querySelector("[data-next-btn]");

  let currentSlidePos = 0;
  let lastActiveSliderItem = heroSliderItems[0];

  const updateSliderPos = function () {
    if (lastActiveSliderItem) {
      lastActiveSliderItem.classList.remove("active");
    }
    if (heroSliderItems[currentSlidePos]) {
      heroSliderItems[currentSlidePos].classList.add("active");
    }
    lastActiveSliderItem = heroSliderItems[currentSlidePos];
  };

  const slideNext = function () {
    if (currentSlidePos >= heroSliderItems.length - 1) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    updateSliderPos();
  };

  if (heroSliderNextBtn) {
    heroSliderNextBtn.addEventListener("click", slideNext);
  }

  const slidePrev = function () {
    if (currentSlidePos <= 0) {
      currentSlidePos = heroSliderItems.length - 1;
    } else {
      currentSlidePos--;
    }

    updateSliderPos();
  };

  if (heroSliderPrevBtn) {
    heroSliderPrevBtn.addEventListener("click", slidePrev);
  }

  /**
   * auto slide
   */
  let autoSlideInterval;

  const autoSlide = function () {
    autoSlideInterval = setInterval(function () {
      slideNext();
    }, 7000);
  };

  addEventOnElements(
    [heroSliderNextBtn, heroSliderPrevBtn],
    "mouseover",
    function () {
      clearInterval(autoSlideInterval);
    }
  );

  addEventOnElements(
    [heroSliderNextBtn, heroSliderPrevBtn],
    "mouseout",
    autoSlide
  );

  window.addEventListener("load", autoSlide);

  /**
   * PARALLAX EFFECT
   */
  const parallaxItems = document.querySelectorAll("[data-parallax-item]");

  let x, y;

  window.addEventListener("mousemove", function (event) {
    x = (event.clientX / window.innerWidth) * 10 - 5;
    y = (event.clientY / window.innerHeight) * 10 - 5;

    // reverse the number eg. 20 -> -20, -5 -> 5
    x = x - x * 2;
    y = y - y * 2;

    for (let i = 0, len = parallaxItems.length; i < len; i++) {
      x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
      y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
      parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
    }
  });
});
