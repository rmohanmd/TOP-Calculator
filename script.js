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

function operate(num1, num2, operator) {
  operator === "add"
    ? add(num1, num2)
    : operator === "subtract"
    ? subtract(num1, num2)
    : operator === "multiply"
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
  const buttonCreate = document.createElement("button");
  buttonCreate.classList.add(`${buttonLabels[i]}`);
  buttonCreate.textContent = `${buttonLabels[i]}`;
  wrapper.appendChild(buttonCreate);
}
let num1;
let num2;
let operator;
function display() {
  const buttons = wrapper.querySelectorAll("button");
  const display = document.querySelector(".display");
  display.textContent = "";

  buttons.forEach((button) =>
    button.addEventListener("click", () => {
      //check is it not a number when className converted to integer?

      if (isNaN(parseInt(button.className))) {
        if (button.className === "equal") {
          num2 = parseFloat(display.textContent);
          display.textContent = operate(num1, num2, operator);
        } else {
          num1 = parseFloat(display.textContent);
          operator = button.className;
          display.textContent = "";
        }
      } else {
        display.textContent += button.className;
      }
    })
  );
}
