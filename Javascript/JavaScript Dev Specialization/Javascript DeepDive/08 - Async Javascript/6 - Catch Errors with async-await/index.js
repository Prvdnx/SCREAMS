// async function runAsync() {
//   try { 
//     await Promise.resolve('hello world'); 
//     null.someProperty = true; 
//   } catch (error) {
//     console.error(error); 
//   }  
// }
// runAsync();



// async function runAsync() {
//   try { 
//     return await Promise.reject(Error('Oops')); 
//     // null.someProperty = true; 
//   } catch (error) {
//     console.error(error); 
//   }  
// }
// runAsync();



// async function runAsync() {
//   return await Promise.reject(Error('Oops')); 
// }
// runAsync().catch(error => console.error(error));



async function getGithubUser() {
  try {    
    const response = await fetch('https://api.github.com/users/laksjdflasjfdlkjadfjk');
    if (!response.ok) {
      throw new Error(response.status);  
    }
  } catch (error) {
    console.log('Could not fetch user, try resetting your connection');
    // alert(error.message);
    console.error(error);  
  } 
}
getGithubUser();
