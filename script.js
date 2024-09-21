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
