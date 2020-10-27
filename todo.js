const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    ul = document.querySelector(".js-toDoList");

const TODO_LS = "todo";
const COMPLETE_LS = "complete"

let toDo_ary = [];

function saveToDo(){
    localStorage.setItem(TODO_LS,JSON.stringify(toDo_ary));
}

function deleteToDo(event){
    const li = event.target.parentNode;
    const idNum = parseInt(li.id);
    li.parentNode.removeChild(li);//이거 기억 잘하자
    const removeToDo = toDo_ary.filter(function(data){
        console.log(data.id, idNum);
        return data.id !== idNum;
    })
    toDo_ary = removeToDo;
    saveToDo();
}
function completeToDo(event){
    const li = event.target.parentNode;
    const span = li.children[1];
    span.classList.add("complete-todo");
   
    toDo_ary.forEach(function(ary){
        if(ary.id === parseInt(li.id)){
        ary.isComplete = true;
        }
    })
    saveToDo();
}
    
   
function printToDo(data, isComplete){
    const completeBtn = document.createElement("button"),
        deleteBtn = document.createElement("button"),
        span = document.createElement("span")
        li = document.createElement("li");
        const newId = toDo_ary.length+1;

    deleteBtn.addEventListener("click", deleteToDo);
    completeBtn.addEventListener("click", completeToDo);

    completeBtn.textContent = "⭕";
    deleteBtn.textContent = "❌";
        
    span.textContent = data;
    li.appendChild(completeBtn);
    li.appendChild(span);
    ul.appendChild(li);
    li.appendChild(deleteBtn);
    li.id = newId;

    if(isComplete !== true){
        const toDo_obj = {
            id:newId,
            todo:data,
            isComplete:"" //나중에 넣을꺼야.
        }
        toDo_ary.push(toDo_obj);
        saveToDo();
    }else{
        const toDo_obj = {
            id:newId,
            todo:data,
            isComplete:true //나중에 넣을꺼야.
        }
        toDo_ary.push(toDo_obj);
        saveToDo();
        span.classList.add("complete-todo")
    }
    
    
}
function handleSubmit(e){
    e.preventDefault();
    
    const toDoContent = toDoInput.value;
    printToDo(toDoContent);
    // saveToDo(toDoContent);
    toDoInput.value = "";
}
function loadToDo(){
    const loadedToDo =JSON.parse(localStorage.getItem(TODO_LS) );
    if(loadedToDo){
        loadedToDo.forEach(function(loadedValue){
            printToDo(loadedValue.todo, loadedValue.isComplete);
        });
    }
}
function init(){
    loadToDo();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();