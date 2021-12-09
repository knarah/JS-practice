const toDoForm = document.querySelector(".todos_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todos_list");
let toDos =[];
const savedTodos = localStorage.getItem('toDos');
const parsedToDos = JSON.parse(savedTodos);

function handleToDoSubmit(event){
    event.preventDefault();
    const inputValueObj = { text: toDoInput.value, id: Date.now(),};
    DisplayToDos(inputValueObj);
    toDoInput.value = null;
    toDos.push(inputValueObj);
    saveToDos();
}

function saveToDos(){
    localStorage.setItem('toDos', JSON.stringify(toDos));
}


function DisplayToDos(inputValueObj){
    
    const li = document.createElement('li');
    const span = document.createElement('span');
    const toDoValue = document.createTextNode(inputValueObj.text); 
    const deleteButton = document.createElement('button');    
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    toDoList.appendChild(li);
    li.id = inputValueObj.id;
    li.appendChild(span);
    li.appendChild(deleteButton);
    span.appendChild(toDoValue);
    
    deleteButton.addEventListener('click', deleteTodo);
}

function deleteTodo(event){
    const oldTodo = event.target.parentNode;
    // const oldTodoValue = oldTodo.textContent;
    const oldTodoID = oldTodo.id;
    const deletingItem = document.getElementById(oldTodoID);
    deletingItem.remove();
    // oldTodo.remove(deleteTodoFromLocalStorage(oldTodoValue));  
    deleteTodoFromLocalStorage(oldTodoID);
}

function deleteTodoFromLocalStorage(oldTodoID){
    console.log(parsedToDos);
    console.log(oldTodoID);
    let index = parsedToDos.findIndex(element => element.id == oldTodoID);
    console.log(`index ${index}`);
        if (index !== -1) {
        parsedToDos.splice(index, 1 );
        toDos = parsedToDos;
        saveToDos();
        }
}
    
toDoForm.addEventListener('submit', handleToDoSubmit);
 



if(savedTodos) {
    
    toDos = parsedToDos;
    parsedToDos.forEach(DisplayToDos);
    
}
