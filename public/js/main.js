// SLIDE IN NAVIGATION
const navButton = document.querySelector(".nav-btn");
const navOverlay = document.querySelector(".nav-overlay");
const leftList = document.querySelector(".nav-left");
const navMenu = document.querySelector(".nav-menu");
const navItem = document.querySelectorAll(".nav-item");

let showMenu = false;
navButton.addEventListener("click", openMenu);
navOverlay.addEventListener("click", openMenu);
navItem.forEach(item=>{
    item.addEventListener("click", () =>{
        if(showMenu === true) {
            navButton.classList.remove("close")
            navOverlay.classList.remove("show");
            leftList.classList.remove("show");
            navMenu.classList.remove("show");
            navItem.forEach(item=>{
                item.classList.remove("show")
            });
            document.body.classList.remove("noscroll");
            showMenu = false;
        }
    })
});

function openMenu() {
    if(!showMenu) {
        navButton.classList.add("close");
        navOverlay.classList.add("show");
        leftList.classList.add("show");
        navMenu.classList.add("show");
        navItem.forEach(item=>{
            item.classList.add("show")
        });
        document.body.classList.add("noscroll");
        showMenu = true;
    }else {
        navButton.classList.remove("close")
        navOverlay.classList.remove("show");
        leftList.classList.remove("show");
        navMenu.classList.remove("show");
        navItem.forEach(item=>{
            item.classList.remove("show")
        });
        document.body.classList.remove("noscroll");
        showMenu = false;
    }
}





// =========== DAY AND NIGHT SWITCH =============
let darkMode = localStorage.getItem("darkMode");
const darkModeSwitch = document.querySelector("#switch");

// Check if darkmode is enabled
// if it is disabled, turn it on
// if it is enabled, turn it off

const enableDarkMode = () => {
    document.body.classList.add("night");
    localStorage.setItem('darkMode', "enabled");
}
const disableDarkMode = () => {
    document.body.classList.remove("night");
    localStorage.setItem('darkMode', null);
}

if(darkMode === "enabled") {
    enableDarkMode();
    darkModeSwitch.checked = true;
}

darkModeSwitch.addEventListener("click", () => {
    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== "enabled") {
        enableDarkMode();
    }else {
        disableDarkMode();
    }
});