// JS Scope Chain, Scope & Lexical Environment

// example 1
// function a() {
//   console.log(b);
// }

// var b = 10;

// a();

/* when JS reached the 'console.log(b)', it will try to find out whether 'b' exist in the local memory spave or not (which is inside the scope of 'a' function), 
if it did not exist then it will lookup and find out if it exist in the parent scope/outer space of its scope.*/

////////////////////////////////////////////////
// lexical scoping
// example 2
// function a() {
//   var b = 10;
//   c();
//   function c() {
//     console.log(b);
//   }
// }
// a();

let w = 25;

function vwx() {
  let v = 10;
  let f = 7;

  if (true) {
    console.log(w);
  }

  function x() {
    let d = 24;
    console.log(w);
    function what() {
      console.log(v);
      console.log(f);
      console.log(d);
    }

    what();
  }

  x();
}

vwx();
