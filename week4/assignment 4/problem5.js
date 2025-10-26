// Problem 5: Array Manipulator
// Name: Sarah Morgan
// Date: Oct 23, 2024

function reverseArray(arr) {
  let reverse = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  return reverse;
}

console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArray(["a", "b", "c"]));
console.log(reverseArray([]));

function removeDuplicates(arr) {
  let removed = [];

  for (let i = 0; i < arr.length; i++) {
    if (removed.includes(arr[i]) == false) {
      removed.push(arr[i]);
    }
  }
  return removed;
}

console.log(removeDuplicates([1, 2, 2, 3, 1, 4]));
console.log(removeDuplicates(["a", "b", "a", "c"]));

function rotateArray(arr, positions) {
  let rotated = arr.slice();

  for (let i = 0; i < positions; i++) {
    let last = rotated.pop();
    rotated.unshift(last);
  }
  return rotated;
}

console.log(rotateArray([1, 2, 3, 4], 1));
console.log(rotateArray([1, 2, 3, 4], 2));
console.log(rotateArray([1, 2, 3], 4));

function findSecondLargest(numbers) {
  if (numbers.length < 2) {
    return null;
  }

  let unique = [...new Set(numbers)];
  if (unique.length < 2) {
    return null;
  }

  let largest = unique[0];
  for (let i = 1; i < unique.length; i++) {
    if (unique[i] > largest) {
      largest = unique[i];
    }
  }

  let secondLargest = null;
  for (let i = 0; i < unique.length; i++) {
    let value = unique[i];
    if (value === largest) {
      continue;
    } else if (value > secondLargest) {
      secondLargest = value;
    }
  }
  return secondLargest;
}

console.log(findSecondLargest([10, 20, 30, 40]));
console.log(findSecondLargest([5, 5, 5]));
console.log(findSecondLargest([100, 50, 100, 75]));
