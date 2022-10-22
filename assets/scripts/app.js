const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const MULTIPLY = "MULTIPLY";
const DIVIDE = "DIVIDE";

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInputNumber() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
}

function calculateResult(calculationType) {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  let mathOperator;

  if (calculationType === ADD) {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType == SUBTRACT) {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType == MULTIPLY) {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType == DIVIDE) {
    currentResult /= enteredNumber;
    mathOperator = "/";
  } else {
    return;
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", calculateResult.bind(this, ADD));
subtractBtn.addEventListener("click", calculateResult.bind(this, SUBTRACT));
multiplyBtn.addEventListener("click", calculateResult.bind(this, MULTIPLY));
divideBtn.addEventListener("click", calculateResult.bind(this, DIVIDE));
