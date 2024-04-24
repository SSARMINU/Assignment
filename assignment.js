const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const numberArray = [12,324,213,4,2,3,45,4234];
const myArray = [11, 34, 20, 5, 53, 16];


//Progression 1
const modifiedFoods = foods.slice(1, -1);

console.log(modifiedFoods);


//Progression 2

function spliced(foods) {
    foods.splice(2, 0, 'noodles', 'icream');

    return foods;
}   
console.log(spliced(foods));

//Progression 3

function isEven(number) {
    return number % 2 === 0;
}

function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function checkNumber(numberArray, operation) {
    if (operation === 'even') {
        return numberArray.filter(isEven);
    } else if (operation === 'prime') {
        return numberArray.filter(isPrime);
    } else {
        return [];
    }
}

console.log(checkNumber(numberArray, 'even'));
console.log(checkNumber(numberArray, 'prime'));


//Progress 4
let remarr;
function reject(numberarr){
     remarr= numberArray.filter(element => !numberarr.includes(element));
     return remarr;
}
let number1;
function nonPrime(numberArray){
    number1= numberArray.filter(number=>isPrime(number));
    return reject(number1);
    
}

console.log(nonPrime(numberArray));

//Progress 5
const isEvenUsingLambda = number => number % 2 === 0;

//Progress 6

function findSquareOfNumbers1(arr) {
    return arr.map(number => number * number);
}

console.log(findSquareOfNumbers1(myArray));

//Progress 7

function multiply(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}

console.log(multiply(myArray));

function findSquareOfNumbers(arr) {
    const squares = arr.reduce((accumulator, currentValue) => {
        accumulator.push(currentValue * currentValue);
        return accumulator;
    }, []);
    const sumOfSquares = squares.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return sumOfSquares;
}
console.log(findSquareOfNumbers(myArray));