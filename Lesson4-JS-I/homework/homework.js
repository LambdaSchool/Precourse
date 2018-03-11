//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = "Hello little chicken" ;

//create a number variable, it an be any number
const newNum = 4 ;

//create a boolean variable
const newBool = true ;

//solve the following math problem
const newSubtract = 10 - 5 === 5;

//Solve the following math problem
const newMultiply = 10 * 4 === 40 ;

//Solve the following math problem:
const newModulo = 21 % 5 === 1 ;



//In the next 22 problems you will compete the function. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names

function returnString(str) {
  //simply return the string provided: str
  return str;
}

function add(x, y) {
  // x and y are numbers
  // add x and y together and return the value
  var add = x + y;
  return add;
}

function subtract(x, y) {
  // subtract y from x and return the value
  var subtract = x - y;
  return subtract;
}

function multiply(x, y) {
  // multiply x by y and return the value
  var multiply = x * y;
  return multiply;
}

function divide(x, y) {
  // divide x by y and return the value
  var divide = x / y;
  return divide;
}

function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  var areEqual = x == y;
  return areEqual;
}

function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  if(str1.length === str2.length) {
    return true;
  } return false;
}

function lessThanNinety(num) {
  // return true if the function argument: num , is less than ninety
  // otherwise return false
  if (num < 90) {
    return true;
  } return false;
}

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  if (num > 50) {
    return true;
  } return false;
}

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  var getRemainder = x % y;
  return getRemainder;
}

function isEven(num) {
  // return true if num is even
  // otherwise return false
  if (num % 2 === 0) {
    return true;
  } return false;
}

function isOdd(num) {
  // return true if num is odd
  // otherwise return false
  if (num % 2 === 0) {
    return false;
  } return true;
}

function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  var square = num * num;
  return square;
}

function cube(num) {
  // cube num and return the new value
  var cube = Math.pow(num,3);
  return cube;
}

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  var raiseToPower = Math.pow(num,exponent);
  return raiseToPower;
}

function roundNumber(num) {
  // round num and return it
  var roundNumber = Math.round(num);
  return roundNumber;
}

function roundUp(num) {
  // round num up and return it
  var roundUp = Math.ceil(num);
  return roundUp;
}

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  return str + "!";
}

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  return firstName + ' ' + lastName;
}

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  return 'Hello' + ' ' + name + '!';
}

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  return length * width;
}

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  return (base * height) / 2;
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
