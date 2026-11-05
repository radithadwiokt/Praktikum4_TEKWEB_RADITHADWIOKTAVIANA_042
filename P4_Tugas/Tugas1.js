
let display = document.getElementById("display");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let newNumber = false;

function addNumber(number) {
    if (display.value === "Error") {
        display.value = "0";
    }

    if (newNumber) {
        display.value = "0";
        newNumber = false;
    }

    if (number === "." && display.value.includes(".")) {
        return;
    }

    if (display.value === "0" && number !== ".") {
        display.value = number;
    } else {
        display.value += number;
    }
}

function chooseOperator(op) {
    firstNumber = display.value;
    operator = op;
    newNumber = true;
}

function calculate() {
    if (operator === "" || newNumber) return;

    secondNumber = display.value;

    let a = parseFloat(firstNumber);
    let b = parseFloat(secondNumber);
    let result;

    if (operator === "+") {
        result = a + b;
    } else if (operator === "-") {
        result = a - b;
    } else if (operator === "*") {
        result = a * b;
    } else if (operator === "/") {
        if (b === 0) {
            display.value = "Error";
            operator = "";
            newNumber = true;
            return;
        }
        result = a / b;
    }

    display.value = Number(result.toPrecision(12)).toString();

    operator = "";
    newNumber = true;
}

function clearDisplay() {
    display.value = "0";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    newNumber = false;
}

function deleteNumber() {
    if (newNumber || display.value === "Error") {
        display.value = "0";
        newNumber = false;
        return;
    }

    display.value = display.value.slice(0, -1);

    if (display.value === "" || display.value === "-") {
        display.value = "0";
    }
}
