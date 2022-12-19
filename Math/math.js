setInterval(function () {
  document.getElementById("numrange").innerHTML = minimum + " - " + maximum;
  minimum = parseInt(document.getElementById("minimum").value);
  maximum = parseInt(document.getElementById("maximum").value);
  usum = document.getElementById("usum").value;
  document.getElementById("points").innerHTML = points
  document.getElementById("strike").innerHTML = strike
});


document.getElementById("maximum").value = 10
document.getElementById("minimum").value = 0

function getRndInteger(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

var operation = "";

function adition() {
  operation = "+";
  num1 = getRndInteger(minimum, maximum);
  num2 = getRndInteger(minimum, maximum);
  document.getElementById("op").innerHTML = num1 + operation + num2;

}

function subtraction() {
  operation = "-";
  num1 = getRndInteger(minimum, maximum);
  num2 = getRndInteger(minimum, maximum);
  document.getElementById("op").innerHTML = num1 + operation + num2;
}

function multiplication() {
  operation = "*";
  num1 = getRndInteger(minimum, maximum);
  num2 = getRndInteger(minimum, maximum);
  document.getElementById("op").innerHTML = num1 + operation + num2;
}

function division() {
  operation = "/";
  num1 = getRndInteger(minimum, maximum);
  num2 = getRndInteger(minimum, maximum);
  document.getElementById("op").innerHTML = num1 + operation + num2;
}

function check() {
  if (operation == "+") {
    sum = num1 + num2;
  }

  if (operation == "-") {
    sum = num1 - num2;
  }

  if (operation == "*") {
    sum = num1 * num2;
  }

  if (operation == "/") {
    sum = num1 / num2;
  }

  if (sum == usum) {
    document
      .getElementById("usum")
      .setAttribute("style", "border:3px green solid");
    setTimeout(300);
    num1 = getRndInteger(minimum, maximum);
    num2 = getRndInteger(minimum, maximum);
    document.getElementById("op").innerHTML = num1 + operation + num2;
    document.getElementById("usum").value = "";
    points = points+1
    strike = strike+1
    if(strike == 3){
      points = points+2
    }
    
  }
  if (sum != usum && document.getElementById("usum").value != "") {
    document
      .getElementById("usum")
      .setAttribute("style", "border:3px red solid");
    setTimeout(300);
    num1 = getRndInteger(minimum, maximum);
    num2 = getRndInteger(minimum, maximum);
    document.getElementById("op").innerHTML = num1 + operation + num2;
    document.getElementById("usum").value = "";
    points = points-1
    strike = 0
  }
}


points = 0
strike = 0




