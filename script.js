const display = document.querySelector(".calc-screen");
const buttons = document.querySelector(".calc-btns");
const MAX_DISPLAY_LENGTH = 14;

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

let a = null;
let b = null;
let op = "";
let shouldCalculate = false;

// Handles the calculator arithmetic operations
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

// Handles the click input
buttons.addEventListener("click", (e) => handleInput(e.target.id));

// Handles the keyboard input
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

// The calculator input function
function handleInput(input) {
  // Handles display length
  if (
    display.textContent.length >= MAX_DISPLAY_LENGTH &&
    !["=", "AC", "delete"].includes(input)
  ) {
    return;
  }
  if (!isNaN(input)) {
    if (display.textContent === "0" || shouldCalculate) {
      display.textContent = input;
      shouldCalculate = false;
    } else {
      display.textContent += input;
    }

    if (op !== "") {
      b = display.textContent;
    }
  }

  // Selects an operator from the calculator operations
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

  // Handles decimal
  if (input === ".") {
    if (!display.textContent.includes(".")) {
      display.textContent += ".";
      shouldCalculate = false;
    }
  }

  // Handles calculate
  if (input === "=") {
    if (a !== null && op !== "" && b !== null) {
      const result = operate(parseFloat(a), op, parseFloat(b));
      display.textContent = result;

      a = result;
      b = null;
      op = "";
    }
  }

  // Handles delete
  if (input === "delete") {
    if (display.textContent.length > 1) {
      display.textContent = display.textContent.slice(0, -1);
    } else {
      display.textContent = "0";
    }
  }

  // Handles clear
  if (input === "AC") {
    a = null;
    b = null;
    op = "";
    display.textContent = "0";
  }
}
