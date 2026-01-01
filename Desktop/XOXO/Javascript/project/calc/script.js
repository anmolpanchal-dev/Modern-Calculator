let operators = ["+", "-", "*", "/"];
let currentDisplay = "";

    function press(value) {
  let lastChar = currentDisplay.slice(-1);

  if (operators.includes(lastChar) && operators.includes(value)) {
    return;
  }
  currentDisplay += value;
  document.getElementById("display").value = currentDisplay;
}

function deleteLast() {
  currentDisplay = currentDisplay.slice(0, -1);
  document.getElementById("display").value = currentDisplay;
}



    function clearDisplay() {
      currentDisplay = "";
      document.getElementById("display").value = "";
    }

    function calculate() {
      try {
        currentDisplay = eval(currentDisplay);
        document.getElementById("display").value = currentDisplay;
      } catch {
        document.getElementById("display").value = "Error";
        currentDisplay = "";
      }
    }