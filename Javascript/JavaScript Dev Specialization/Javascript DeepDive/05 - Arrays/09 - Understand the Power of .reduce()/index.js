const numbers = [1, 2, 3, 4, 5, 6];

// const doubledNumbers = numbers.reduce((acc, num) => {
//   acc.push(num * 2);
//   return acc;
// }, []);
// console.log('doubled numbers', doubledNumbers);
// console.log('numbers', numbers);


// const greaterNumbers = numbers.reduce((acc, num) => {
//   if (num > 3) {
//     acc.push(num);
//   }  
//   return acc;
// }, []);

// const greaterNumbers = numbers.filter(num => num > 3); // the equivalent

const greaterNumbers = numbers.reduce((acc, num) => num > 3 ? acc.concat(num) : acc, []); // using tenary

console.log(greaterNumbers);