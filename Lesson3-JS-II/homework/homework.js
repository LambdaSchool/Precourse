// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  return Math.max(x,y);
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  switch (language) {
    case 'English':
      return 'Hello!';
    
    case 'Spanish':
      return 'Hola!';
    
    case 'German':
      return 'Guten Tag!';
    
    default:
      return 'Hello!';
  }
 }

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  if (num === 10 || num === 5){
    return true;
  } else {
    return false;
  }
}
  // return true if num is 10 or 5
  // otherwise return false

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  if(num < 50 && num > 20) {
    return true;
 }else {
   return false;
 }
 }
 isInRange(50);

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  if (num === Math.floor(num)){
    return true;
  } else {
    return false;
 }
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if (num % 3 === 0 && num % 5 === 0){
    return 'fizzbuzz';
  }else if (num % 3 === 0){
    return 'fizz';
  }else if (num % 5 === 0){
    return 'buzz';
  }else if (num % 3 === 0 && num % 5 === 0){
    return 'fizzbuzz';
  }else return num;
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  if(num < 2) {
    return false;
 }

 for(let i = 2; i < num; i++) {
  if(num % i === 0) {
      return false;
  } else {
    return true;
  }
}
}

function returnFirst(arr) {
  // return the first item from the array
    if (Array.isArray(arr)) {
      return (arr[0]);
    }
  }

function returnLast(arr) {
  // return the last item of the array
  if (Array.isArray(arr)) {
    return (arr[arr.length - 1]);
  }
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  for (var i=0; i < arr.length; i++){
    arr[i] += 1;
}
return arr;
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr.push(item);
    return arr;
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);
    return arr;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  var newString = words.join(' ');
    return newString;
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  return arr.indexOf(item) > -1;
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  var x = numbers.reduce((total, amount) => total + amount);
  return x;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  var x = testScores[0];
    for (var y=1; y < testScores.length; y++) {
        x += testScores[y];
    }
    return x / testScores.length; 
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  var largestNum = Math.max.apply(Math, numbers);
    return largestNum;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
