function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');

const resultDisplay = document.getElementById('calculation-result');

addButton.addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    const result = add(number1, number2);
    resultDisplay.textContent = result;
});

subtractButton.addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    const result = subtract(number1, number2);
    resultDisplay.textContent = result;
});

