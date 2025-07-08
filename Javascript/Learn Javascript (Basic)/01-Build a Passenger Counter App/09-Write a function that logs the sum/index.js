let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times

// function mylog() {
//     let sum = lap1+lap2+lap3;
//     console.log(sum);
// }
// mylog();


function logLapTime() {
    let totalTime = lap1 + lap2 + lap3
    console.log(totalTime)
    // console.log(lap1 + lap2 + lap3)
}

// console.log(totalTime) // cannot be accessed from outside the function

logLapTime()