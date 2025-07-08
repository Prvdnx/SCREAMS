// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el")

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

let name = "Per Harald Borgen"
let greeting = "Welcome back "

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = greeting + name


// let welcomeEl = document.getElementById("welcome-el");
// let name = "Prince";
// let greeting = "Welcome back";

// function greetFunc() {
//     let greet = greeting + " " + name;
//     welcomeEl.innerText = greet;
// }

// greetFunc();