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
  return numA / numB;
};

let numA = "";
let numB = "";
let operation;

function operate(numA, numB, operation) {
  let result;
  switch (operation) {
    case "+":
      numA = add(numA, numB);
      break;
    case "-":
      numA = subtract(numA, numB);
      break;
    case "*":
      numA = multiply(numA, numB);
      break;
    case "/":
      numA = divide(numA, numB);
      break;
    default:
      numA = "ERROR";
  }
  return numA;
}

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    numA += this.textContent;

    document.querySelector("#calc-screen").textContent = numA;
  });
});
