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

const wrapper = document.querySelector(".wrapper");
const buttonLabels = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  "add",
  "subtract",
  "mulitply",
  "divide",
  "equal",
  "clear",
];

for (i = 0; i < 16; i++) {
  const button = document.createElement("button");
  button.classList.add(`${buttonLabels[i]}`);
  button.textContent = `${buttonLabels[i]}`;
  wrapper.appendChild(button);
}
