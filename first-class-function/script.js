// Function Statement aka. Function Declaration

/*
a();

b();
*/

function a() {
  console.log("a called");
}

a();

// Function Expressions

var b = function () {
  console.log("b called");
};

b();

// ------------------------------------------------------------------------------------------------ //
// statement and expressions difference is hoisting
// ------------------------------------------------------------------------------------------------ //

// Anonymous Function - used when the functions are used as values. example: anonymous function as value for a variable
/* function() {

}*/

// Named Function Expression

var c = function namedFunction() {
  console.log("c called");
};

c();
// namedFunction(); //error

// Difference between Parametes & Arguments

let argument = 1;
function d(parameter) {
  return parameter;
}

d(argument);

// First Class Functions
// passing another function inside a function
// the ability to use functions as values, can be passed as arguments and can be returned from functions

// Arrow Functions
