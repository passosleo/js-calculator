<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- <link rel="icon" href="./assets/images/favicon.ico"> -->
  <link rel="stylesheet" href="./reset.css">
  <link rel="stylesheet" href="./style.css">
  <title>JS Calculator</title>
</head>
<body>
  <div class="calculator">
    <div class="display">
      <input type="text" id="display" value="0" readonly>
    </div>
    <div class="keyboard">
      <div class="row">
        <button class="key" id="sign">+/-</button>
        <button class="key" id="percent">%</button>
        <button class="key" id="divide">/</button>
        <button class="key" id="multiply">x</button>
      </div>
      <div class="row">
        <button class="key" id="seven">7</button>
        <button class="key" id="eight">8</button>
        <button class="key" id="nine">9</button>
        <button class="key" id="subtract">-</button>
      </div>
      <div class="row">
        <button class="key" id="four">4</button>
        <button class="key" id="five">5</button>
        <button class="key" id="six">6</button>
        <button class="key" id="add">+</button>
      </div>
      <div class="row">
        <button class="key" id="one">1</button>
        <button class="key" id="two">2</button>
        <button class="key" id="three">3</button>
        <button class="key" id="equals">=</button>
      </div>
      <div class="row">
        <button class="key" id="clear">C</button>
        <button class="key" id="zero">0</button>
        <button class="key" id="dot">.</button>
      </div>
    </div>
  </div>
<script>
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('.key');
  let n1 = 0;
  let n2 = 0;
  let operator = "";
  let result = 0;
  let isOperator = false;
  let isDot = false;

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      let key = e.target.innerText;
      console.log(key);
      // Numbers
      if (key >= '0' && key <= '9') {
        if (isOperator) {
          display.value = key;
          isOperator = false;
        } else {
          if (display.value === '0') {
            display.value = key;
          } else {
            display.value += key;
          }
        }
      }
      // Operators
      if (key === '+' || key === '-' || key === 'x' || key === '/') {
        if (isOperator) {
          isOperator = false;
        } else {
          n1 = Number(display.value);
          operator = key;
          isOperator = true;
        }
      }
      // Clear
      if (key === 'C') {
        display.value = '0';
        isOperator = false;
        isDot = false;
        n1 = 0;
        n2 = 0;
        operator = "";
      }
      // Percent
      if (key === '%') {
        display.value = Number(display.value) / 100;
      }
      // Dot
      if (key === '.') {
        if (!isDot) {
          display.value += key;
          isDot = true;
        }
      }
      // Equals
      if (key === '=') {
        n2 = Number(display.value);
        if (operator === '+') {
          result = n1 + n2;
        } else if (operator === '-') {
          result = n1 - n2;
        } else if (operator === 'x') {
          result = n1 * n2;
        } else if (operator === '/') {
          result = n1 / n2;
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
</script>
</body>
</html>
