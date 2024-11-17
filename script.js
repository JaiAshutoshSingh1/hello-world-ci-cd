// script.js

// Append value to the display
function appendValue(value) {
    const display = document.getElementById('display');
    if (display.value === "0" || display.value === "") {
        display.value = value; // Replace initial "0"
    } else {
        display.value += value;
    }
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').value = "";
}

// Perform an operation
function performOperation(operator) {
    const display = document.getElementById('display');
    display.value += ` ${operator} `;
}

// Calculate the result
function calculate() {
    const display = document.getElementById('display');
    try {
        // Evaluate the input using JavaScript's eval
        const result = eval(display.value.replace('÷', '/').replace('×', '*'));
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}
