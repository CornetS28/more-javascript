// let fahrenheit = 45;
const fahrenheitToCeluis = (fahrenheit) => (fahrenheit - 32) * 5/9;
const fahrenheitToKelvin = (fahrenheit) => (fahrenheit - 32) * 5 / 9 + 273.15
 
let value = fahrenheitToCeluis(45);
let otherValue = fahrenheitToKelvin(45);
console.log(value);
console.log(otherValue);