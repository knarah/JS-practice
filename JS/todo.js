const toDoForm = document.querySelector(".todos_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todos_list");
let toDos =[];
const savedTodos = localStorage.getItem('toDos');
const parsedToDos = JSON.parse(savedTodos);

DisplaySavedTodos();

function DisplaySavedTodos() {
    if(savedTodos) {
        parsedToDos.forEach(DisplayToDos);
        toDos = parsedToDos;
        // for (let i = 0; i < parsedToDos.length; i++) {
        //     DisplayToDos(parsedToDos[i]);
        // }
   }
 }

function saveToDos(){
    localStorage.setItem('toDos', JSON.stringify(toDos));
}

function handleToDoSubmit(event){
    event.preventDefault();
    const inputValue = toDoInput.value;
    DisplayToDos(inputValue);
    toDoInput.value = null;
    toDos.push(inputValue);
    saveToDos();
}

function DisplayToDos(value){
    
    const li = document.createElement('Li');
    const span = document.createElement('span');
    const toDoValue = document.createTextNode(value); 
    const deleteButton = document.createElement('button');    
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    li.appendChild(span);
    li.appendChild(deleteButton);
    span.appendChild(toDoValue);
    toDoList.appendChild(li);
    deleteButton.addEventListener('click', deleteTodo);
}

function deleteTodo(event){
    const oldTodo = event.target.parentNode;
    const oldTodoValue = oldTodo.textContent;
    console.dir(oldTodo); 
    oldTodo.remove(deleteTodoFromLocalStorage(oldTodoValue));   
}

function deleteTodoFromLocalStorage(oldTodoValue){
    console.log(parsedToDos);
    //not sure about this part
    let index = parsedToDos.indexOf(oldTodoValue);
        if (index !== -1) {
        parsedToDos.splice(index, 1 );
        toDos = parsedToDos;
        saveToDos();
        }
}
    
toDoForm.addEventListener('submit', handleToDoSubmit);
 
