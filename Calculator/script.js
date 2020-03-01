const calculatorScreen = document.querySelectorAll('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)
    });
});

let prevInput = '0';
let calculationOperator = '';
let currentInput = '0';

const inputNumber = (number) => {
    if (currentInput == '0') {
        currentInput = number
    } else {
        currentInput += number
    }
}

