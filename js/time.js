let times = document.querySelector(".time")

const currentTime = new Date()

let hour = currentTime.getHours()
let minute = currentTime.getMinutes()

hour = checkTime(hour)
minute = checkTime(minute)

times.innerHTML += `${hour}:${minute}`

function checkTime(i)
{
    if(i < 10){i = "0" + i}
    return i;
}




