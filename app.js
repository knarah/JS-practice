const loginForm = document.querySelector(".login_form");
//console.log(loginForm);
const loginInput = loginForm.querySelector("input");
//console.log(loginInput);
const loginButton = loginForm.querySelector("button");
//console.log(loginButton);
const greeting = document.querySelector("#greeting");
//console.log(greeting);

loginForm.addEventListener('submit', loginFormOnSubmit);

function loginFormOnSubmit(event) {
    const username = loginInput.value;
    event.preventDefault();  
    console.log(username); 
    loginForm.classList.add('hidden');
    greeting.classList.remove('hidden');
    greeting.innerText = `Welcome, ${username}`;
}

