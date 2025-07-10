// const response = "Reed";

// // let username;

// // if (response) {
// //   username = response;
// // } else {
// //   username = "guest";
// // }

// // const username = response ? response : "guest";
// // console.log(username);


// // const result = 'Reed' || '';
// // console.log(result);

// const username = response || "guest";
// console.log(username);




const response = "Reed";
const isEmailVerified = true;

// let username;

// if (response) {
//   if (isEmailVerified) {
//     username = response;
//   }  
// } else {
//   username = "guest";
// }

const email = isEmailVerified && 'reed@gmail.com';
console.log(email);

const username = isEmailVerified && response || "guest";
// const username = isEmailVerified && (response || "guest");
console.log(username);