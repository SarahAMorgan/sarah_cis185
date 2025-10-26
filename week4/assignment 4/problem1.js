// Problem 1: Temperature Converter Suite
// Sarah Morgan
// Oct 22, 2025

function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5 / 9;
  return celsius;
}

function getTemperatureDescription(fahrenheit) {
  let description = "";

  if (fahrenheit < 32) {
    description = "Freezing";
  } else if (fahrenheit <= 50) {
    description = "Cold";
  } else if (fahrenheit <= 70) {
    description = "Cool";
  } else if (fahrenheit <= 85) {
    description = "Warm";
  } else {
    description = "Hot";
  }

  return description;
}

console.log(celsiusToFahrenheit(0)); // → 32
console.log(celsiusToFahrenheit(100)); // → 212
console.log(celsiusToFahrenheit(-40)); // → -40
console.log(fahrenheitToCelsius(32)); // → 0
console.log(fahrenheitToCelsius(68)); // → 20
console.log(fahrenheitToCelsius(212)); // → 100

console.log(getTemperatureDescription(25)); // → "Freezing"
console.log(getTemperatureDescription(75)); // → "Warm"
console.log(getTemperatureDescription(95)); // → "Hot"