function calculateTotalCost(itemsBoughtArr){
/*
Challenge:
1. Use the reduce method to calculate the total 
   cost of items which have been bought.
*/
    const total = itemsBoughtArr.reduce((total, currentItem)=>
        total + currentItem.priceUSD, 0
        )
    return total
}


/* give each customer a discount */
// function calculateTotalCost(itemsBoughtArr, discount){

//     const total = itemsBoughtArr.reduce((total, currentItem)=>
//         total + currentItem.priceUSD, 0
//         )
//     return total - discount
// }

// console.log(calculateTotalCost(itemsBoughtArr, 10))
