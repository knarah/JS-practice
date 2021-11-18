const loginForm = document.querySelector(".login_form");
//console.log(loginForm);
const loginInput = loginForm.querySelector("input");
//console.log(loginInput);
const loginButton = loginForm.querySelector("button");
//console.log(loginButton);
const greeting = document.querySelector("#greeting");
//console.log(greeting);

const HIDDEN_CLASS = 'hidden';
const USERNAME_KEY ='username';


// after login- not showing the login form
// login value is null, show login form, if notnull remove loginform
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show loginform
    loginForm.classList.remove(HIDDEN_CLASS);
} else {
    // not show loginform
    loginForm.classList.add(HIDDEN_CLASS);
    // show greeing
    showGreetingMessage(savedUsername);    
}

loginForm.addEventListener('submit', loginFormOnSubmit);

function loginFormOnSubmit(event) {
    const username = loginInput.value;
    event.preventDefault();  
    // not showing loginform
    loginForm.classList.add(HIDDEN_CLASS);
    // save the username in localstorage
    localStorage.setItem(USERNAME_KEY, username);
    // show greeting
    showGreetingMessage(username);
}

function showGreetingMessage (username) {
    greeting.classList.remove(HIDDEN_CLASS);
    greeting.innerText = `Welcome, ${username}`;
}