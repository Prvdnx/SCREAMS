let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function getHand() {
    let randomIndex = Math.floor( Math.random() * 3)
    return hands[randomIndex]
}

console.log( getHand() )


// function random() {
//     let result = Math.floor(Math.random() * hands.length)
//     // console.log(result)
//     return (hands[result])
// }
// let returns = random()
// console.log(returns)