const lunchMenuIdeas = ['Harvest Salad', 'Southern Fried Chicken'];

// const allMenuIdeas = lunchMenuIdeas.concat('Club Sandwich');     // approach to use a non-mutating array method (to stop copying array by reference)
const allMenuIdeas = [...lunchMenuIdeas];   // array spread operator "..."

allMenuIdeas.push('Club Sandwich');

console.log(allMenuIdeas);