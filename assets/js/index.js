const display = document.getElementById("display");
const buttons = document.querySelectorAll(".key");
let n1 = 0;
let n2 = 0;
let operator = "";
let result = 0;
let isOperator = false;
let isDot = false;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let key = e.target.innerText;
    console.log(key);
    // Numbers
    if (key >= "0" && key <= "9") {
      if (isOperator) {
        display.value = key;
        isOperator = false;
      } else {
        if (display.value === "0") {
          display.value = key;
        } else {
          display.value += key;
        }
      }
    }
    // Operators
    if (key === "+" || key === "-" || key === "x" || key === "/") {
      if (isOperator) {
        isOperator = false;
      } else {
        n1 = Number(display.value);
        operator = key;
        isOperator = true;
      }
    }
    // Clear
    if (key === "C") {
      display.value = "0";
      isOperator = false;
      isDot = false;
      n1 = 0;
      n2 = 0;
      operator = "";
    }
    // Percent
    if (key === "%") {
      display.value = Number(display.value) / 100;
    }
    // Dot
    if (key === ".") {
      if (!isDot) {
        display.value += key;
        isDot = true;
      }
    }
    // Equals
    if (key === "=") {
      n2 = Number(display.value);
      switch (operator) {
        case "+":
          result = n1 + n2;
          break;
        case "-":
          result = n1 - n2;
          break;
        case "x":
          result = n1 * n2;
          break;
        case "/":
          result = n1 / n2;
          break;
      }
      display.value = result;
      isOperator = false;
      isDot = false;
      n1 = 0;
      n2 = 0;
      operator = "";
    }
  });
});
