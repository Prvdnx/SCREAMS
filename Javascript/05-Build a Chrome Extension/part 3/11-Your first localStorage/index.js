let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// localStorage.setItem("myName", "Per Harald Borgen")

let name = localStorage.getItem("myName")
console.log(name)

// localStorage.clear()


<<<<<<< HEAD
// EXERCISE:
=======

>>>>>>> 3f84f8fa762221b951e0857c0afc578edbd91bd3
// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings

<<<<<<< HEAD
// SOLUTION:
// localStorage.setItem("coursera", "https://www.coursera.org/learn/learn-javascript/ungradedWidget/1N6vl/what-is-localstorage")
// console.log(localStorage.getItem("coursera"))
// localStorage.clear();

=======
>>>>>>> 3f84f8fa762221b951e0857c0afc578edbd91bd3

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}
