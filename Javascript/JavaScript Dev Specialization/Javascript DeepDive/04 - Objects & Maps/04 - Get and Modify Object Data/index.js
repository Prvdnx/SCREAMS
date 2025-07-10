const color = 'black';
const hexCode = '#000';

const colors = {
  'yellow Color': '#ff0',
  blue: "#f00",
  orange: "#f60",
  [color]: hexCode
};

// // colors[color] = hexCode;
// console.log(colors);

// colors.red = '#foo';

// colors.red = '#f00';

// console.log(colors['yellow Color']);

// function getColor(key) {
// //   return colors.key;
//   return colors[key];
// }

// delete colors['yellow Color']
delete colors.blue;
console.log(colors);

// console.log(getColor('blue'));
