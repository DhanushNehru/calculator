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
display.value = "0";

function verification(displayText, new_caracter) {
  if (displayText === "" && (new_caracter === '*' || new_caracter === '/')) {
    return displayText;
  }

  if ((displayText[displayText.length - 1] === '/' || displayText[displayText.length - 1] === '*' || 
    displayText[displayText.length - 1] === '+' || displayText[displayText.length - 1] === '-') &&
    (new_caracter === '/' || new_caracter === '*' || new_caracter === '+' || new_caracter === '-')) {
    return displayText;
  }

  return displayText + new_caracter;
}

  

function play() {
  audio = document.querySelector("audio");
  audio.play();
}

Array.prototype.forEach.call(buttons, function (button) {
  button.addEventListener("click", function () {
    play();
    const trimmedButtonValue = button.textContent.trim();
    console.log(" Button text content", trimmedButtonValue);
    if(display.value=="0")
      display.value="";
    if (
      trimmedButtonValue != "=" &&
      trimmedButtonValue != "⌫" &&
      trimmedButtonValue != "C" &&
      trimmedButtonValue != "." &&
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
      trimmedButtonValue != "log2" &&
      trimmedButtonValue != "loge" &&
      trimmedButtonValue != "rand" &&
      trimmedButtonValue != "|x|" &&
      trimmedButtonValue != "⌊x⌋" &&
      trimmedButtonValue != "⌈x⌉" &&
      trimmedButtonValue != "1/x" &&
      trimmedButtonValue != "x 3" &&
      trimmedButtonValue != "sin" &&
      trimmedButtonValue != "cos" &&
      trimmedButtonValue != "tan" &&
      trimmedButtonValue != "sec" &&
      trimmedButtonValue != "cosec" &&
      trimmedButtonValue != "cot" &&
      trimmedButtonValue != "\u221B" &&
      trimmedButtonValue != "sin-1" &&
      trimmedButtonValue != "cos-1" &&
      trimmedButtonValue != "tan-1" &&
      (trimmedButtonValue != "." || decimalPointOkay())
    ) {
      
      display.value = verification(display.value,trimmedButtonValue) ;
    } else if (trimmedButtonValue === "=") {
      equals();
    } else if(trimmedButtonValue === "⌫"){
      backspace()

    }else if (trimmedButtonValue === "C") {
      clear();
    }else if (trimmedButtonValue === "."){
      dot()
    }else if (trimmedButtonValue === "x") {
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
    } else if (trimmedButtonValue === "log2") {
      log2();
    } else if (trimmedButtonValue === "loge") {
      loge();
    } else if (trimmedButtonValue === "rand") {
      rand();
    } else if (trimmedButtonValue === "|x|") {
      abs();
    } else if (trimmedButtonValue === "⌊x⌋") {
      floor();
    } else if (trimmedButtonValue === "⌈x⌉") {
      ceil();
    } else if (trimmedButtonValue === "1/x") {
      reciprocalValue();
    } else if (trimmedButtonValue === "x 3") {
      cube();
    }
    else if (trimmedButtonValue === "sin"){
      calculatesin();
    }
    else if (trimmedButtonValue === "cos"){
      calculatecos();
    }
    else if (trimmedButtonValue === "tan"){
      calculatetan();
    }
    else if (trimmedButtonValue === "sec"){
      calculatesec();
    }
    else if (trimmedButtonValue === "cosec"){
      calculatecosec();
    }
    else if (trimmedButtonValue === "cot"){
      calculatecot();
    }
    else if (trimmedButtonValue === "\u221B"){
      
      calculatecuberoot();
    }
    else if (trimmedButtonValue === "sin-1"){
      calculateisin();
    }
    else if (trimmedButtonValue === "cos-1"){
      calculateicos();
    }
    else if (trimmedButtonValue === "tan-1"){
      calculateitan();
    }

  });
});

// Prevents multiple decimal points from being typed through keyboard
function isNumber(num) {
  if (num === "." && decimalPointOkay()) {
    return true;
  }
  return !isNaN(parseFloat(num)) && isFinite(num);
}

// Checks if there is an operand between the previous decimal point and the current cursor.

function decimalPointOkay() {
  screenNumber = display.value
  if (!screenNumber.includes(".")) {
    return true
  }

  const sinceLastDecimal = screenNumber.substring(
    screenNumber.lastIndexOf(".") + 1,
    screenNumber.length - 1)

  if (
    sinceLastDecimal.includes("+") ||
    sinceLastDecimal.includes("-") ||
    sinceLastDecimal.includes("*") ||
    sinceLastDecimal.includes("/") ||
    sinceLastDecimal.includes("(") ||
    sinceLastDecimal.includes(")") ||
    sinceLastDecimal.includes("^")
    ) {
    return true
  }
  return false
}

// Adding key event listener
document.addEventListener("keydown", (e) => {
  // Check if the currently pressed key is number
  if (isNumber(e.key)) display.value = verification(display.value,e.key);
  ;

  // Check if the currently pressed key is an operator
  if (/^[+\-\*\/\=\(\)\%]*$/.test(e.key)) display.value =verification(display.value,e.key);

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

function dot(){
  let num = display.value.split("");
  let flag = 0;
  for(var i=0;i<num.length;i++){
    if(num[i]==='.'){
      flag=1
    }
  }
  if(flag==1){
    display.value = display.value
  }else{
    display.value += "."
  }
}

function backspace() {
  var letters = /[a-zA-Z]/;
  if( display.value.match(letters)) {
    clear();
  }
  else{
    display.value = display.value.slice(0, -1);
  }
}

function multiply() {
  display.value = verification( display.value,"*");
}

function divide() {
  
  display.value = verification( display.value,"/");
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

function log2() {
  display.value = eval(Math.log2(display.value));
  manageLocalStorage(display.value);
}

function loge() {
  display.value = eval(Math.log(display.value));
  manageLocalStorage(display.value);
}

function rand() {
  display.value = eval(Math.random());
  manageLocalStorage(display.value);
}

function abs() {
  display.value = eval(Math.abs(display.value));
  manageLocalStorage(display.value);
}

function floor() {
  display.value = eval(Math.floor(display.value));
  manageLocalStorage(display.value);
}

function ceil() {
  display.value = eval(Math.ceil(display.value));
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
function calculatesin() {
  display.value=Math.sin((Math.PI/180)*display.value);
}
function calculatecos() {
   display.value=Math.cos((Math.PI/180)*display.value);
}
function calculatetan() {
  display.value=Math.sin((Math.PI/180)*display.value)/Math.cos((Math.PI/180)*display.value);
}
function calculatesec() {
  display.value=1/Math.cos((Math.PI/180)*display.value);
}
function calculatecosec() {
  display.value=1/Math.sin((Math.PI/180)*display.value);
}
function calculatecot() {
  display.value=Math.cos((Math.PI/180)*display.value)/Math.sin((Math.PI/180)*display.value);
}
//cuberoot function 
function calculatecuberoot(){
  console.log('cuberoot');
  display.value = Math.cbrt(display.value);
  manageLocalStorage(display.value);
}
//inverse trigonometry
function calculateisin() {
  const radian=Math.asin(display.value);
  display.value=((180/Math.PI)*radian)
}

function calculateicos() {
  const radian=Math.acos(display.value);
  display.value=((180/Math.PI)*radian)
}

function calculateitan() {
  const radian=Math.atan(display.value);
  display.value=((180/Math.PI)*radian)
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
