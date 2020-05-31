const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDo = document.querySelector(".js-toDo");

const TODO_LS = "todo";

function askForToDo(){
    //기본 셋팅 다 만들고 momentum처럼 한줄로 적고 사라지고 하는 기능 해보자.
}

function paintToDo(text){
    const li = document.createElement("li");
    const span= document.createElement("span");
    const button =  document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);
    toDo.appendChild(li);
    
    span.innerText = text;
    button.innerText = "✔";

//체크하면 사라지는거 or <delete>되는거 해보자.
}

function saveToDo(text){
    localStorage.setItem(TODO_LS, text);
}

function loadToDo(){
    const currentValue = localStorage.getItem(TODO_LS);
    if(currentValue === null){
        askForToDo();
    }else{
        paintToDo();
    }
}

function init(){
    loadToDo();
    paintToDo();
  
}
init();