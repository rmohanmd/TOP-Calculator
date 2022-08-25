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

function operate(num1,num2,operator) {
  operator === "+"
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

function display() {
  const buttons = wrapper.querySelectorAll("button");
  const display = document.querySelector(".display");
  display.textContent = "";
  buttons.forEach((button) =>
    button.addEventListener("click", () => {
      isNaN(parseInt(button.className)) //check is it not a number when className converted to integer?
      ? {
        button.className === "equal" ?{
            num2 = parseFloat(display);
            operate(num1,num2,)
        } : 
      }
      
      (display.textContent += button.className)
        : console.log(button.className);
     
    })
  );
}
