const user = {
  name: "",
  username: "",
  phoneNumber: "",
  email: "",
  password: "",
  verified: true 
};

const newUser = {
  username: "ReedBarger",
  email: "reed@gmail.com",
  password: "mypassword"  
};

// // console.log(Object.assign(user, newUser));
// Object.assign(user, newUser);
// console.log(user);

// console.log(Object.assign({}, user, newUser));

// console.log(Object.assign({}, user, newUser, { verified: false }));
const createdUser = { ...user, ...newUser, verified: false };
console.log(createdUser);
// console.log(user);
