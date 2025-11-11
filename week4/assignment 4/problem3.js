// Problem 3: Grade Calculator
// Name: Sarah Morgan
// Date: Oct 22, 2025

function calculateAverage(scores) {
  if (scores.length === 0) {
    return 0;
  }

  let total = 0;

  for (let i = 0; i < scores.length; i++) {
    total = total + scores[i];
  }

  let average = total / scores.length;

  return average;
}

console.log(calculateAverage([80, 90, 70]));
console.log(calculateAverage([100, 50, 75]));
console.log(calculateAverage([]));

function dropLowestScore(scores) {
  let newScores = scores.slice();
  let lowestScore = Math.min(...scores)
  let index = newScores.indexOf(lowestScore)
  newScores.splice(index, 1);

  return newScores;
}

console.log(dropLowestScore([80, 90, 70, 85]));
console.log(dropLowestScore([50, 50, 75, 100]));

function getLetterGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getLetterGrade(95));
console.log(getLetterGrade(82));
console.log(getLetterGrade(58));


function curveGrades(scores, curveAmount) {
  // adding curve amount to each index in array
  // cap at 100

  let curvedGrade = [];

  for (let i = 0; i < scores.length; i++) {
    let newScore = scores[i] + curveAmount;

    if (newScore > 100) {
      newScore = 100;
    }
    curvedGrade.push(newScore);
  }
  return curvedGrade;
}

console.log(curveGrades([85, 95, 70], 10));
console.log(curveGrades([90, 96, 80], 5));
