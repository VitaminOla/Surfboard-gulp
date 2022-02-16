(function() {
 const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector(".fullscreen-menu");
const closeBtn = menu.querySelector(".fullscreen-menu__close");
const menuLink = menu.querySelectorAll(".menu__link");
let body = document.body;

hamburger.addEventListener("click", e => {
  e.preventDefault();
  menu.classList.add("fullscreen-menu--active");
  body.classList.add("body--active-menu");
});

closeBtn.addEventListener("click", e => {
  e.preventDefault();
  menu.classList.remove("fullscreen-menu--active");
  body.classList.remove("body--active-menu");
})

for (let i = 0; i < menuLink.length; i++){
  menuLink[i].addEventListener ("click", e => {
  // e.preventDefault();
  menu.classList.remove("fullscreen-menu--active");
  body.classList.remove("body--active-menu");
})
}

 
})()
