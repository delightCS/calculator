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

let calculatorBtn = document.querySelector(".calculator-btns");
let calculatorScreen = document.querySelector(".calculator-screen");

calculatorBtn.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.id) {
    case "btn-9":
      calculatorScreen.textContent = 9;
      break;

    case "btn-8":
      calculatorScreen.textContent = 8;
      break;

    case "btn-7":
      calculatorScreen.textContent = 7;
      break;

    case "btn-6":
      calculatorScreen.textContent = 6;
      break;

    case "btn-5":
      calculatorScreen.textContent = 5;
      break;

    case "btn-4":
      calculatorScreen.textContent = 4;
      break;

    case "btn-3":
      calculatorScreen.textContent = 3;
      break;

    case "btn-2":
      calculatorScreen.textContent = 2;
      break;

    case "btn-1":
      calculatorScreen.textContent = 1;
      break;

    case "btn-0":
      calculatorScreen.textContent = 0;
      break;

    case "btn-.":
      calculatorScreen.textContent = ".";
      break;
  }
});
