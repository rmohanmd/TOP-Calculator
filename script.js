function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) return "ERROR!";
  return num1 / num2;
}

function operate(symbol) {
  symbol === "+"
    ? add(num1, num2)
    : symbol === "-"
    ? subtract(num1, num2)
    : symbol === "*"
    ? multiply(num1, num2)
    : divide(num1, num2);
}
