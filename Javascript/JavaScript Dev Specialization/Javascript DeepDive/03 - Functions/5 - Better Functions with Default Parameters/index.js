// function convertTemperature(celsius, decimalPlaces) {
//     // celsius to fahrenheit
//   decimalPlaces = decimalPlaces || 1;
//   const fahrenheit = celsius * 1.8 + 32;
//   return Number(fahrenheit.toFixed(decimalPlaces));
// }
// console.log(convertTemperature(21, 1));

// default values
function convertTemperature(celsius, decimalPlaces = 1) {
    // celsius to fahrenheit
  const fahrenheit = celsius * 1.8 + 32;
  return Number(fahrenheit.toFixed(decimalPlaces));
}

console.log(convertTemperature(21, 0));