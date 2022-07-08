const settingsBtn = document.querySelector("#settings-btn");
const settingsPopup = document.querySelector(".settings-popup");

function toggleSettings() {
    settingsPopup.classList.toggle("hide");
    settingsBtn.classList.toggle("active");
}

settingsBtn.addEventListener("click", toggleSettings);