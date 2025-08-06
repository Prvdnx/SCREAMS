const dateSnapshot = new Date()

// console.log(dateSnapshot1.toString())

// setTimeout(() => {
//     const dateSnapshot2 = new Date()
//     console.log(dateSnapshot2.toString())
// }, 1000)

// setTimeout(() => {
//     const dateSnapshot3 = new Date()
//     console.log(dateSnapshot3.toString())
// }, 2000)

/*
Challenge:
1. Search online to find out how we can get just the year 
   using the Date() constructor and update the console.log above.
*/

console.log(`Copyright ${dateSnapshot.getFullYear().toString()}`)

 //luxon