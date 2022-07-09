const settingsBtn = document.querySelector("#settings-btn");
const settingsPopup = document.querySelector(".settings-popup");

function toggleSettings() {
    settingsBtn.classList.toggle("active");
    if(settingsPopup.style. opacity == 0){
        settingsPopup.classList.toggle("hide")
        setTimeout(function() {settingsPopup.style.opacity = 1}, 0);
    } else{
        settingsPopup.style.opacity = 0;
        setTimeout(function() {settingsPopup.classList.toggle("hide")}, 150);
    }
}

settingsBtn.addEventListener("click", toggleSettings);

const navItems = document.querySelectorAll(".nav-item");
const settingsViewItems = document.querySelectorAll(".settings-view-item");
let currentToggled = 0;

function toggleNavView(i) {
    if(i !== currentToggled) {
        navItems[currentToggled].classList.toggle("nav-item-active");
        settingsViewItems[currentToggled].classList.toggle("hide");
        
        navItems[i].classList.toggle("nav-item-active");
        settingsViewItems[i].classList.toggle("hide");
    
        currentToggled = i;
    }
}

for(let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function(){toggleNavView(i)});
}