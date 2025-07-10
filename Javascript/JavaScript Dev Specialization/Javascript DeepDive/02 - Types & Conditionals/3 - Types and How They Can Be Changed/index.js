/*
Primitive types:

string
number
boolean
undefined
null
symbol

everything else - Object type
*/

let message = 'some string';

// console.log(typeof 42);
// console.log(typeof window);

// 1) Explicit type conversion
console.log(String(42));
console.log(Boolean(message));

// 2) Implicit type conversion (coercion)
console.log('1' * '2'); // coerses '1' & '2' to numbers
console.log('10' + 20); 

// truthy (true)
// falsy (false)

// coerses values to a boolean
// if ('hello') {
//   console.log('run');
// } else {
//   console.log('skipped');
// }

// if (0) {
//   console.log('run');
// } else {
//   console.log('skipped');
// }

//// falsy (false) values ////
// false
// 0
// ''
// null
// undefined
// NaN

// 1) Avoid direct comparisons in conditionals

// const username = null;

// if (!username) {
//   console.log('no user');
// }

// 2) Use triple equals === (strict equals operator) 

// if (null === undefined) {
//   console.log('equals');
// } else {
//   console.log('not equals');
// }

// 3) Convert to real Boolean values where needed

if (Boolean(NaN) === Boolean(NaN)) {
    console.log('equal')
} else {
    console.log('not equals')
}
