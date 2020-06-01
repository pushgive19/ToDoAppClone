const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDo = document.querySelector(".js-toDo");

const TODO_LS = "todo";
let TODO_ARY = [];

function paintToDo(text){
    const li = document.createElement("li");
    const span= document.createElement("span");
    const delBtn =  document.createElement("button");
    const idNum = TODO_ARY.length+1;
    

    li.appendChild(span);
    li.appendChild(delBtn);
    toDo.appendChild(li);
    li.id =idNum;
    // li.setAttribute("id", idNum);/////////////////////////////////check
    span.innerText =text;
    delBtn.innerText = "✔";
    delBtn.addEventListener("click", handleClick);

    const OBJ = {
        id:idNum, 
        TODO_LS: text  
    }
    TODO_ARY.push(OBJ);//이것 변수로 해줬으면 훨씬 좋았을 텐데
    saveToDo();
    
    //배열로 저장, 오브젝트 할때 뭔지 알지
    
    //체크하면 사라지는거 or <delete>되는거 해보자.
}
function handleClick(event){
    const target = event.target;
    const node = target.parentNode;
    toDo.removeChild(node);
    
    const cleanToDo = TODO_ARY.filter(function(delId){
        return delId.id !== parseInt(node.id);
    })
    
    TODO_ARY = cleanToDo;
    saveToDo();
}

function saveToDo(){
    // TODO_ARY.push({ TODO_LS: toDoInput.value  });
    const json = JSON.stringify(TODO_ARY);
    localStorage.setItem(TODO_LS, json);
}
function handleSubmit(event){
    event.preventDefault();
    const inputToDo = toDoInput.value;
    
    paintToDo(inputToDo);
    toDoInput.value = ""; //입력창 빈칸으로 만들기
    
    
}
function loadToDo(){
    const currentValue = localStorage.getItem(TODO_LS);
    if(currentValue === null){
        // askForToDo();
    }else{
        const json = JSON.parse(currentValue);
        json.forEach(function(toDo){
            paintToDo(toDo.TODO_LS);
        });
    }
}

function init(){
    loadToDo();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();