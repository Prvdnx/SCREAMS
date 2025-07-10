const finalMenuItems = [
  "American Cheeseburger",
  "Southern Fried Chicken",
  "Glazed Salmon"
];

// let first = finalMenuItems[0];
// let second = finalMenuItems[1];
// let third = finalMenuItems[2];
// console.log(first, second, third);

// const [first, second, third] = finalMenuItems;
// console.log(finalMenuItems);

// const [first, second] = finalMenuItems;
// console.log({ first },{ second });

// let [first, second] = finalMenuItems;
// console.log('before', { first },{ second });
// [second, first] = [first, second];
// console.log('after', { first },{ second });

const [winner, ...losers] = finalMenuItems;
console.log({ winner, losers });