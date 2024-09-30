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

// const buttons = document.querySelectorAll(".btn");

// buttons.forEach((button) => {
//   button.addEventListener("click", function () {
//     numA += this.textContent;

//     document.querySelector("#calc-screen").textContent = numA;
//   });
// });

const calculator = document.querySelector(".container");
const display = document.querySelector(".calc-screen");
const keys = document.querySelector(".calc-btns");

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;

    if (!action) {
      if (displayedNum == 0) {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }

    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      console.log("operator key");
    }

    if (action === "calculate") {
      console.log("calculate key");
    }

    if (action === "delete") {
      console.log("delete key");
    }

    if (action === "clear") {
      console.log("clear key");
    }
  }
});
