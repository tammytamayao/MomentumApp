/* focus */

const focus = document.getElementById("focus");
const focusOutput = document.getElementById("textFocusOutput");

focus.addEventListener("keypress", function (e){
    if(e.key === "Enter") {
        let focus = document.getElementById("focus");
        let inputFocus = focus.value;
        if (inputFocus.length <= 0){
            focusError.innerHTML = "please enter focus";
            return;
        }
        document.querySelector('.mainFocus').classList.remove('hide');
        document.querySelector('.myFocus').classList.add('hide');
        focusOutput.innerHTML = focus.value;
    }
})

const encouragingW = document.getElementById("words");

const ewords = ["Nice.",
                "Way to go!",
                "Good job!", 
                "Great work!"];

//checkbox

checkbox = document.getElementById("focusCheck");

checkbox.addEventListener("change", e => {

    if(e.target.checked){
        const randomWords = ewords[(Math.floor(Math.random() * ewords.length))];
        encouragingW.innerHTML = randomWords;
        document.querySelector('.encouragingWords').classList.remove('hide');
        textFocusOutput.style.textDecoration="line-through";
    } else{
        document.querySelector('.encouragingWords').classList.toggle('hide');
        textFocusOutput.style.textDecoration="none";
    }
})


//focus popup options
const focusButton = document.querySelector("#dotsFocusButton");
const focusPopup = document.querySelector("#focusPopupContainer");

focusButton.addEventListener("click", e => {
    if(focusPopup.style.opacity == 0){
        focusPopup.classList.toggle("hide");
        focusButton.style.opacity = 1;
        setTimeout(function() {focusPopup.style.opacity = 1}, 0);
    } else{
        focusButton.style.opacity = null;
        focusPopup.style.opacity = 0;
        setTimeout(function() {focusPopup.classList.toggle("hide")}, 150);
    }
});