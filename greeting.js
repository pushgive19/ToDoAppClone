const greetingForm = document.querySelector(".js-greetingForm"),
    greetingInput = greetingForm.querySelector("input"),
    greeting = document.querySelector(".js-greeting");
    

const NAME_LS = "name";
const SHOWING_CN = "showing";

function paintGreeting(text){
    greeting.classList.add(SHOWING_CN);
    greetingForm.classList.remove(SHOWING_CN);
    paintGreetingPerTime(text);
    
}
function paintGreetingPerTime(text){
    const time = new Date();
    const hour = time.getHours();
    if (hour <13){
        greeting.innerText = `좋은 아침이네요 ${text}님`;
    }else if (hour >=13 && hour <15){
        greeting.innerText = `${text}님 점심은 맛있게 드셨나요?`;
    }else if (hour>=15 && hour <20){
        greeting.innerText = `수고했어요 오늘도 ${text}님`;
    }else {
        greeting.innerText = `${text}님 잘자요~`;
    }
}
function saveName(text){
    localStorage.setItem(NAME_LS, text);
}
function handleSubmit(event){
    event.preventDefault();
    const inputName = greetingInput.value;
    saveName(inputName);
    paintGreeting(inputName);

}    

function askForName(){
    greetingForm.classList.add(SHOWING_CN);
    greetingForm.addEventListener("submit", handleSubmit);

}

function LoadName(){
    const currentValue = localStorage.getItem(NAME_LS);
    if (currentValue === null){
        askForName()
    }else{
        paintGreeting(currentValue);
    }   

}

function init(){
    LoadName();
}
init();
//시간에 따라 좋은 아침이네요./ 점심은 맛있게 드셨나요?/ 
//수고했어요 오늘도 / 잘자요~ 이렇게 넣어주는 기능 만들자.