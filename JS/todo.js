const toDoForm = document.querySelector(".todos_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todos_list");
let toDos =[];
const savedTodos = localStorage.getItem('toDos');
const parsedToDos = JSON.parse(savedTodos);

//3. save toDos in local storage
function saveToDos(inputValue){
    localStorage.setItem('toDos', JSON.stringify(toDos));

}

//4. Display saved todo list

DisplaySavedTodos();
//1. get input value

function handleToDoSubmit(event){
    event.preventDefault();
    const inputValue = toDoInput.value;
    DisplayToDos(inputValue);
    toDoInput.value = null;
    toDos.push(inputValue);
    saveToDos();
}

function DisplaySavedTodos() {
    console.log(savedTodos);
    if(savedTodos) {
        parsedToDos.forEach(DisplayToDos);
        toDos = parsedToDos;
        // for (let i = 0; i < parsedToDos.length; i++) {
        //     DisplayToDos(parsedToDos[i]);
        // }
   }
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
    console.log(oldTodo); 
    oldTodo.remove();   
}
    

toDoForm.addEventListener('submit', handleToDoSubmit);


//display the value 
