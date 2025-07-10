function handleLikePost(step) {
  let likeCount = 0;
  return function addLike() {
    likeCount += step;    
    return likeCount;
  }
//   addLike();
  console.log('like count:', likeCount);
}

const doubleLike = handleLikePost(2);

console.log(doubleLike());
console.log(doubleLike());
console.log(doubleLike());

// 1) Closures are a property of JavaScript functions
// 2) Call function in different scope than where function was original defined