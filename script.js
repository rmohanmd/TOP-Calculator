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
  return operator === "add"
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
let num1 = "";
let num2 = "";
let operator;

function displayEqual() {}

function display() {
  const buttons = wrapper.querySelectorAll("button");
  const display = document.querySelector(".display");
  let tempHolder = "";
  display.textContent = "";

  buttons.forEach((button) =>
    button.addEventListener("click", () => {
      //check is it not a number when className converted to integer?

      if (isNaN(parseInt(button.className))) {
        if (button.className === "equal") {
          num2 = parseFloat(display.textContent);
          display.textContent = operate(num1, num2, operator);
          operator = "";
          num1 = "";
        } else if (button.className === "clear") {
          num1 = "";
          num2 = "";
          operator = "";
          display.textContent = "";
        } else {
          // normal first run

          // num2 is already full and push operator again
          if (num1 !== "") {
            num2 = parseFloat(display.textContent);
            num1 = operate(num1, num2, operator);
            display.textContent = num1;
            operator = button.className;
            //num2 = "";
          } else {
            num1 = parseFloat(display.textContent);
            display.textContent = "";
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
        display.textContent += button.className;
      }
    })
  );
}
display();

//
