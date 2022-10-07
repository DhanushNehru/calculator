const display = document.getElementById("screen");
const buttons = document.getElementsByClassName("button");
const toggleButton = document.querySelector(".more-toggle-btn");
const otherFuncView = document.querySelector(".other-functions");
const calculatorContainer = document.getElementById("body_screen");

// by default
otherFuncView.style.display = "none";

function play(){
  audio = document.querySelector('audio');
  audio.play();
}

Array.prototype.forEach.call(buttons, function (button) {
  button.addEventListener("click", function () {
    play();
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
      trimmedButtonValue != "e x" &&
      trimmedButtonValue != "bin" &&
      trimmedButtonValue != "dec" &&
      trimmedButtonValue != "pi" &&
      trimmedButtonValue != "log" &&
      trimmedButtonValue != "log10" &&
      trimmedButtonValue != "1/x" &&
      trimmedButtonValue != "x 3"
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
    } else if (trimmedButtonValue === "e x" || trimmedButtonValue === "e ˣ") {
      exponential();
    } else if (trimmedButtonValue === "bin") {
      binary();
    } else if (trimmedButtonValue === "dec") {
      decimal();
    } else if (trimmedButtonValue === "pi") {
      pi();
    } else if (trimmedButtonValue === "log10") {
      log10();
    } else if (trimmedButtonValue === "1/x") {
      reciprocalValue();
    } else if (trimmedButtonValue === "x 3") {
      cube();
    }
  });
});

// Adding key event listener
document.addEventListener("keydown", (e) => {
  // Check if the currently pressed key is number
  if (isInteger(e.key)) display.value += parseInt(e.key);

  // Check if the currently pressed key is an operator
  if (/^[+\-\*\/\=\(\)\%]*$/.test(e.key)) display.value += e.key;

  // Check if the currently pressed key is Backspace, then remove last element
  if (e.key === 'Backspace') display.value = display.value.slice(0, -1)

  // Check if the currently pressed key is Enter, calculate the value
  if (e.key === 'Enter') equals();

  // Check if the currently pressed key is 'c', then clear the value
  if (e.key === 'c') clear()
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

function binary() {
  const number = parseInt(display.value);
  const result = number.toString(2);
  display.value = result;
}

function decimal() {
  display.value = parseInt(display.value, 2);
}

function pi() {
  display.value += Math.PI;
}

function log10() {
  display.value = eval(Math.log10(display.value));
}

function reciprocalValue() {
  display.value = Math.pow(display.value, -1);
}

function cube() {
  display.value = eval(display.value * display.value * display.value);
}

// more functions toggle function.

toggleButton.addEventListener("click", () => {
  if (otherFuncView.style.display === "none") {
    toggleButton.innerHTML = "Hide functions:"
    otherFuncView.style.display = "";
  } else {
    otherFuncView.style.display = "none";
    toggleButton.innerHTML = "More functions:"
  }
})


// on press escap button 
calculatorContainer.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    display.value = '';   
  } 
});