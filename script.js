var display = document.getElementById("screen");
var buttons = document.getElementsByClassName("button");

Array.prototype.forEach.call(buttons, function (button) {
  button.addEventListener("click", function () {
    console.log(" Button text content", button.textContent.trim());
    if (
      button.textContent.trim() != "=" &&
      button.textContent.trim() != "C" &&
      button.textContent.trim() != "x" &&
      button.textContent.trim() != "\u00F7" &&
      button.textContent.trim() != "\u221A" &&
      button.textContent.trim() != "x 2" &&
      button.textContent.trim() != "x ²" &&
      button.textContent.trim() != "%" &&
      button.textContent.trim() != "x^" &&
      button.textContent.trim() != "x !" &&
      button.textContent.trim() != "e ˣ" &&
      button.textContent.trim() != "e x"
    ) {
      display.value += button.textContent.trim();
    } else if (button.textContent.trim() === "=") {
      equals();
    } else if (button.textContent.trim() === "C") {
      clear();
    } else if (button.textContent.trim() === "x") {
      multiply();
    } else if (button.textContent.trim() === "\u00F7") {
      divide();
    } else if (button.textContent.trim() === "<=") {
      backspace();
    } else if (button.textContent.trim() === "%") {
      percent();
    } else if (button.textContent.trim() === "x 2" || button.textContent.trim() === "x ²") {
      square();
    } else if (button.textContent.trim() === "\u221A") {
      squareRoot();
    } else if (button.textContent.trim() === "x^") {
      exponent();
    } else if (button.textContent.trim() === "x !") {
      factorial();
    } else if (button.textContent.trim() === "(") {
      right_bracket();
    } else if (button.textContent.trim() === ")") {
      left_bracket();
    } else if (button.textContent.trim() === "e x" || button.textContent.trim() === "e ˣ") {
      exponential();
    }
  });
});

// Adding key event listener
document.addEventListener("keydown", (e) => {
  // Check if the currently pressed key is number
  if(/^[0-9]/.test(parseInt(e.key))) display.value += parseInt(e.key);

  // Check if the currently pressed key is an operator
  if(/^[+\-\*\/\=\(\)\%]*$/.test(e.key)) display.value +=  e.key;

  // Check if the currently pressed key is Backspace, then remove last element
  if(e.key === 'Backspace') display.value = display.value.slice(0, -1)

  // Check if the currently pressed key is Enter, calculate the value
  if(e.key === 'Enter') equals();

  // Check if the currently pressed key is 'c', then clear the value
  if(e.key === 'c') clear()
});

function right_bracket() {
  display.value += "(";
}

function left_bracket() {
  display.value += ")";
}

function syntaxError() {
  if (
    eval(display.value) == SyntaxError ||
    eval(display.value) == ReferenceError ||
    eval(display.value) == TypeError
  ) {
    display.value == "Syntax Error";
  }
}

function equals() {
  if (display.value.includes("^")) {
    console.log(" Equals1 ", display.value);
    display.value = display.value.replaceAll("^", "**");
    console.log(" Equals2 ", display.value);
    display.value = eval(display.value);
  }
  // if ((display.value).indexOf("^") > -1) {
  //   var base = (display.value).slice(0, (display.value).indexOf("^"));
  //   var exponent = (display.value).slice((display.value).indexOf("^") + 1);
  //   display.value = eval("Math.pow(" + base + "," + exponent + ")");
  // }
  else {
    display.value = eval(display.value);
    //checkLength()
    syntaxError();
  }
}

function clear() {
  display.value = "";
}

function backspace() {
  display.value = display.value.substring(0, display.value.length - 1);
}

function multiply() {
  display.value += "*";
}

function divide() {
  display.value += "/";
}

function factorial() {
  var number = 1;
  if (display.value === 0) {
    display.value = "1";
  } else if (display.value < 0) {
    display.value = "undefined";
  } else {
    var number = 1;
    for (var i = display.value; i > 0; i--) {
      number *= i;
    }
    display.value = number;
  }
}

function square() {
  display.value = eval(display.value * display.value);
}

function squareRoot() {
  display.value = Math.sqrt(display.value);
}

function percent() {
  display.value = display.value / 100;
}

function exponent() {
  display.value += "^";
}

function exponential() {
  display.value = eval(Math.exp(display.value));
}