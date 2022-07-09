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

        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);

        if (toggle.checked){
            let amOrPm = hours >= 12 ? "pm" : "am";

            hours = (hours % 12) || 12;

            hours = formatZeroes(hours);
            minutes = formatZeroes(minutes);

            return `${hours}:${minutes} ${amOrPm}`;
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
        popup.style. opacity=1;
    } else{
        popup.style. opacity=0;
    }
});

