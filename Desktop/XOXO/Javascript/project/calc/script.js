let currentDisplay = "";

    function press(value) {
      currentDisplay += value;
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