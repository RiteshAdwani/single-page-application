const innerHome = document.querySelector("#inner-home");
const innerAbout = document.querySelector("#inner-about");
const innerImage = document.querySelector("#inner-image");
const innerService = document.querySelector("#inner-service");
const innerWork = document.querySelector("#inner-work");
const burgerElement = document.querySelector(".hamburger");

// onscroll down hide navbar & onscroll up show navbar
var lastScrollTop = 0;
navbar = document.getElementsByClassName("navbar")[0];
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
  navbar.classList.add("navbar-sticky", window.scrollY > 0);
});

// click event on hamburger
burgerElement.addEventListener("click", (e) => {
  const isExpanded = burgerElement.getAttribute("aria-expanded") === "true";
  burgerElement.setAttribute("aria-expanded", !isExpanded);

  document.querySelector(".sidebar").classList.toggle("show-sidebar");
});

innerHome.addEventListener("click", () => {
  sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("show-sidebar");
  const isExpanded = burgerElement.getAttribute("aria-expanded") === "true";
  burgerElement.setAttribute("aria-expanded", !isExpanded);
});

innerAbout.addEventListener("click", () => {
  sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("show-sidebar");
  const isExpanded = burgerElement.getAttribute("aria-expanded") === "true";
  burgerElement.setAttribute("aria-expanded", !isExpanded);
});
innerImage.addEventListener("click", () => {
  sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("show-sidebar");
  const isExpanded = burgerElement.getAttribute("aria-expanded") === "true";
  burgerElement.setAttribute("aria-expanded", !isExpanded);
});
innerService.addEventListener("click", () => {
  sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("show-sidebar");
  const isExpanded = burgerElement.getAttribute("aria-expanded") === "true";
  burgerElement.setAttribute("aria-expanded", !isExpanded);
});
innerWork.addEventListener("click", () => {
  sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("show-sidebar");
  const isExpanded = burgerElement.getAttribute("aria-expanded") === "true";
  burgerElement.setAttribute("aria-expanded", !isExpanded);
});

// carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<span><i class='fa-solid fa-chevron-left'></i></span>",
    "<span><i class='fa-solid fa-chevron-right'></i></span>",
  ],
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});