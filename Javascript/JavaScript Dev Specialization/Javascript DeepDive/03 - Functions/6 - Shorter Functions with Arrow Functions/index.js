// =>

const username = 'john';

// const capitalize = function(name) {
//   return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;  
// }


// const capitalize = (name) => {
//   return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;  
// }


const capitalize = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`;  
 
//  console.log(capitalize(username));


 function greetUser(name, callback) {
  return callback(capitalize(name));  
}

// const result = greetUser(username, (name) => {
//   return `Hi there, ${name}!`;
// });

const result = greetUser(username, name => `Hi there, ${name}!`);

console.log(result);