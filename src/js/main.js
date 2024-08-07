// TABLE OF CONTENT 
// 1. Theme Toggle
// 2. Mobile Navigation button and Menu.
// 3. Intersection Observers.
// 4. Change text with js





// =========== THEME TOGGLE ===============
const themeToggle = document.querySelector("#switch");
const logo = document.querySelector(".logo-img");
let darkMode = localStorage.getItem("darkMode");


function enableDarkMode() {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    // logo.src = "/assets/images/logo-dark.png";
    logo.src = "/assets/images/logo-light.png";
    // themeToggle.checked = false;
    localStorage.setItem("darkMode", "enabled");
}
function enableLightMode() {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
    // logo.src = "/assets/images/logo-light.png";
    logo.src = "/assets/images/logo-dark.png";
    // themeToggle.checked = true;
    localStorage.setItem("darkMode", null);
}

if (darkMode === "enabled") {
    enableDarkMode();
}


themeToggle.addEventListener('click', () => {
    // document.body.classList.contains("dark-theme") ? enableLightMode() : enableDarkMode();
    darkMode = localStorage.getItem("darkMode");
    if(darkMode !== "enabled") {
        enableDarkMode();
        console.log(darkMode);
    }else {
        enableLightMode();
        console.log(darkMode);
    }
})


// CHECK IF THIS IS YOUR FIST VISIT
window.onload = function() {
    if(typeof window.localStorage !== "undefined" && !localStorage.getItem("visited")) {
        localStorage.setItem("visited", true);

        function setThemePreference() {
            if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
                enableDarkMode();
                return;
            }else {
                enableLightMode();
            }
        }
    }
}










// ============= NAVIGATION BUTTON ===============
const navButton = document.querySelector(".nav-btn");
const navList = document.querySelector(".nav-list");
const navLeft = document.querySelector(".nav-left");
const navOverlay = document.querySelector(".nav-overlay");
const navItem = document.querySelectorAll(".nav-item");

let showMenu = false;
navButton.addEventListener("click", openMenu);
navOverlay.addEventListener("click", openMenu);
navItem.forEach(item => {
    item.addEventListener("click", openMenu)
})

function openMenu () {
    if(!showMenu) {
        navButton.classList.add("close");
        navList.classList.add("show");
        navLeft.classList.add("show");
        navOverlay.classList.add("show");
        navItem.forEach(item => {
            item.classList.add("show");
        });
        // document.body.classList.add("no-scroll");
        showMenu = true;
    }else {
        navButton.classList.remove("close");
        navList.classList.remove("show");
        navLeft.classList.remove("show");
        navButton.classList.remove("show");
        navOverlay.classList.remove("show");
        navItem.forEach(item => {
            item.classList.remove("show");
        });
        // document.body.classList.remove("no-scroll");
        showMenu = false;
    }
}
// DISABLE OPEN MENU IN DESTOP MODE
// const mediaLg = window.matchMedia("(min-width: 1020px)");
// function handleTabletChange(e) {
//     if(e.matches) {
//         console.log("Desktop Mode activated");
//         // document.body.classList.remove("no-scroll");
//         openMenu()
//     }
// }

// mediaLg.addListener(handleTabletChange);
// handleTabletChange(mediaLg);








// ================== INTERSECTION OBSERVER =====================
const sectionHero = document.querySelector("#hero");
const toTopButton = document.querySelector('.to-top');
const navBar = document.querySelector('.nav-bar');
const options = {
    rootMargin: "-100px"
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            toTopButton.classList.add("visible");
            navBar.classList.add("box-shadow");
        }else{
            toTopButton.classList.remove("visible");
            navBar.classList.remove("box-shadow");
        }
    })
}, options)

observer.observe(sectionHero);














//============  CART NOT AVAILABLE YET===============
// document.querySelector(".cart").addEventListener("click", () => {
//     alert("This website does not have mechandise to buy from yet. Thank you")
// })
// document.querySelector("#shop").addEventListener("click", () => {
//     alert("This website does not have mechandise to buy from yet. Thank you")
// })









// 4. ======================== CHANGE TEXT WITH JS ====================
// let i = 0;

// const randomizeText = () => {
//   const phrase = document.querySelector('.hero-name');
//   const compStyles = window.getComputedStyle(phrase);
//   const animation = compStyles.getPropertyValue('animation');
//   const animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;
  
//   const phrases = ["Carbell", "Sarfo", "Kofi" ];
  
//   i = randomNum(i, phrases.length);
//   const newPhrase = phrases[i];
  
//   setTimeout(() => {
//     phrase.textContent = newPhrase;
//   }, 400); // time to allow opacity to hit 0 before changing word
// }

// const randomNum = (num, max) => {
//   let j = Math.floor(Math.random() * max);
  
//   // ensure diff num every time
//   if (num === j) {
//     return randomNum(i, max);
//   } else {
//     return j;
//   }
// }

// const getAnimationTime = () => {
//   const phrase = document.querySelector('.hero-name');
//   const compStyles = window.getComputedStyle(phrase);
//   let animation = compStyles.getPropertyValue('animation');
  
//   // firefox support for non-shorthand property
//   animation != "" ? animation : animation = compStyles.getPropertyValue('-moz-animation-duration');
  
//     // webkit support for non-shorthand property
//   animation != "" ? animation : animation = compStyles.getPropertyValue('-webkit-animation-duration');
  
  
//   const animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;
//   return animationTime;
// }

// randomizeText();
// setInterval(randomizeText, getAnimationTime());











// ===================== testimonial carousel ===================

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("testimonial");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("testimonial");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }