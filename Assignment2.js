function specialAddition(numberOne, numberTwo) {
  if (numberOne < 0 || numberTwo < 0) {
    return 'Negative numbers are not allowed';
  }
  return numberOne - numberTwo;
}

function simpleDivision(numberOne, numberTwo) {
  if (numberTwo === 0) {
    return 'Not a number';
  } else if (numberTwo > numberOne) {
    return 'Cannot divide a smaller number by a larger number';
  } else if (numberTwo < 0 || numberOne < 0) {
    return 'Negative numbers are not allowed';
  }
  return numberOne / numberTwo;
}

function specialCalculator(numberOne, numberTwo, operation) {
  if (operation === specialAddition) {
    return specialAddition(numberOne, numberTwo);
  } else if (operation === simpleDivision) {
    return simpleDivision(numberOne, numberTwo);
  }
  return 'Operation not supported';
}
