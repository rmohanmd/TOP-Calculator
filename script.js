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
  if (num2 === 0) return "HEY! Can't do that!";
  return num1 / num2;
}

function operate(num1, num2, operator) {
  return operator === "+"
    ? add(num1, num2)
    : operator === "-"
    ? subtract(num1, num2)
    : operator === "*"
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
  "+",
  "-",
  "*",
  "/",
  "=",
  "AC",
];

for (i = 0; i < 16; i++) {
  const buttonCreate = document.createElement("button");
  buttonCreate.classList.add(`${buttonLabels[i]}`);
  buttonCreate.textContent = `${buttonLabels[i]}`;
  wrapper.appendChild(buttonCreate);
}
let num1 = "";
let num2 = "";
let operator = "";
let tempHolder = "";

function displayEqual() {}

function display() {
  const buttons = wrapper.querySelectorAll("button");
  const display = document.querySelector(".display");

  display.textContent = "";

  buttons.forEach((button) =>
    button.addEventListener("click", () => {
      //check is it not a number when className converted to integer?

      if (isNaN(parseInt(button.className))) {
        if (button.className === "=") {
          num2 = parseFloat(tempHolder);
          tempHolder =
            Math.round(operate(num1, num2, operator) * 1000000) / 1000000;
          display.textContent = tempHolder;
          operator = "";
          num1 = "";
        } else if (button.className === "AC") {
          num1 = "";
          num2 = "";
          tempHolder = "";
          operator = "";
          display.textContent = "";
        } else {
          //if you push an operator but operator is already has something, replace it.

          if (num1 !== "") {
            num2 = parseFloat(tempHolder);
            tempHolder = "";
            num1 = operate(num1, num2, operator);
            display.textContent = num1;
            operator = button.className;
          } else {
            num1 = parseFloat(tempHolder);
            tempHolder = "";
            operator = button.className;
          }
          // if operator empty {do normal}
          // else if operator notEmpty { run the calculation, display it and }
          // operator = button.className;
          // if (num2 === "") {
          //   num1 = parseFloat(display.textContent);
          //   display.textContent = "";
          // } else {
          //   num2 = parseFloat(display.textContent);
          //   display.textContent = operate(num1, num2, operator);
          // }
        }
      } else {
        ///if (typeof num1 === "number") display.textContent;
        tempHolder += button.className;
        display.textContent = tempHolder;
      }
    })
  );
}
display();

//
