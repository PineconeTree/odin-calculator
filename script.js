let leftOperand = 0;
let rightOperand = 0;
let operator = "";

function main() {}

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(theOperator, theLeftOperand, theRightOperand) {
	switch (theOperator) {
		case "+":
			return add(theLeftOperand, theRightOperand);
		case "-":
			return subtract(theLeftOperand, theRightOperand);
		case "*":
			return multiply(theLeftOperand, theRightOperand);
		case "/":
			if (theRightOperand === 0) {
				alert("You can't divide by zero!");
				return null;
			}
			return divide(theLeftOperand, theRightOperand);
		default:
			return null;
	}
}

function buttonUpdate(event) {
	const callingButton = event.target.id;
	console.log(callingButton);
	switch (callingButton) {
		case "zero":
			updateOperand(0);
			break;
		case "one":
			updateOperand(1);
			break;
		case "two":
			updateOperand(2);
			break;
		case "three":
			updateOperand(3);
			break;
		case "four":
			updateOperand(4);
			break;
		case "five":
			updateOperand(5);
			break;
		case "six":
			updateOperand(6);
			break;
		case "seven":
			updateOperand(7);
			break;
		case "eight":
			updateOperand(8);
			break;
		case "nine":
			updateOperand(9);
			break;
		case "decimal":
		case "clear":
			leftOperand = 0;
			rightOperand = 0;
			operator = "";
			displayUpdate();
			break;
		case "add":
			if (operator === "") {
				operator = "+";
                displayClear();
			} else {
				leftOperand = operate(operator, leftOperand, rightOperand);
				operator = "";
				rightOperand = 0;
				displayUpdate();
				checkLength();
				operator = "+";
			}
			break;
		case "subtract":
			if (operator === "") {
				operator = "-";
                displayClear();
			} else {
				leftOperand = operate(operator, leftOperand, rightOperand);
				operator = "";
				rightOperand = 0;
				displayUpdate();
				checkLength();
				operator = "-";
			}
			break;
		case "multiply":
			if (operator === "") {
				operator = "*";
                displayClear();
			} else {
				leftOperand = operate(operator, leftOperand, rightOperand);
				operator = "";
				rightOperand = 0;
				displayUpdate();
				checkLength();
				operator = "*";
			}
			break;
		case "divide":
			if (operator === "") {
				operator = "/";
                displayClear();
			} else {
				leftOperand = operate(operator, leftOperand, rightOperand);
				operator = "";
				rightOperand = 0;
				displayUpdate();
				checkLength();
				operator = "/";
			}
			break;
		case "equals":
			if (operator !== "") {
				leftOperand = operate(operator, leftOperand, rightOperand);
				let originalOperator = operator;
				operator = "";
				rightOperand = 0;
				displayUpdate();
				checkLength();
				operator = originalOperator;
			}
			break;
		case "plusMinus":
			if (operator === "") {
				leftOperand = -leftOperand;
			} else {
				rightOperand = -rightOperand;
			}
			displayUpdate();
			checkLength();
			break;
		default:
			return null;
	}
}

function displayClear() {
    const display = document.querySelector("#display");
    display.textContent = "0";
}

function displayUpdate() {
	const display = document.querySelector("#display");
	if (operator === "") {
		display.textContent = leftOperand;
	} else {
		display.textContent = rightOperand;
	}
}

function updateOperand(callingID) {
	const display = document.querySelector("#display");
	if (display.textContent.startsWith("-")) {
		if (operator === "") {
			leftOperand = leftOperand * 10 + parseInt(callingID) * -1;
			displayUpdate();
			checkLength();
		} else {
			rightOperand = rightOperand * 10 + parseInt(callingID) * -1;
			displayUpdate();
			checkLength();
		}
	} else {
		if (operator === "") {
			leftOperand = leftOperand * 10 + parseInt(callingID);
			displayUpdate();
			checkLength();
		} else {
			rightOperand = rightOperand * 10 + parseInt(callingID);
			displayUpdate();
			checkLength();
		}
	}
}

function checkLength() {
	const display = document.querySelector("#display");
	if (display.textContent.length > 14) {
		if (display.textContent.startsWith("-")) {
			display.textContent =
				display.textContent.slice(0, 2) + display.textContent.slice(3);
		} else {
			display.textContent = display.textContent.slice(1);
		}
		if (operator === "") {
			leftOperand = parseInt(display.textContent);
		} else {
			rightOperand = parseInt(display.textContent);
		}
	}
}

document.querySelectorAll("button").forEach((button) => {
	button.addEventListener("click", buttonUpdate);
});

main();
