/* time */

const myLabel = document.getElementById("myTime");
const toggle = document.querySelector(".toggle input");

update();
setInterval(update, 1000);

function update(){

    let date = new Date();
    myTime.innerHTML = formatTime(date);

    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();

        minutes = formatZeroes(minutes);

        if (toggle.checked){
            hours = (hours % 12) || 12;

            return `${hours}:${minutes}`;
        } else{
            return `${hours}:${minutes}`;
        }       
    }

    function formatZeroes(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}


const timeButton = document.querySelector("#dotsTimeButton");
const timePopup = document.querySelector("#timePopupContainer");

timeButton.addEventListener("click", e => {
    if(timePopup.style. opacity == 0){
        timePopup.classList.toggle("hide")
        timeButton.style.opacity = 1;
        setTimeout(function() {timePopup.style.opacity = 1}, 0);
    } else{
        timeButton.style.opacity = null;
        timePopup.style.opacity = 0;
        setTimeout(function() {timePopup.classList.toggle("hide")}, 150);
    }
});
