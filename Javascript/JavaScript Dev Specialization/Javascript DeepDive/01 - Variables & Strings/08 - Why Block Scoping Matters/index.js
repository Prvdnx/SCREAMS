var price = 20;
var isSale = true;

// variable shadowing
if (isSale) {
  // discount price of product

  // var price = 20 - 2;

  let price = 20 - 2;
  // const price = 20 - 2;

  // do something 
  console.log('sale price', price);
}

console.log('price', price);