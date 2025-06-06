const swiper = new Swiper(".maisVendidosSwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  speed: 1500, // velocidade do slide
  autoplay: {
    delay: 0, // delay zero para deslize contínuo
    disableOnInteraction: false,
  },
  freeMode: true,
  freeModeMomentum: false,
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});