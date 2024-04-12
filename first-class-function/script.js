// // Function Statement aka. Function Declaration

// /*
// a();

// b();
// */

// function a() {
//   console.log("a called");
// }

// a();

// // Function Expressions

// var b = function () {
//   console.log("b called");
// };

// b();

// // ------------------------------------------------------------------------------------------------ //
// // statement and expressions difference is hoisting
// // ------------------------------------------------------------------------------------------------ //

// // Anonymous Function - used when the functions are used as values. example: anonymous function as value for a variable
// /* function() {

// }*/

// // Named Function Expression

// var c = function namedFunction() {
//   console.log("c called");
// };

// c();
// // namedFunction(); //error

// // Difference between Parametes & Arguments

// let argument = 1;
// function d(parameter) {
//   return parameter;
// }

// d(argument);

// // First Class Functions
// // passing another function inside a function
// // the ability to use functions as values, can be passed as arguments and can be returned from functions

// // Arrow Functions

// const flight = "LH234";
// const jonas = {
//   name: "Jonas Schemdtmann",
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr." + passenger.name;

//   if (passenger.passport === 24739479284) {
//     console.log("Checked In");
//   } else {
//     alert("Wrong passport");
//   }
// };

// checkIn(flight, jonas);
// console.log("----- test 1 -----");
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = "random" + Math.trunc(Math.random() * 100000000);
// };

// newPassport(jonas);
// console.log("----- test 2 -----");
// console.log(flight);
// console.log(jonas);

// checkIn(flight, jonas);
// console.log("----- test 3 -----");
// console.log(flight);
// console.log(jonas);

// functions accepting callback functions
// 2 generic functions that do simple strings transformations (-- start ---)
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};
// 2 generic functions that do simple strings transformations (--- end ---)

// higher order function (-- start ---)
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by:  ${fn.name}`);
};
transformer("JavaScript is the best!", upperFirstWord);
console.log("---------------------------------------");
transformer("JavaScript is the best!", oneWord);
// higher order function (-- end ---)

console.log("---------------------------------------");
console.log("FUNCTION RETURNING FUNCTIONS");
console.log("---------------------------------------");

const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

const result = greet("Hey");

result();
result("Dennis");
result("Jenica");
greet("Hello")("World");

// //////////////////////////////////

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
  },
};

lufthansa.book(239, "Lorivic Jenica Belen");
lufthansa.book(112, "Dennis Castillo");
console.log("---------------------------------------");
console.log(lufthansa);
console.log("---------------------------------------");
console.log("What if Lufhansa established a new airlines?👇");

const euroWings = {
  airline: "Euro Wings",
  iataCode: "EW",
  bookings: [],
};

const swissAirlines = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

// // using call method
// console.log("---------------------------------------");
// console.log("--- CALL METHOD ---");
// const book = lufthansa.book;
// book.call(euroWings, 212, "Renz Belen");
// book.call(lufthansa, 888, "Maria Victorina");

// // using apply method
// console.log("---------------------------------------");
// console.log("--- APPLY METHOD ---");
// const flightData = [1290, "Laureen Vernadette"];
// book.apply(swissAirlines, flightData);
// // or using the spread operator
// book.call(swissAirlines, ...[flightData]);

// using bind method
// book.call(euroWings, 23, "Sarah Williams");

// const bookEW = book.bind(euroWings);
// console.log(bookEW);
// bookEW(23, "Sarah Test");
lufthansa.book.apply(euroWings, [12, "Happy Anniversary"]);
lufthansa.book.call(euroWings, ...[2024, "Happy New Year"]);
lufthansa.book.call(euroWings, 55, "Sale na");
lufthansa.book.bind(euroWings)(19, "Ollitsac");

const test = {
  fName: "Lorivic Jenica",
  lName: "Castillo",
  testFunction() {
    console.log(`${this.fName} ${this.lName} is my full name`);
  },
};
console.log("----- test 1 -----");
test.testFunction();
console.log("----- test 2 -----");
setTimeout(test.testFunction.bind(test), 1000);

// using bind method with event listeners
// as methods???
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial Application (pres-et)
console.log("----- test 3 -----");
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVat = addTax.bind(null, 0.23);
// console.log(addVat(100));

const addTax = (rate) => {
  return function (value) {
    console.log(`${value + value * rate}`);
  };
};

const whut = addTax(0.23);
whut(100);
whut(200);
