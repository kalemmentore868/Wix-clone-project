const header = document.getElementById("header");
const heroBg = document.getElementById("hero-section");
const formSection = document.getElementById("bubbles-bg");
const homeLink = document.getElementById("red-bg");
const contactLink = document.getElementById("contact");
const hamburger = document.getElementById("burger");
const cross = document.getElementById("cross");
const navBar = document.getElementById("nav-bar");
const gamesLink = document.getElementsByClassName("games")[0];
const downArrow = document.getElementsByClassName("down-arrow")[0];
const dropdown = document.getElementsByClassName("dropdown")[0];
let lastScrollTop = 0;

function enableScroll() {
  window.onscroll = function () {};
}

function disableScroll() {
  window.onscroll = function () {
    window.scrollTo(0, 0);
  };
}

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  heroBg.style.backgroundPosition = -(scrollTop / 6) + "px";
  if (scrollTop > lastScrollTop) {
    header.style.top = "-80px";
  } else {
    header.style.top = "0";
  }

  if (window.scrollY > formSection.offsetTop - 400) {
    homeLink.style.backgroundColor = "white";
    homeLink.style.color = "#272443";
    contactLink.style.backgroundColor = "#da392b";
    contactLink.style.color = "white";
  } else {
    homeLink.style.backgroundColor = "#da392b";
    homeLink.style.color = "white";
    contactLink.style.backgroundColor = "white";
    contactLink.style.color = "#272443";
  }

  lastScrollTop = scrollTop;
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("not-active");
  cross.classList.toggle("active");
  navBar.classList.toggle("active");
  disableScroll();
});

cross.addEventListener("click", () => {
  hamburger.classList.toggle("not-active");
  cross.classList.toggle("active");
  navBar.classList.toggle("active");
  enableScroll();
});

gamesLink.addEventListener("click", () => {
  downArrow.classList.toggle("active");
  dropdown.classList.toggle("gone");
});
