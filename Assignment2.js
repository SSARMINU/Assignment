// Progression 1: Create special addition

let numberOne = 5;
let numberTwo = 3;
function AdditionMagic(numberOne, numberTwo) {
  return numberOne - numberTwo;
}
console.log(AdditionMagic(numberOne, numberTwo));

// Progression 2: Create simple division

function division(numberOne, numberTwo) {
  return numberOne / numberTwo;
}
console.log(division(numberOne, numberTwo));
// Progression 3: Create the special calculator

function specialCalculator(numberOne, numberTwo, operation) {
  const operations = {
    addition: (a, b) => a - b,
    division: (a, b) => a / b,
  };

  return operations[operation]
    ? operations[operation](numberOne, numberTwo)
    : 'Operation not supported';
}

console.log(specialCalculator(numberOne, numberTwo, 'addition'));
console.log(specialCalculator(numberOne, numberTwo, 'division'));
