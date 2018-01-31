
//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
let newString = 'string variable' ;

//create a number variable, it an be any number
let newNum = 7 ;

//create a boolean variable
let newBool = true ;

//solve the following math problem
let newSubtract = 10 - 5 === 5;

//Solve the following math problem
let newMultiply = 10 * 4 === 40 ;

//Solve the following math problem:
let newModulo = 21 % 5 === 1 ;



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
  let sum = x + y;
  return sum;
}

function subtract(x, y) {
  // subtract y from x and return the value
  let sub = x - y;
  return sub;

}

function multiply(x, y) {
  // multiply x by y and return the value
  let mult = x * y;
  return mult;
}

function divide(x, y) {
  // divide x by y and return the value
  let div = x / y;
  return div;
}

function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  if (x === y){
	return true;
}

	return false;
}

function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
 
  if (str1.length === str2.length){
	return true;
}
	else
    return false;
}

function lessThanNinety(num) {
  // return true if the function argument: num , is less than ninety
  // otherwise return false
  if (num < 90){
	return true;
  }

  else
	return false;
}

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  if (num > 50){
	return true;
  }

  else
	return false;
}

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  let remain = x % y;
  return remain;
}

function isEven(num) {
  // return true if num is even
  // otherwise return false
  if ((num % 2) === 0){
	return true;
  }

  else
	return false;
}

function isOdd(num) {
  // return true if num is odd
  // otherwise return false
  if ((num % 2 === 1)){
	return true;
  }

  else
	return false;
}
function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  let newsqr = num * num;
  return newsqr;
}

function cube(num) {
  // cube num and return the new value
  let newcube = num * num * num;
  return newcube;
}

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  let rtp = Math.pow(num, exponent);
  return rtp;
}

function roundNumber(num) {
  // round num and return it
  let newrn = Math.round(num);
  return newrn;
}

function roundUp(num) {
  // round num up and return it
  let newru = Math.ceil(num);
  return newru;
}

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  let newstr = str + '!';
  return newstr;
}

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  let combnam = firstName + ' ' + lastName;
  return combnam;
}

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  let getgreet = 'Hello ' + name + '!';
  return getgreet;
}

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  let retarea = length * width;
  return retarea;
}

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  let triarea = (base * height) / 2;
  return triarea;
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