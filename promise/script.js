// const ride = new Promise((resolve, reject) => {});

// const stillTogether = false;

// function test() {
//   return new Promise((resolve, reject) => {
//     if (stillTogether) {
//       resolve("❤️ Let's get married! ❤️");
//     } else {
//       reject("Sorry we are not meant to be...💔");
//     }
//   });
// }

// test()
//   .then((value) => {
//     console.log("value: " + value);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("done");
//   });

//   closures
function x() {
  let test_closure = "Hellow World";
  let a = 7;
  function y() {
    let i = 9;
    let useA = a;
  }
  y();
}
x();

/*JavaScript variables can belong to the local or global scope.

Global variables can be made local (private) with closures.*/

// Global variables

// a function can access all variables defined inside the function, like this:
function myFunction() {
  let a = 4;
  return a * a;
}

// but a function can also access variables defined outside the function, like this:
let a = 4;
function myFunction() {
  return a * a;
}

console.log("test lang");

// Initiate counter
let counter = 0;

// Function to increment counter
function add() {
  let counter = 0;
  function gg() {
    counter += 1;
    console.log(counter);
  }
  return gg;
}

// Call add() 3 times
const u = add();
u();
u();
u();
// The counter should now be 3

async function be_a_se() {
  const is_software_engineer = true;
  const jen_promise = new Promise((resolve, reject) => {
    if (is_software_engineer) {
      resolve(console.log("Congrats! Kinaya mo!!! Aral na ulit! Practice!"));
    } else {
      reject(console.log("Try and try again!!! Sige lang! Practice pa!!! Practice! Practice! Practice!"));
    }
  });

  await jen_promise;
}

be_a_se();

// jen_promise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Kahit anong mangyare! PRACTICE PRACTICE PRACTICE!!!");
//   });

async function myDisplay() {
  let myPromise = new Promise(function (resolve) {
    resolve("I love you");
  });
  console.log(await myPromise);
}

myDisplay();


try {
  consoe.log("hello world!!!:)")
}
catch(err){
  console.log("ERROR: " + err)
}