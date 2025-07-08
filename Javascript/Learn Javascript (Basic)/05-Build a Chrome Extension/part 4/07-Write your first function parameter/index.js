const welcomeEl = document.getElementById("welcome-el")

// function greetUser() {
//     welcomeEl.textContent = "Welcome back, Per Harald Borgen 👋"    
// }


// function greetUser(name) {
//     welcomeEl.textContent = "Welcome back, " + name + " 👋"    
// }
// greetUser("Per")


// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(greeting) {
    welcomeEl.textContent = greeting + ", Per Harald Borgen 👋"    
}

greetUser("Howdy")