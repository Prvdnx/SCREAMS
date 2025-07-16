// const post = document.querySelector(".post");
// post.addEventListener('click', event => {
// //   console.log(event.target);  
//   console.log('Do you want to edit this post?')
// });


// const posts = document.querySelectorAll(".post");
// posts.forEach(post => {  
//   post.addEventListener('click', event => {
//   //   console.log(event.target);  
//     console.log('Do you want to edit this post?')
//   });
// })


// document.body.addEventListener('click', event => {
// document.body.addEventListener('mouseover', event => {
// document.body.addEventListener('mouseout', event => {
// document.body.addEventListener('keyup', event => {
// document.body.addEventListener('keydown', event => {
document.body.addEventListener('keypress', event => {
  // if (!event.target.matches('.post')) return;
  if (!event.target.closest('.post')) return;

  console.log('Do you want to edit this post?')  
})
