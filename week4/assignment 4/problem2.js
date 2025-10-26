// Problem 2: Fall Leaf Counter
// Name: Sarah Morgan
// Date: Oct 22, 2025

function countLeaves (days) {
  let total = 0;

  for (let i = 1; i <= days; i++) {
    let leavesToday = 0;

    if (i === 1) {
      leavesToday = 10;
    } else if (i === 2) {
      leavesToday = 10 * 2;
    } else {
      leavesToday = i * 10;
    }

    total = total + leavesToday;
  }
  let outputTotal = total;
  return outputTotal;
}

function categorizeLeafColors(leaves) {
  let colorCount = {};

  for (let i = 0; i < leaves.length; i++) {
      let color = leaves[i];

    if (colorCount[color]) {
      colorCount[color] = colorCount[color] + 1;
    } else {
      colorCount[color] = 1
    }
  }
  return colorCount;
}

// I wasn't what the spec meant by "the return output total will be a string"
// Did you want it to also output the (10 + 20)?
console.log(countLeaves(1)) // → 10
console.log(countLeaves(2)) // → 30 (10 + 20)
console.log(countLeaves(4)) // → 100 (10 + 20 + 30 + 40)
console.log(countLeaves(5)) // → 150 (10 + 20 + 30 + 40 + 50)

console.log(categorizeLeafColors(["red", "yellow", "red", "brown"])) // → {red: 2, yellow: 1, brown: 1}
console.log(categorizeLeafColors(["orange", "orange", "orange"])) // → {orange: 3}
console.log(categorizeLeafColors([])) //  → {}