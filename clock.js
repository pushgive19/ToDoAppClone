const clock= document.querySelector(".js-clock");


function getTime() {
    const time = new Date();
    const hours = showPm(time.getHours());
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    
        clock.textContent = `${hours<10?`0${hours}`:hours}:${
            minutes<10 ? `0${minutes}`:minutes}`;
}
function showPm(hr){
    const pm = clock.parentNode.children[0];
    if(hr>12){
        pm.classList.add("pm-showing")
        return hr-12;
    }else{
        pm.classList.remove("pm-showing")
        return hr;
    }
    
}

function init(){}
    
    getTime();
    setInterval(getTime,1000)
    showPm();

init();

