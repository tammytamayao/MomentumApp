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


const timeButton = document.getElementById("dotsTimeButton");
const popup = document.querySelector(".popupContainer");

timeButton.addEventListener("click", e => {

    if(popup.style. opacity == 0){
        timeButton.style.opacity = 1;
        popup.style.opacity= 1 ;
    } else{
        timeButton.style.opacity = null;
        popup.style.opacity = 0;
    }
});
