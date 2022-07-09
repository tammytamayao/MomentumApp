/* time */

const myLabel = document.getElementById("myTime");

update();
setInterval(update, 1000);

function update(){

    let date = new Date();
    myTime.innerHTML = formatTime(date);

    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();

        hours = (hours % 12) || 12;

        minutes = formatZeroes(minutes);

        return `${hours}:${minutes}`;
    }

    function formatZeroes(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}
