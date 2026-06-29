const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
//blur
const body = document.querySelector("body");
const menuOpenBtn = document.querySelector("#menu-open-button");
const menuCloseBtn = document.querySelector("#menu-close-button");

menuOpenBtn.addEventListener("click", () => {
  body.classList.add("show-mobile-menu");
});

menuCloseBtn.addEventListener("click", () => {
  body.classList.remove("show-mobile-menu");
});
//Initialize Swiper-----------------------------------------
const swiper = new Swiper('.slider-wrapper', {
  // Optional parameters
   loop: true,
    grabCursor: true,
   spacebetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,//Make the bullets larger when active
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },   
  breakpoints: {
    0: {
      slidesPerView: 1, 
    },
      768: {
      slidesPerView: 2, 
    },
    1024: {
      slidesPerView: 3, 
    },



  }
});