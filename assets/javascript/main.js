const menuHamburger = document.querySelector(".menu-hamburger");
const primaryNavigation = document.querySelector(".primary-navigation");

menuHamburger.addEventListener("click", () => {
    primaryNavigation.classList.toggle('mobile-menu');
})