// const todos = {};

// const todo1 = {
//   text: 'Wash the dishes',
//   complete: false  
// };

// const todo2 = {
//   text: 'Do laundry',
//   complete: false  
// };

// todos[2] = todo2;
// todos[1] = todo1;
// console.log(todos);


const todos = [];

const todo1 = {
  text: 'Wash the dishes',
  complete: false  
};

const todo2 = {
  text: 'Do laundry',
  complete: false  
};

todos.push(todo1, todo2);
todos.pop();
// todos[1] = todo2;
// todos[0] = todo1;
console.log(todos);
