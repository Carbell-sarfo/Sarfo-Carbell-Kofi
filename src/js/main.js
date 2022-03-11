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
        document.body.classList.add("no-scroll");
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
        document.body.classList.remove("no-scroll");
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


































// day and night icon animation
// function initIntIcon(i){if(i.classList.contains("js-nc-int-icon-loaded")) return;i.classList.add("js-nc-int-icon-loaded");i.closest("svg").addEventListener("click",function(n){i.classList.toggle("nc-int-icon-state-b")});};var intIcons=document.getElementsByClassName("js-nc-int-icon");for(var i=0;intIcons.length>i;i++){initIntIcon(intIcons[i]);}