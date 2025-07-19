// OPTION 1
// export function getDate() {
//   const date = new Date();  
//   return date;
// }
// export const year = new Date().getFullYear();


// OPTION 2
// function getDate() {
//   const date = new Date();  
//   return date;
// }
// const year = new Date().getFullYear();
// export { getDate, year };


// OPTION 3
export default function getDate() {
  const year = new Date().getFullYear();
  const date = `${new Date()}, year: ${year}`;  
  return date;
}
