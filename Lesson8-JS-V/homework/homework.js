// Do not change any of the function names

function createUserClass() {
  function User(options) {
    this.username = options['username'];
    this.name = options['name'];
    this.email = options['email'];
    this.password = options['password'];
    User.prototype.sayHi = function() {
      return ("Hello, may name is " + this.name)
    };
  }
  return User;
}

function addPrototypeMethod(Constructor) {
  Constructor.prototype.sayHi = function() {
    return ('Hello World!');
  };
}

function addReverseString() {
  String.prototype.reverse = function() {
    return this.split('').reverse().join('');
  }
  // add a method to the string constructor's prototype that returns a reversed copy of the string
  // name this method reverse
  // hint:
  // you will need to use 'this' inside of reverse
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  createUserClass: createUserClass,
  addPrototypeMethod: addPrototypeMethod,
  addReverseString: addReverseString,
};
