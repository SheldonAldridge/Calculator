

function setRealTime(){
    let refresh = 1000;
    let refreshTime = setTimeout('showTime()',refresh);
}

function showTime(){
let times = document.querySelector(".time")

const currentTime = new Date()

let hour = currentTime.getHours()
let minute = currentTime.getMinutes()


hour = checkTime(hour)
minute = checkTime(minute)

times.innerHTML = `${hour}:${minute}`
setRealTime()
}

showTime()

function checkTime(i)
{
    if(i < 10){i = "0" + i}
    return i;
}




