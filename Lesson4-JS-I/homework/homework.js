//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = "boredom";

//create a number variable, it an be any number
const newNum = 4;

//create a boolean variable
const newBool = yes;

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
return str;
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
  const multiple = x * y;
  return multiple;
}

function divide(x, y) {
  const product = x / y;
  return product;
}

function areEqual(x, y) {
  if (x == y)
  {
    return true;
  }
  return false;
}

function areSameLength(str1, str2) {
  if (str1 == str2)
  {
    return true;
  }
  return false;
}

function lessThanNinety(num) {
  if (num <= 90)
  {
    return true;
  }
  return false;
}

function greaterThanFifty(num) {
  if (num => 50)
  {
    return true;
  }
  return false;
}

function getRemainder(x, y) {
 const remainder = x % y;
 return remainder;
}

function isEven(num) {
  if (num % 2 === 0)
  {
    return true;
  }
  return false;
}

function isOdd(num) {
  if (num % 2 === 1)
  {
    return true;
  }
  return false;
}

function square(num) {
  squared = Math.pow(num, 2);
  return squared;
}

function cube(num) {
  cubed = Math.pow(num, 3);
  return cubed;
}

function raiseToPower(num, exponent) {
  power = Math.pow(num, exponent);
  return power;
}

function roundNumber(num) {
  roundedNum = Math.round(num);
  return roundedNum;
}

function roundUp(num) {
  roundedUpNum = Math.ceil(num);
  return roundedUpNum;
}

function addExclamationPoint(str) {
  
  console.log(str + '!');
}

function combineNames(firstName, lastName) {

  console.log(firstName + ' ' + lastName);
}

function getGreeting(name) {

  console.log('Hello ' + name + "!")
}

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {

  return width * length;
}

function getTriangleArea(base, height) {

  return 0.5(base * height);
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
