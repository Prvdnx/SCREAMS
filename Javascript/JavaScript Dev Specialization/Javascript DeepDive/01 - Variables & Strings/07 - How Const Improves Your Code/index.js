// const - restrictions that make code more readable
// 1) must be initialized with value
// 2) can't be reassigned after declaration


// // version - 1
// var originalPrice = 50;
// var percentOff = 20;
// var salePrice = originalPrice * (percentOff / 100);

// // version - 2
const originalPrice = 50;
const percentOff = 20;
const salePrice = originalPrice * (percentOff / 100);
// let salePrice = originalPrice * (percentOff / 100);  // use "let" whenever the variable needs to be reassigned

// rest of our program (maybe 100s of lines)

console.log(salePrice);