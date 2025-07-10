const userData = { 
  username: "Reed",
  title: "JavaScript Programmer",
  // getBio() {
  //   console.log(`User ${this.username} is a ${this.title}`);
  // },
  getBio: () => {
    console.log(`User ${this.username} is a ${this.title}`);
  },
  // askToFriend() {
  //   let that = this;
  //   setTimeout(function() {
  //     console.log(`Would you like to friend ${that.username}?`);   
  //   }, 2000);  
  // }
  askToFriend() {
    setTimeout(() => {
      console.log(`Would you like to friend ${this.username}?`);   
    }, 2000);  
  } 
}

userData.getBio();
userData.askToFriend();