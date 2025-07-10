// if statements - evaluate boolean values
// const prefersDarkMode = true;
// const prefersSolarizedMode = true;

// if (prefersSolarizedMode) {
//    console.log('solarized mode set!'); 
//    document.body.style.background = 'palegoldenrod';
// } else if (prefersDarkMode) {
//   console.log('dark mode set!');  
//   document.body.style.background = 'black';
// } else {    
//   console.log('light mode set!');
//   document.body.style.background = 'ghostwhite';
// }



const colorMode = 'dark';

// if (colorMode === 'solarized') {
//    console.log('solarized mode set!'); 
//    document.body.style.background = 'palegoldenrod';
// } else if (colorMode === 'dark') {
//   console.log('dark mode set!');  
//   document.body.style.background = 'black';
// } else {    
//   console.log('light mode set!');
//   document.body.style.background = 'ghostwhite';
// }

switch (colorMode) {
  case "solarized":
   console.log('solarized mode set!'); 
   document.body.style.background = 'palegoldenrod';
    break;
  case 'dark':
    console.log('dark mode set!');  
    document.body.style.background = 'black';
    break;
  default:  
    console.log('light mode set!');
    document.body.style.background = 'ghostwhite';
}
