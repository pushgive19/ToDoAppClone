const clock = document.querySelector(".js-clock"),
    clockInput = clock.querySelector("h1");


function getTime(){
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
  
    clockInput.innerHTML = `${hour<12? `0${hour}`: hour}:${
            minute<10? `0${minute}`: minute}:${
            second<10? `0${second}`: second}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}
init();0