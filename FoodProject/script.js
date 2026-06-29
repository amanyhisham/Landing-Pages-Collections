const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const body = document.querySelector("body");

menuOpenButton.addEventListener("click", () => {
  body.classList.add("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
  body.classList.remove("show-mobile-menu");
});
