const add = function (numA, numB) {
  return numA + numB;
};

const subtract = function (numA, numB) {
  return numA - numB;
};

const multiply = function (numA, numB) {
  return numA * numB;
};

const divide = function (numA, numB) {
  if (numB !== 0) {
    return numA / numB;
  } else {
    return "ERROR";
  }
};

let numA = 0;
let numB = 0;
let operation;

function operate(numA, numB, operation) {
  let result;
  switch (operation) {
    case "+":
      result = add(numA, numB);
      break;
    case "-":
      result = subtract(numA, numB);
      break;
    case "*":
      result = multiply(numA, numB);
      break;
    case "/":
      result = divide(numA, numB);
      break;
    default:
      result = "ERROR";
  }
}
