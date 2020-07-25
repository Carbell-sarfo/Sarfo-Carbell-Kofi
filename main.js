const navButton = document.querySelector(".nav-btn");
const navMenu = document.querySelector("nav");
const navList = document.querySelector(".nav-list");
const navItem = document.querySelectorAll(".nav-item");

let showMenu = false;
navButton.addEventListener("click", openMenu);

function openMenu() {
  if (!showMenu) {
    navButton.classList.add("close");
    navMenu.classList.add("show");
    navList.classList.add("show");
    navItem.forEach((item) => {
      item.classList.add("show");
    });

    showMenu = true;
  } else {
    navButton.classList.remove("close");
    navMenu.classList.remove("show");
    navList.classList.remove("show");
    navItem.forEach((item) => {
      item.classList.remove("show");
    });

    showMenu = false;
  }
}

// hide menu on click
navItem.forEach((item) => {
  item.addEventListener("click", openMenu);
});

// ====== // Observer // =======
const sectionHome = document.getElementById("banner");
const sectionAbout = document.querySelector(".section-about");
const sectionPortfolio = document.querySelector(".section-portfolio");
const sectionContact = document.querySelector(".section-contact");
const homeLink = document.querySelector(".home");
const options = {
  rootMargin: "-70px 0px 0px 0px",
};
const sectionObserver = new IntersectionObserver(function (
  entries,
  sectionObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navMenu.classList.add("nav-scrolled");
      // homeLink.classList.remove("current");
      // console.log(entry.target);
      return;
    } else {
      navMenu.classList.remove("nav-scrolled");
      // homeLink.classList.add("current");
      // console.log(entry.target);
    }
  });
},
options);
sectionObserver.observe(sectionHome);
