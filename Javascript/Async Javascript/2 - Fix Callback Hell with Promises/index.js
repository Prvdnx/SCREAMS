// callbacks -> promises

// navigator.geolocation.getCurrentPosition(position => {
//     console.log(position);
// });


// States of a promise:
// pending
// fulfilled
// rejected



// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('done'), 1000);  
// });

// promise.then(() => console.log('success')).catch(() => console.log('failure'));


// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('done'), 1000);  
// });

// promise.then(value => console.log(value)).catch(() => console.log('failure'));


// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(), 1000);  
// });

// promise.then(value => console.log(value)).catch(() => console.log('failure'));


// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(Error('Promise failed.')), 1000);  
// });

// promise.then(value => console.log(value)).catch(error => console.error(error));


// ////================
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(Error('Promise failed.')), 1000);  
// });

// promise
//   .then(value => console.log(value))
//   .catch(error => console.error(error))
//   .finally(() => console.log('done'));


// ////================
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(Error('Promise failed.')), 1000);  
// });

// promise
//   .then(value => console.log(value))
//   .catch(error => console.error(error))
//   .finally(() => console.log('done'));


// ////================
// const promise = new Promise((resolve, reject) => {
//    navigator.geolocation.getCurrentPosition(position => {
//     resolve(position); 
//   }, error => {
//      reject(error);
//   }); 
// });

// promise
//   .then(position => console.log(position))
//   .catch(error => console.error(error))
//   .finally(() => console.log('done'));


// ////================
// const promise = new Promise((resolve, reject) => {
//    navigator.geolocation.getCurrentPosition(resolve(position), reject(error)); 
// });

// promise
//   .then(position => console.log(position))
//   .catch(error => console.error(error))
//   .finally(() => console.log('done'));


const promise = new Promise((resolve, reject) => {
   navigator.geolocation.getCurrentPosition(resolve, reject); 
});

promise
  .then(position => console.log(position))
  .catch(error => console.error(error))
  .finally(() => console.log('done'));

const pause = () => {}











