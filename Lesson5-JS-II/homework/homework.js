// Do not change any of the function names

function multiplyArguments() {
  
	let product = 1;
  
	for (let i = 0; i < arguments.length; i++) {
    product = product * arguments[i];
  }
  
  if(arguments.length === 0) {
	return 0;
  } else {
  return product;
  }
}

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if(x > y) {
    return x;
} else if (y > x) {
    return y;
  } else if (x === y) {
    return x || y;
  }
}


function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  if (language === 'German') {
    return 'Guten Tag!';
  }
  else if (language === 'English') {
    return 'Hello!';
  }
  else if (language === 'Spanish') {
    return 'Hola!';
  }
  else {
    return 'Hello!';
  }
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  if(num === 10 || num === 5) {
    return true; 
  }
  else {
    return false;
  }
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  // otherwise return false
  if(num < 50 && num > 20) {
    return true;
  }
  else {
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
  if (num === Math.floor(num)) {
    return true;
  }
  else {
    return false;
  }
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  }
  else if (num % 3 === 0) {
    return 'fizz';
  }
  else if (num % 5 === 0) {
    return 'buzz';
  }
  else {
    return num;
  }
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
 if (num === 1 || num === 0) {
   return false;
 }
 for (let i = 2; i < num; i++) {
  if(num % i === 0){
    return false;
  }
 }
 return true;
}
// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyArguments: multiplyArguments,
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
};
