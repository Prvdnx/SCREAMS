// const getSpendAlert = function(amount){
//     return `Warning! You just spent £${amount}!`
// }


                                        ////==== One Parameter ====////
// const getSpendAlert_1 = (amount) => {
//     return `Warning! You just spent £${amount}!`
// } 

// const getSpendAlert_1 = amount => {
//     return `Warning! You just spent £${amount}!`
// } 

const getSpendAlert_1 = amount => `Warning! You just spent £${amount}!`

// const getSpendAlert_1 = amount => {
//     if (amount > 50) {
//         return `Warning! You just spent £${amount}!`
//     }
// }

console.log(getSpendAlert_1(150));



                                        ////==== No Parameter ====////
// const getSpendAlert = () => {
//     return `Warning! You just spent some money!`
// } 

const getSpendAlert = () => `Warning! You just spent some money!`

console.log(getSpendAlert())



                                        ////==== Two Parameters ====////
// const getSpendAlert_2 = (name, amount) => {
//     return `Warning! Hey ${name}! You just spent £${amount}!`
// }

const getSpendAlert_2 = (name, amount) => `Warning! Hey ${name}! You just spent £${amount}!`

console.log(getSpendAlert('Tom', 100))
