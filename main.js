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
    navItem.forEach(item => {
      item.classList.add("show");
    });

    showMenu = true;
  } else {
    navButton.classList.remove("close");
    navMenu.classList.remove("show");
    navList.classList.remove("show");
    navItem.forEach(item => {
      item.classList.remove("show");
    });

    showMenu = false;
  }
}
