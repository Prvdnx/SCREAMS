// function handleLikePost(step) {
//   let likeCount = 0;
//   return function addLike() {
//     likeCount += step;
//     return likeCount;  
//   }
// }

// const doubleLike = handleLikePost(2);

// console.log(doubleLike());
// console.log(doubleLike());
// console.log(doubleLike());


// ==========================
// function getData(baseUrl, route) {
//   fetch(`${baseUrl}${route}`)
//     .then(response => response.json())
//     .then(data => console.log(data));  
// }

// getData('https://jsonplaceholder.typicode.com', '/posts');
// // getData('https://jsonplaceholder.typicode.com', '/comments');


// ========== alt ==========
// function getData(baseUrl) {
//   return function(route) {    
//     fetch(`${baseUrl}${route}`)
//     .then(response => response.json())
//     .then(data => console.log(data));  
//   }  
// }

// const getSocialMediaData = getData('https://jsonplaceholder.typicode.com');
// // getSocialMediaData('/comments');
// getSocialMediaData('/posts');


// ========== alt ==========
function getData(baseUrl) {
  return function(route) { 
    return function(callback) {    
      fetch(`${baseUrl}${route}`)
        .then(response => response.json())
        .then(data => callback(data));  
    }     
  }  
}

// const getData = baseUrl => route => callback =>  
//       fetch(`${baseUrl}${route}`)
//         .then(response => response.json())
//         .then(data => callback(data));  

const getSocialMediaData = getData('https://jsonplaceholder.typicode.com');

const getSocialMediaPosts = getSocialMediaData('/posts');
const getSocialMediaComments = getSocialMediaData('/comments');

getSocialMediaPosts(posts => {
  posts.forEach(post => console.log(post.title));  
});


// getData('https://jsonplaceholder.typicode.com', '/posts');
// getData('https://jsonplaceholder.typicode.com', '/comments');
