const menuBtn = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".header__menu");

menuBtn.addEventListener("click", function() {
  this.classList.toggle("active");
  menu.classList.toggle("active");
});