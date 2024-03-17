////////////////////////////////////////////////
console.log("using var keyword");
// using var keyword
var a = 100;
console.log(a);
if (true) {
  var a = 8;
  console.log(a);
}
console.log(a);
////////////////////////////////////////////////
console.log("using let keyword");
// using let keyword
let b = 7;
console.log(b);
if (true) {
  let b = 12;
  console.log(b);
}
console.log(b);
////////////////////////////////////////////////
console.log("using const keyword");
// using const keyword
const c = 24;
console.log(c);
if (true) {
  let c = 1;
  console.log(c);
}
console.log(c);
////////////////////////////////////////////////
