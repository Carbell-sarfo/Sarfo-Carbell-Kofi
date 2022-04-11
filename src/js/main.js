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

































// CART NOT AVAILABLE YET
document.querySelector(".cart").addEventListener("click", () => {
    alert("This website does not have mechandise to buy from yet. Thank you")
})
document.querySelector("#shop").addEventListener("click", () => {
    alert("This website does not have mechandise to buy from yet. Thank you")
})
