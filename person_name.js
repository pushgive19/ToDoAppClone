const  nameForm= document.querySelector(".js-nameForm"),
greeting = document.querySelector(".js-greeting"),
    nameInput = nameForm.querySelector("input");

const NAME_LS = "name";
const UNSHOWING_CN = "form-unshowing"
function saveName(name){
    localStorage.setItem(NAME_LS, name);
}
function printName(data){
    const time = new Date();
    const hour = time.getHours();
    if(hour<10){
        greeting.textContent=`${data}님 좋은 아침~`
    }else if(hour >=10 &&hour <13){
        greeting.textContent = `${data}님 점심은 뭐먹을거예요?🍖`
    }else if(hour >=13 && hour <17){
        greeting.textContent = `${data}님 오후에도 파이팅!🤗`
    }else if(hour >= 17 && hour < 21){
        greeting.textContent = `${data}님 오늘도 고생했어요😁`
    }else if(hour>=21){
        greeting.textContent = `${data}님 잘자요🌙`
    }
    nameForm.classList.toggle(UNSHOWING_CN);
    

}
function handleSubmit(e){
    const name = nameInput.value;
    e.preventDefault();
    printName(name);
    saveName(name);
    nameInput.value = "";
}


function loadName(){
    const loadedName = localStorage.getItem(NAME_LS);
    if(loadedName){
        printName(loadedName);
    }else{
        nameForm.addEventListener("submit",handleSubmit);
    }

}
function init(){
    loadName();
}
init();