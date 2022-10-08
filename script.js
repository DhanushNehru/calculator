const display = document.getElementById("screen");
const buttons = document.getElementsByClassName("button");
const toggleButton = document.querySelector(".more-toggle-btn");
const otherFuncView = document.querySelector(".other-functions");
const calculatorContainer = document.getElementById("body_screen");
const historyToggleButton = document.querySelector("#showHistoryButton");
const historyDisplay = document.querySelector(".historyDisplay");
const parentTable = document.querySelector("#tableParent");
// by default
otherFuncView.style.display = "none";
historyDisplay.style.display = "none";

function play() {
  audio = document.querySelector("audio");
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

function isNumber(num) {
  if (num === ".") {
    return true;
  }
  return !isNaN(parseFloat(num)) && isFinite(num);
}

// Adding key event listener
document.addEventListener("keydown", (e) => {
  // Check if the currently pressed key is number
  if (isNumber(e.key)) display.value += e.key;

  // Check if the currently pressed key is an operator
  if (/^[+\-\*\/\=\(\)\%]*$/.test(e.key)) display.value += e.key;

  // Check if the currently pressed key is Backspace, then remove last element
  if (e.key === "Backspace") display.value = display.value.slice(0, -1);

  // Check if the currently pressed key is Enter, calculate the value
  if (e.key === "Enter") equals();

  // Check if the currently pressed key is 'c', then clear the value
  if (e.key === "c") clear();
});

function right_bracket() {
  display.value += "(";
}

function left_bracket() {
  display.value += ")";
}

function equals() {
  if (display.value.includes("^")) {
    console.log(" Equals1 ", display.value);
    display.value = display.value.replaceAll("^", "**");
    console.log(" Equals2 ", display.value);
    display.value = eval(display.value);

    // local storage implementation
    manageLocalStorage(eval(display.value));
  }
  // if ((display.value).indexOf("^") > -1) {
  //   var base = (display.value).slice(0, (display.value).indexOf("^"));
  //   var exponent = (display.value).slice((display.value).indexOf("^") + 1);
  //   display.value = eval("Math.pow(" + base + "," + exponent + ")");
  // }
  else {
    try {
      display.value = eval(display.value);
      // local storage implementation
      manageLocalStorage(eval(display.value));
    } catch (error) {
      console.log(error);
      // display.value = "Syntax error !";
      alert("Syntax error! Kindly recheck.");
    }
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
  manageLocalStorage(display.value);
}

function square() {
  display.value = eval(display.value * display.value);
  manageLocalStorage(display.value);
}

function squareRoot() {
  display.value = Math.sqrt(display.value);
  manageLocalStorage(display.value);
}

function percent() {
  display.value = display.value / 100;
  manageLocalStorage(display.value);
}

function exponent() {
  display.value += "^";
  manageLocalStorage(display.value);
}

function exponential() {
  display.value = eval(Math.exp(display.value));
  manageLocalStorage(display.value);
}

function binary() {
  const number = parseInt(display.value);
  const result = number.toString(2);
  display.value = result;
  manageLocalStorage(display.value);
}

function decimal() {
  display.value = parseInt(display.value, 2);
  manageLocalStorage(display.value);
}

function pi() {
  display.value += Math.PI;
  manageLocalStorage(display.value);
}

function log10() {
  display.value = eval(Math.log10(display.value));
  manageLocalStorage(display.value);
}

function reciprocalValue() {
  display.value = Math.pow(display.value, -1);
  manageLocalStorage(display.value);
}

function cube() {
  display.value = eval(display.value * display.value * display.value);
  manageLocalStorage(display.value);
}

// more functions toggle function.

toggleButton.addEventListener("click", () => {
  if (otherFuncView.style.display === "none") {
    toggleButton.innerHTML = "HIDE FUNCTIONS";
    otherFuncView.style.display = "";
  } else {
    otherFuncView.style.display = "none";
    toggleButton.innerHTML = "MORE FUNCTIONS";
  }
});

// manage localStorage

const manageLocalStorage = (storing_value) => {
  if (localStorage.getItem("calHistory") === null) {
    localStorage.setItem(
      "calHistory",
      new Date().toLocaleTimeString() +
        "||" +
        new Date().toLocaleDateString() +
        "||" +
        String(storing_value)
    );
  } else {
    let temp = localStorage.getItem("calHistory");
    temp =
      temp +
      "--" +
      new Date().toLocaleTimeString() +
      "||" +
      new Date().toLocaleDateString() +
      "||" +
      String(storing_value);
    localStorage.setItem("calHistory", temp);
  }
};

// show history with toggle

historyToggleButton.addEventListener("click", () => {
  if (historyDisplay.style.display === "none") {
    historyDisplay.style.display = "";
  } else {
    historyDisplay.style.display = "none";
    return;
  }

  // removing the previous child nodes if available.

  while (parentTable.firstChild) {
    parentTable.removeChild(parentTable.firstChild);
  }

  if (localStorage.getItem("calHistory") === null) {
    alert("Sorry! There is no calculation history.");
    historyDisplay.style.display = "none";
  } else {
    const node = document.createElement("tr");
    node.innerHTML = `<th>Date</th><th>Time</th><th>Final Calculation</th>`;
    parentTable.appendChild(node);
    const History = localStorage.getItem("calHistory").split("--");
    History.forEach((history) => {
      const time = history.split("||")[0];
      const date = history.split("||")[1];
      const value = history.split("||")[2];
      const node = document.createElement("tr");
      node.innerHTML = `<td>${date}</td><td>${time}</td><td>${value}</td>`;
      parentTable.appendChild(node);
    });
  }
});

// on press the clear history button

const clearLocalStorage = () => {
  localStorage.clear("calHistory");
  alert("Calculator history deleted!");
  historyDisplay.style.display = "none";
};

// on press escape button
calculatorContainer.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    display.value = "";
  }
});
