let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
const janeBtn = document.getElementById("jane-btn")
// Use addEventListener() to listen for button clicks
janeBtn.addEventListener("click", function() {
    console.log(data[0].score)
})
// Log Jane's score when the button is clicked (via data)



// janeBtn.addEventListener("click", function() {
//     for (let i = 0; i < data.length; i++) {
//         if (data[i].player === "Jane") {
//             console.log(data[i].score)
//         }
//     }
// })
