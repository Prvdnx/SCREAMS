const credits = 0

if (credits > 0) {
    console.log("Let's play 🎰")
} else {
    console.log("Sorry, you have no credits 😭")
}


// truthy
// falsy


if (credits) {
    console.log("Let's play 🎰")
} else {
    console.log("Sorry, you have no credits 😭")
}


if (0) {    // falsy
    console.log("Let's play 🎰")
} else {
    console.log("Sorry, you have no credits 😭")
}


if ("yolo") {
    console.log("Let's play 🎰")
} else {
    console.log("Sorry, you have no credits 😭")
}


if (["qwedf", "qwdqwd"]) {
    console.log("Let's play 🎰")
} else {
    console.log("Sorry, you have no credits 😭")
}


if ("") {   // falsy
    console.log("Let's play 🎰")
} else {
    console.log("Sorry, you have no credits 😭")
}

if (false) {
    console.log("Let's play 🎰")
} else {
    console.log("Sorry, you have no credits 😭")
}



//== falsy values : ==//
// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN


////==== null -> how you as a developer signalize emptiness ====////
let CurrentViewers = null
CurrentViewers = ["jane", "nick"]
// currentViewers = null

if (CurrentViewers) {
    // do something , e.g. notify the live streamers
    console.log("we have viewers")
}


////==== undefined -> how JavaScript signalizes emptiness ====////
let myCurrentViewers
console.log(myCurrentViewers)     // logs out undefined
console.log(myCurrentViewers.randomKey)   // logs out undefined

let myCurrentViewers2 = ["jane"]
console.log(myCurrentViewers2[5])   // logs out undefined

