import Swiper, { Navigation, A11y } from 'swiper';
import './style.css';

import 'swiper/swiper.min.css';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';

// Init swiper
const indexSwiper = new Swiper('.swiper', {
  modules: [Navigation, A11y],
  direction: 'horizontal',
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 15,
  loop: true,
  a11y: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      spaceBetween: 30,
    },
  },
});

// ==========================
// 🚀 Query Selectors
// ==========================
// ==========================
// 🚀 Query Selectors
// ==========================
// ==========================
// 🚀 Events
// ==========================
