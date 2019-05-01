//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = 'Yadier';

//create a number variable, it an be any number
const newNum = 42;

//create a boolean variable
const newBool = true;

//solve the following math problem
const newSubtract = 10 - 5 === 5;

//Solve the following math problem
const newMultiply = 10 * 4 === 40;

//Solve the following math problem:
const newModulo = 21 % 5 === 1;



//In the next 22 problems you will compete the function. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names

function returnString(str) {
    const printout = str;
    return printout;
}

function add(x, y) {
    const sum = x + y;
    return sum;
}

function subtract(x, y) {
    const difference = x - y;
    return difference;
}

function multiply(x, y) {
    const product = x * y;
    return product;
}

function divide(x, y) {
    const quotient = x / y;
    return quotient;
}

function areEqual(x, y) {
    if (x === y) {
        return true;
    }
    return false;
}

function areSameLength(str1, str2) {
    if (str1.length === str2.length) {
        return true;
    }
    return false;
}

function lessThanNinety(num) {
    if (num < 90) {
        return true;
    }
    return false;
}

function greaterThanFifty(num) {
    if (num > 50) {
        return true;
    }
    return false;
}

function getRemainder(x, y) {
    const modulus = x % y;
    return modulus;
}

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

function isOdd(num) {
    if (num % 2 === 1) {
        return true;
    }
    return false;
}

function square(num) {
    const secondPwr = Math.pow(num, 2);
    return secondPwr;
}

function cube(num) {
    const thirdPwr = Math.pow(num, 3);
    return thirdPwr;
}

function raiseToPower(num, exponent) {
    const risen = Math.pow(num, exponent);
    return risen;
}

function roundNumber(num) {
    const rnd = Math.round(num);
    return rnd;
}

function roundUp(num) {
    const rndUp = Math.ceil(num);
    return rndUp;
}

function addExclamationPoint(str) {
    const addExcPnt = str + '!';
    return addExcPnt;
}

function combineNames(firstName, lastName) {
    const bothNames = firstName + ' ' + lastName;
    return bothNames;
}

function getGreeting(name) {
    const hello = 'Hello ' + name + '!';
    return hello;
}

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.

function getRectangleArea(length, width) {
    const area = length * width;
    return area;
}

function getTriangleArea(base, height) {
    const areaTri = (base * height) / 2;
    return areaTri;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
    newString,
    newNum,
    newBool,
    newSubtract,
    newMultiply,
    newModulo,
    returnString,
    areSameLength,
    areEqual,
    lessThanNinety,
    greaterThanFifty,
    add,
    subtract,
    divide,
    multiply,
    getRemainder,
    isEven,
    isOdd,
    square,
    cube,
    raiseToPower,
    roundNumber,
    roundUp,
    addExclamationPoint,
    combineNames,
    getGreeting,
    getRectangleArea,
    getTriangleArea,
};