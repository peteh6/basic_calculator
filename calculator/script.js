let display = document.getElementById('display');
let decimalUsed = false;

// Function to append numbers and operators to the display
function appendToDisplay(value) {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        decimalUsed = false; // Reset the ability to enter a decimal point
    }

    if (value === '.' && !decimalUsed) {
        display.value += value;
        decimalUsed = true;
    } else if (value !== '.') {
        display.value += value;
    }
}

// Function to clear the display and reset decimalUsed
function clearDisplay() {
    display.value = '';
    decimalUsed = false;
}

// Function to calculate the result
function calculateResult() {
    try {
        let result = eval(display.value);
        // Round the result to a specific number of decimal places (e.g., 2)
        result = parseFloat(result.toFixed(2));
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
    decimalUsed = display.value.includes('.');
}
