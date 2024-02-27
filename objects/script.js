let a = 111;
let b = 999;

const obj = {
  a: 23,
  b: 7,
  c: 14,
};

console.log("--- OBJ ---");
console.log(obj.a);
console.log(obj.b);

console.log("---VARIABLE---");
console.log(a);
console.log(b);

({a, b} = obj);

console.log("---VARIABLE---");
console.log(a);
console.log(b);