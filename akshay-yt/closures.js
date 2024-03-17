// JS Closures
// example 1:
// function q() {
//   var r = 7;
//   function s() {
//     console.log(r);
//   }

//   s();
// }

// q();

// q();

/////////////////////////////////////////
// example 2:

// function x() {
//   let a = 7;
//   function y() {
//     console.log(a);
//   }
//   a = 100;
//   return y;
// }

// let z = x();
// console.log(z);
// z();

// let u = 99;

// function g() {
//   console.log(u);
// }
// g();
// u = 71;

// g();

function x() {
  var i;
  for (i = 1; i <= 5; i++) {
    console.log(i);
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }

  console.log("Hello World");
}

x();
