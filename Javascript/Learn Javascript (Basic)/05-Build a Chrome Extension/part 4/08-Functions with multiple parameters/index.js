const welcomeEl = document.getElementById("welcome-el")

// function greetUser(greeting, name) {
//     // welcomeEl.textContent = greeting + ", " + name + " 👋"
//     // Rewrite the expression using template literals
//     welcomeEl.textContent = `${greeting}, ${name} 👋`
// }
// greetUser("Howdy", "James")


// Add the ability to choose the emoji as well!

function greetUser(greeting, name, emoji) {
    welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
}

greetUser("Howdy", "James", "🔥")