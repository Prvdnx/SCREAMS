import { itemsBoughtArr } from '/itemsBoughtArr.js'

// // Using conditional (if statement) to check discount //
// function calculateTotalCost(itemsBoughtArr, discount) {
//     const total = itemsBoughtArr.reduce((total, currentItem) => {
//         if (!discount) {
//             discount = 10
//         }
//         return total + currentItem.priceUSD
//     }, 0
//     )
//     return total - discount
// }


// Using default parameter for discount //
function calculateTotalCost(itemsBoughtArr, discount = 0) {

    const total = itemsBoughtArr.reduce((total, currentItem) => {
        return total + currentItem.priceUSD
    }, 0
    )
    return total - discount
}

console.log(calculateTotalCost(itemsBoughtArr, 10))