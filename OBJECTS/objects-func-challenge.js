const convertFahrenheit = (fahrenheit) => {
 return {
  fahrenheit,
  celcuis: 5 / 9 * (fahrenheit - 32),
  kelvin: (fahrenheit - 32) * 5 / 9 + 273.15
 };
};


let temp = convertFahrenheit(74);
console.log(temp)
console.log(temp.celcuis +  ' C')
console.log(temp.kelvin + ' K') 

