// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
if(x > y) {
  return x;
}
else if(x > y) {
  return y;
}
else if(x === y); {
  return x;
}
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
if(language === German) {
console.log('Guten Tag!');}
else if(language === Mandarin) {
console.log('Ni Hao!');}
else if(language === Spanish) {
console.log('Hola!');}
else if(language === undefined) {
console.log('Hello!');}
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
if(num === 10 || num === 5) {
  console.log('true');
}  else {
    console.log('false');
  }

}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  // otherwise return false
if(50 > num && num > 20) {
  console.log('true');
}
else {
console.log('false');
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
if(num === Math.floor(num)) {
  console.log('true');
}
else {
  console.log('false');
}
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
if((num % 3) === 0 && (num % 5) === 0) {
  console.log('fizzbuzz');
}
else if((num % 3) === 0 && (num % 5) !== 0) {
  console.log('fizz');
}
else if((num % 3) !== 0 && (num % 5) === 0) {
  console.log('buzz');
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
  function isPrime(num) {
    for (c=2; c<=n - 1; c++) {
      if(num % c === 0) {
        return false;
      }
      return true;
    }
  }
}



// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
};
