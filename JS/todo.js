const toDoForm = document.querySelector(".todos_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todos_list");


// get input value

function handleToDoSubmit(event){
    event.preventDefault();
    const inputValue = toDoInput.value;
    DisplayToDos(inputValue);
    toDoInput.value = null;
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
    oldTodo.remove();    
}

toDoForm.addEventListener('submit', handleToDoSubmit);


//display the value 