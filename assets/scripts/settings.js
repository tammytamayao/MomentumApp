const settingsBtn = document.querySelector("#settings-btn");
const settingsPopup = document.querySelector(".settings-popup");

function toggleSettings() {
    settingsPopup.classList.toggle("hide");
    settingsBtn.classList.toggle("active");
}

settingsBtn.addEventListener("click", toggleSettings);

const navItems = document.querySelectorAll(".nav-item");
const settingsViewItems = document.querySelectorAll(".settings-view-items");
let currentToggled = 0;

function toggleNavView(i) {
    if(i !== currentToggled) {
        navItems[currentToggled].classList.toggle("nav-item-active");
        // settingsViewItems[currentToggled].classList.toggle("settings-view-active");
        
        navItems[i].classList.toggle("nav-item-active");
        // settingsViewItems[idx].classList.toggle("settings-view-active");
    
        currentToggled = i;
    }
}

for(let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function(){toggleNavView(i)});
}