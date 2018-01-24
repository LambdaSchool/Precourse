
//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
let newString = 'Hello';

//create a number variable, it an be any number
let newNum = 4;

//create a boolean variable
let newBool = true;

//solve the following math problem
let newSubtract = 5 - 0 === 5;

//Solve the following math problem
let newMultiply = 10 * 4 === 40;

//Solve the following math problem:
let newModulo = 21 % 5 === 1;



//In the next 22 problems you will compete the function. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names

function returnString(str) {
  return str;
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function areEqual(x, y) {
  return x === y;
}

function areSameLength(str1, str2) {
  return str1.length === str2.length ? true : false;
}

function lessThanNinety(num) {
  return num < 90 ? true : false;
}

function greaterThanFifty(num) {
  return num > 50 ? true : false;
}

function getRemainder(x, y) {
  return x % y;
}

function isEven(num) {
  return num % 2 ? false : true;
}

function isOdd(num) {
  if (num % 2) {
    return true;
  } else {
    return false;
  }
}

function square(num) {
  return num * num;
}

function cube(num) {
  return Math.pow(num, 3);
}

function raiseToPower(num, exponent) {
  return Math.pow(num, exponent);
}

function roundNumber(num) {
  return Math.round(num);
}

function roundUp(num) {
  return Math.ceil(num);
}

function addExclamationPoint(str) {
  return `${str}!`;
}

function combineNames(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function getGreeting(name) {
  return `Hello ${name}!`;
}

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.

function getRectangleArea(length, width) {
  return length * width;
}

function getTriangleArea(base, height) {
  return .5 * base * height;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  newString: newString,
  newNum: newNum,
  newBool: newBool,
  newSubtract: newSubtract,
  newMultiply: newMultiply,
  newModulo: newModulo,
  returnString: returnString,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea
};
