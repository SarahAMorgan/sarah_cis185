// Challenge Problem: Number System Converter
// Name: Sarah Morgan
// Date: Oct 24, 2025

function decimalToBinary(decimal) {
  if (decimal === 0) {
    return "0";
  }

  let binary = "";
  let remainder = "";

  while (decimal > 0) {
    remainder = decimal % 2;
    binary = remainder + binary;
    decimal = Math.floor(decimal/2);
  }
  return binary;
}

console.log(decimalToBinary(10));
console.log(decimalToBinary(25));
console.log(decimalToBinary(0));

function binaryToDecimal(binary) {

}

console.log(binaryToDecimal("1010"));
console.log(binaryToDecimal("11111"));
console.log(binaryToDecimal("0"));

function decimalToHexadecimal(decimal) {
    // Convert decimal to hexadecimal string
    // Use 0-9 and A-F for digits
    // Don't use toString(16)!
}