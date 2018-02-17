// Do not change any of the function names

function multiplyArguments(num, x) {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
 /* if  (num < 1 || num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let x = 2; 2 < num; x++) {
      if (num % x === 0) {
        return false;
      }
    }
    return true;
  }
*/
}
multiplyArguments();


function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if (x === y) {
    return y;
  } else if (x < y) {
    return y;
  } 
  return x;
}
getBiggest(5,6);


function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  const German = 'Guten Tag!';
  const Mandarin = 'Ni Hao!';
  const Spanish = 'Hola!';
  if (language === German) {
  return 'Guten Tag!';
  } else if (language === Mandarin) {
    return 'Ni Hao!';
  } else if (language === Spanish) {
    return 'Hola!';
  }
  
}
greeting('Ni Hao');

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  // otherwise return false
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
}



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
