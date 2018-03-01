// Do not change any of the function names

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  if(arguments === 0) {
    return 0;
  } else {
    return arguments;
  }
}

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if(x === y) {
    return x || y;
  } else if(y > x) {
    return y;
  } else {
    return x;
  }
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  if(language === 'German') {
    return 'Guten Tag!';
  // language: 'Mandarin' -> 'Ni Hao!'  
  } else if(language === 'Mandarin') {
    return 'Ni Hao!';
  // language: 'Spanish' -> 'Hola!'  
  } else if(language === 'Spanish') {
    return 'Hola!';
   // if language is undefined return 'Hello!'  
  } else {
    return 'Hello!';
  }
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  if(num === 10 || num === 5) {
    return true;
    // otherwise return false  
  } else {
    return false;
  }

}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  if(num < 50 && num > 20) {
    return true;
   // otherwise return false  
  } else {
    return false;
  }
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  if(Number.isInteger(num)) {
    return true;
  }
  return false;
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  if(num %3 === 0) {
    return 'fizz';
  // if num is divisible by 5 return 'buzz'    
  } else if(num %5 === 0) {
    return 'buzz';
  // if num is divisible by 3 & 5 return 'fizzbuzz'  
  } else if(num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  // otherwise return num    
  } else {
    return num;
  }
}

function isPrime(num) {
  // return true if num is prime.
  if(num % num === 1 && num % 1 === 0) {
    return true;
  } else {
    return false;
  }
}
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers



// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyArguments,
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
};