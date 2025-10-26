// Problem 4: Pattern Generator
// Name: Sarah Morgan
// Date: Oct 23, 2025

function createPyramid(height) {
  let pyramid = "";

  for (let i = 0; i < height; i++) {
    // .repeat returns a string with a number of copies of said string
    let spaces = " ".repeat(height - i - 1);

    let stars = "*".repeat(i * 2 + 1);

    pyramid += spaces + stars;

    if (i < height - 1) {
      pyramid += "\n";
    }
  }
  return pyramid;
}

console.log(createPyramid(3));
console.log(createPyramid(4));

function createNumberStaircase(steps) {
  let staircase = "";

  for (let i = 1; i <= steps; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    staircase += row + "\n";
  }
  return staircase;
}

console.log(createNumberStaircase(5));

function createCheckerboard(size) {
  let checkerboard = "";

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if ((i + j) % 2 == 0) {
        checkerboard += "X";
      } else {
        checkerboard += "0";
      }
    }
    checkerboard += "\n";
  }
  return checkerboard;
}

console.log(createCheckerboard(4));