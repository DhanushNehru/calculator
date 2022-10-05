const display = document.getElementById("screen");
const buttons = Array.from(document.querySelectorAll(".button"));

buttons.forEach(function (button) {
  button.addEventListener("click", function () {

    if (
      button.textContent != "=" &&
      button.textContent != "C" &&
      button.textContent != "x" &&
      button.textContent != "\u00F7" &&
      button.textContent != "\u221A" &&
      button.textContent != "x 2" &&
      button.textContent != "x ²" &&
      button.textContent != "%" &&
      button.textContent != "x^" &&
      button.textContent != "x !" && button.textContent!="Back"
=======
    const trimmedButtonValue = button.textContent.trim();

    console.log(" Button text content", trimmedButtonValue);
    if (
      trimmedButtonValue != "=" &&
      trimmedButtonValue != "C" &&
      trimmedButtonValue != "x" &&
      trimmedButtonValue != "\u00F7" &&
      trimmedButtonValue != "\u221A" &&
      trimmedButtonValue != "x 2" &&
      trimmedButtonValue != "x ²" &&
      trimmedButtonValue != "%" &&
      trimmedButtonValue != "x^" &&
      trimmedButtonValue != "x !" &&
      trimmedButtonValue != "e ˣ" &&
      trimmedButtonValue != "e x"
    ) {
      display.value += trimmedButtonValue;
    } else if (trimmedButtonValue === "=") {
      equals();
    } else if (trimmedButtonValue === "C") {
      clear();
    } else if (trimmedButtonValue === "x") {
      multiply();
    } else if (trimmedButtonValue === "\u00F7") {
      divide();
    } else if (trimmedButtonValue === "<=") {
      backspace();
    } else if (trimmedButtonValue === "%") {
      percent();
    } else if (trimmedButtonValue === "x 2" || trimmedButtonValue === "x ²") {
      square();
    } else if (trimmedButtonValue === "\u221A") {
      squareRoot();
    } else if (trimmedButtonValue === "x^") {
      exponent();
    } else if (trimmedButtonValue === "x !") {
      factorial();
    } else if (trimmedButtonValue === "(") {
      right_bracket();
    } else if (trimmedButtonValue === ")") {
      left_bracket();

    } else if(button.textContent ==="Back"){
      display.value = display.value.slice(0, -1);
=======
    } else if (trimmedButtonValue === "e x" || trimmedButtonValue === "e ˣ") {
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