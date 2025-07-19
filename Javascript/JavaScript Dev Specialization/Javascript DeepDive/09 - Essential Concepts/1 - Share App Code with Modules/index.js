// import { getDate, year as currentYear } from './utils/date.js';

// const year = 2019;
// // Modules - allow us to share code between files
// class App {
//   constructor() {
//     this.render()  
//   }  
  
//   render() {
//     document.getElementById('root').innerHTML = `
//       <div>Date: ${getDate()}, Year: ${currentYear}</div>
//     `
//   }
// }
// // import / export
// new App()




import getDate from './utils/date.js';
import './utils/date.js';
// import getDateNow from './utils/date.js'; // can name it anything e.g `<div>Date: ${getDateNow()}</div>`

const year = 2019;
// Modules - allow us to share code between files
class App {
  constructor() {
    this.render()  
  }  
  
  render() {
    document.getElementById('root').innerHTML = `
      <div>Date: ${getDate()}</div>
    `
  }
}

// import / export

new App()