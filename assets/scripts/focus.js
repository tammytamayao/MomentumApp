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
    }
})

// When the user clicks on <div>, open the popup
function focusOptionsFunction() {
    var popup = document.getElementById("focusPopup");
    popup.classList.toggle("show");
  }