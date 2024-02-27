"use strict";
// function getAge() {
//   if (18 === 0) {
//     var jenAge = 18;
//   } else {
//     var jenAge = 28;
//   }
//   console.log("function: " + jenAge);
// }

// getAge();
// /////////////////

// const myName = "Jonas";

// function first() {
//   const age = 30;

//   if (age >= 30) {
//     const decade = 3;
//     var millenial = true;
//   }

//   function second() {
//     console.log(millenial  );
//     const job = "teacher";
//     console.log(`${myName} is a ${age}-old ${job}.`);
//   }

//   second();
// }

// first();
// /////////////////

// const jen = {
//   fName: "Lorivic Jenica",
//   lName: "Belen",
//   age: 28,
//   ageAgain: this.age,
// };

// console.log(jen.ageAgain);

// function foo() {
//   console.log(this);
// }
// foo();
// const arr = [1, 2, 3, 4];

// let [one, , three] = arr;

// [one, three] = [three, one];

// console.log(one, three);

//  callback
// sequence control
// function myDisplayer1(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// function myCalculator1(num1, num2) {
//   let sum = num1 + num2;
//   myDisplayer1(sum);
// }

// myCalculator1();

// with callback

// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }

// myCalculator(1, 0, myDisplayer);

// const myArray = [1, 2, 3, 4, 5, 6];

// function myFunction() {
//   const myNewArray = [];

//   for (const x of myArray) {
//     if (x % 2 === 0) {
//       myNewArray.push(x);
//     }
//   }
//   return myNewArray;
// }

// console.log(myFunction());

// set interval

// setInterval(showTime, 1000);

// function showTime() {
//   let date = new Date();
//   let timeSeconds = date.getSeconds();
//   document.getElementById("demo").innerHTML -= 1;
// }

// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 0);

// console.log("3");

// 1
// 3
// 2

// setTimeout(function () {
//   myFunction("I love you");
// }, 3000);

// function myFunction(value) {
//   document.getElementById("demo").innerHTML = value;
// }
// const colors = ["#000000", "#0B60B0", "40A2D8", "#F0EDCF"];

// setInterval(function () {
//   let x = Math.trunc(Math.random() * 4);

//   document.body.style.background = colors[x];

//   document.body.style.transition = "0.8s linear";
//   console.log(x);
// }, 500);

// let a = 8;
// console.log(a);
// var b = 1;

function sample() {
  {
    let a = 1;
    const b = 10;
    var c = 13;
    console.log(c);
  }

  console.log();
}

sample();

// console.log(c);
// console.log(a);
// console.log(b);
