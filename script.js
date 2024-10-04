const display = document.querySelector(".calc-screen");
const decimal = document.querySelector(".decimal-btn");
const buttons = document.querySelector(".calc-btns");

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

let op = "";
let a = null;
let b = null;

function operate(a, op, b) {
  let res;
  switch (op) {
    case "+":
      res = add(a, b);
      break;

    case "-":
      res = subtract(a, b);
      break;

    case "*":
      res = multiply(a, b);
      break;

    case "/":
      if (b == 0) {
        return "ERROR";
      } else {
        res = divide(a, b);
      }
      break;
  }
  return Math.round(res * 1000000) / 1000000;
}

buttons.addEventListener("click", (e) => {
  let target = e.target;

  if (target.tagName === "BUTTON") {
    if (!isNaN(target.id)) {
      if (display.textContent == 0) {
        display.textContent = target.id;
      } else {
        display.textContent += target.id;
      }

      if (op !== "") {
        b = display.textContent;
      }
    }

    if (["+", "-", "*", "/"].includes(target.id)) {
      a = display.textContent;
      op = target.id;
      display.textContent = "0";
    }

    if (target.id === "=") {
      if (a !== null && op !== "" && b !== null) {
        const result = operate(parseFloat(a), op, parseFloat(b));
        display.textContent = result;

        a = result;
        b = null;
        op = "";
      }
    }
  }
});

decimal.addEventListener("click", (e) => {
  let target = e.target;
  if (!display.textContent.includes(".")) {
    display.textContent += ".";
  }
});
