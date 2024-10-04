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
let shouldCalculate = false;

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
  return Math.round(res * 10000000) / 10000000;
}

buttons.addEventListener("click", (e) => handleInput(e.target.id));

document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (!isNaN(key) || key === ".") {
    handleInput(key);
  } else if (["+", "-", "*", "/"].includes(key)) {
    handleInput(key);
  } else if (key === "Enter" || key === "=") {
    handleInput("=");
  } else if (key === "Backspace") {
    handleInput("delete");
  } else if (key === "Escape") {
    handleInput("AC");
  }
});

function handleInput(input) {
  if (!isNaN(input)) {
    if (display.textContent === "0" || shouldCalculate) {
      display.textContent.length <= 12;
      display.textContent = input;
      shouldCalculate = false;
    } else {
      display.textContent += input;
    }

    if (op !== "") {
      b = display.textContent;
    }
  }

  if (["+", "-", "*", "/"].includes(input)) {
    if (a !== null && op !== "" && b !== null) {
      const result = operate(parseFloat(a), op, parseFloat(b));
      display.textContent = result;

      a = result;
      b = null;
    } else {
      a = display.textContent;
    }
    op = input;
    shouldCalculate = true;
  }

  if (input === "=") {
    if (a !== null && op !== "" && b !== null) {
      const result = operate(parseFloat(a), op, parseFloat(b));
      display.textContent = result;

      a = result;
      b = null;
      op = "";
    }
  }

  if (input === "delete") {
    if (display.textContent.length > 1) {
      display.textContent = display.textContent.slice(0, -1);
    } else {
      display.textContent = "0";
    }
  }

  if (input === "AC") {
    a = null;
    b = null;
    op = "";
    display.textContent = "0";
  }
}

decimal.addEventListener("click", (e) => {
  let target = e.target;
  if (!display.textContent.includes(".")) {
    display.textContent += ".";
  }
});
