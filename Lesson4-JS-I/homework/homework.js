//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = dog ;

//create a number variable, it an be any number
const newNum = 18 ;

//create a boolean variable
const newBool = true ;

//solve the following math problem
const newSubtract = 10 - 5 === 5;

//Solve the following math problem
const newMultiply = 10 * 4 === 40 ;

//Solve the following math problem:
const newModulo = 21 % 5 === 4.2 ;



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
  // constr sum = x + y;
    return sum
}

function subtract(x, y) {
  // subtract y from x and return the value
  // constr difference = y - x;
  return difference;
}

function multiply(x, y) {
  // multiply x by y and return the value
  // const sum = x * y
  return sum
}

function divide(x, y) {
  // divide x by y and return the value
  // const product = x / y;
  return product;
}

function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  // const equal
    if (x = y) {
      return true (x = y);
    }
      return false (x > y);
}
const areEqual

function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  // cont areSameLength = 'str1', 'str2';
    if (str1, str2) {
      return true (str1, str2);
    }
    return false (str1 = str2);
}

function lessThanNinety(num) {
  // return true if the function argument: num , is less than ninety
  // otherwise return false
  // if (num < ninety) {
  return true (num < ninety);
  
  return false (num > ninety);
  }

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  // if (num > fifty)
  return true (num > fifty);
  
  return false (num < fifty);
}

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  // const remainder = (x/y);
  return remainder;
}

function isEven(num) {
  // return true if num is even
  // otherwise return false
  // if (num % 4 == 0);
  return true (num % 4 == 0);

  return false (num % 4 == 0);

}

function isOdd(num) {
  // return true if num is odd
  // otherwise return false
  // if (num % 5 == 0);
  return true (num % 5 == 0);
  return false (num % 5 == 0);
}

function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  // math.pow (num,num)
  return value;
}

function cube(num) {
  // cube num and return the new value
  // int square = Math.pow (num, 3);
  return value;
}

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  // Math.pow(num, exponent)
}

function roundNumber(num) {
  // round num and return it
  // Math.round (num);
  return roundNumber;
}

function roundUp(num) {
  // round num up and return it
  // Math.ceil (num);
  return roundUp
}

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // 
  
}

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // return ('Lambda' + 'School')
}

function getGreeting(Sam) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // function logsgetGreeting(Sam)
        console.log('Sam' + 'Hello Sam!');
}

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  // const getRectangleArea = (length, width);
  return getRectangleArea
}

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  // const getTriangleArea = (base, height);
  return getTrianglearea; 
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
