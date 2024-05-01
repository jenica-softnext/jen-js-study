// /*1. Write a JavaScript function to check whether an `input` is an array or not.*/
// console.log(`// 1. Write a JavaScript function to check whether an 'input' is an array or not.`);

// function checkType(input) {
//   return `The input is ${Array.isArray(input) ? "an" : "NOT an"} array.`;
// }

// console.log(checkType([21, 23, 5, 19]));

// console.log("----------------------------");

// /*2. Write a JavaScript function to clone an array.*/
// console.log(`// 2. Write a JavaScript function to clone an array.`);

// const array_1 = ["Jen", "Belen", 7, true];
// // using slice method
// const array_2 = array_1.slice();

// const array_3 = [];

// // using loop

// for (let i = 0; i <= array_1.length - 1; i++) {
//   array_3.push(array_1[i]);
// }

// console.log(`Array 1: ${array_1}`);
// console.log(`Array 2: ${array_2}`);
// console.log(`Array 3: ${array_3}`);

// console.log("----------------------------");

// /*3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.*/
// console.log(`// 3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.`);

// function getFirstElement(n) {
//   return n[0];
// }

// console.log(getFirstElement(["apple", "banana", "orange"]));

// console.log("----------------------------");

// /*4. Write a simple JavaScript program to join all elements of the following array into a string.*/
// console.log(`// 4. Write a simple JavaScript program to join all elements of the following array into a string.`);

// function arraysToString(arr) {
//   return arr.join(" ");
// }

// console.log(arraysToString(["Lorivic", "Jenica", "Belen"]));

// console.log("----------------------------");

// /*5. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.*/
// console.log(`// 5. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.`);

// function newNumber(num) {
//   const str = num.toString();
//   let newStr = "";
//   for (let i = 0; i <= str.length - 1; i++) {
//     if (Number(str[i]) % 2 !== 0) {
//       newStr += Number(str[i]);
//     } else {
//       newStr += `-${Number(str[i])}`;
//     }
//   }

//   if (newStr[0] === "-") {
//     return newStr.slice(1);
//   } else {
//     return newStr;
//   }
// }

// console.log(newNumber(102345622));

// console.log("----------------------------");

// /*6. Write a JavaScript program to sort the items of an array.*/
// console.log(`// 6. Write a JavaScript program to sort the items of an array.`);

// function sortItems(arr) {
//   return arr.sort();
// }

// console.log(sortItems(["mango", "apple", "orange", "watermelon", "banana"]));

// console.log("----------------------------");

// /*7. Write a JavaScript program to find the most frequent item in an array.*/
// console.log(`// 7. Write a JavaScript program to find the most frequent item in an array.`);

// const array_7 = ["red", "orange", "yellow", "blue", "green", "blue", "blue", "indigo", "red"];

// console.log(array_7.at(-1));

// console.log("----------------------------");

// /*8. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.*/
// console.log(`// 8. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.`);

// function swapCase(str) {
//   let newStr = "";

//   for (let i = 0; i <= str.length - 1; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//       newStr += str[i].toLowerCase();
//     } else {
//       newStr += str[i].toUpperCase();
//     }
//   }

//   return newStr;
// }

// console.log(swapCase("Lorivic Jenica Belen"));
// console.log(swapCase("The Quick Brown Fox Jumps Over The Lazy Dog"));

// console.log("----------------------------");

// /*9. Write a JavaScript program that prints the elements of the following array.*/
// console.log(`// 9. Write a JavaScript program that prints the elements of the following array.`);

// function getElement(arr) {
//   for (let i = 0; i <= arr.length - 1; i++) {
//     console.log(arr[i]);
//   }
// }

// getElement([1, "Jen", "Batangas", true]);

// console.log("----------------------------");

// /*10. Write a JavaScript program to find the sum of squares of a numerical vector.*/
// console.log(`// 10. Write a JavaScript program to find the sum of squares of a numerical vector.`);

// console.log("----------------------------");

// /*11. Write a JavaScript program to compute the sum and product of an array of integers.*/
// console.log(`// 11. Write a JavaScript program to compute the sum and product of an array of integers.`);

// function getArrSum(arr) {
//   let sum = 0;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     sum += arr[i];
//   }

//   return sum;
// }

// function getArrProduct(arr) {
//   let product = 1;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     product *= arr[i];
//   }

//   return product;
// }

// function getSumAndProduct(arr) {
//   return `${arr} has a sum of ${getArrSum(arr)} and a product of ${getArrProduct(arr)}.`;
// }

// console.log(getSumAndProduct([2, 7, 1, 4, 5]));

// console.log("----------------------------");

// /*12. Write a JavaScript program to add items to a blank array and display them.*/
// console.log(`// 12. Write a JavaScript program to add items to a blank array and display them.`);

// console.log("----------------------------");

// /*13. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).*/
// console.log(`// 13. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).`);

// console.log("----------------------------");

// /*14. We have the following arrays :
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]

// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."*/

// console.log(`// 14. We have the following arrays :
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]`);

// /////////////////////////////////////////// Array Methods ///////////////////////////////////////////

// console.log("sort array");

// const jenArray = ["a", "b", "c", "z", "t", "avocado", "watermelon"];
// console.log(jenArray.sort());

// // for each function

// jenArray.forEach(function (e) {
//   console.log(e + "test");
// });

// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);

// function myFunction(value, index, array) {
//   return value * 2;
// }

// console.log(numbers2);

// const list = ["apple", "banana", "orange", "watermelon", "grapes", "apple"];

// list.forEach(function (e, x, y, z) {
//   console.log(e === e);
// });

// //  flat method

// const flatArray = [
//   [1, 3, 4],
//   [0, 7, 10],
//   [9, 5, 2],
// ];

// console.log(flatArray.flat());

// // splice method - adds new item to an array

// const letters = ["a", "b", "c", "d", "e", "f"];

// letters.splice(2, 0, "lemon", "red");

// console.log(letters);

// letters.splice(1, 2); // 1 - position, 2 - how many elements
// console.log(letters);

// // slice method - slices out piece of an array into a new array

// const array_8 = ["batangas", "lipa", "bauan", "san pascual", "mabini", "santo nino"];

// const array_8_new = array_8.slice(1, 4);

// console.log(array_8_new);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);

// console.log(citrus);

// const friends = ["Dennis", "Lavinia", "Ryan", "Evelyn"];

// console.log(friends);

// friends[3] = "Lara";
// console.log(friends);

// friends[4] = "Veia";
// console.log(friends);

// friends[6] = "Mavoc";
// console.log(friends);

// console.log("----- SLICE -----");

// // SLICE - does not mutate the original array
// let simpleArr = ["a", ["b", "c"], "d", "e"];
// console.log(simpleArr.slice(2));
// console.log(simpleArr.slice(2, 4));
// console.log(simpleArr.slice(-2));
// console.log(simpleArr.slice(-1));
// console.log(simpleArr.slice(1, -2));
// console.log(simpleArr.slice()); // shallow copy (use this when you want to chain multiple methods together)
// console.log([...simpleArr]); // shallow copy

// console.log(simpleArr);

// console.log("----- SPLICE -----");

// // SPLICE - it does actually change the original array (mutates that array)
// let spliceArr = ["a", "b", "c", "d", "e"];
// let newSpliceArr = spliceArr.splice(0); // removed the items (from index 0 to the last item) from the spliceArr array and store to a new variable
// console.log(newSpliceArr.splice(2, 0, "lemon")); // returns the removed item
// console.log(newSpliceArr); // returns the mutated array
// newSpliceArr.splice(1, 2);
// console.log(newSpliceArr);
// newSpliceArr.splice(-1);
// console.log(newSpliceArr);

// console.log("----- REVERSE -----");

// // REVERSE - mutates the original array
// const arr2 = ["a", "b", "c", "d", "e"];
// const arr3 = ["j", "i", "h", "g", "f"];
// console.log(arr2);
// console.log(arr3.reverse());
// console.log(arr3);

// console.log("----- CONCAT -----");

// // CONCAT - does not mutate the original array

// const concat1 = [1, 2, 3, 4, 5];
// const concat2 = [6, 7, 8, 9, 10];

// const concat3 = concat1.concat(concat2);
// const concat4 = concat2.concat(concat1);

// console.log(concat3); // 1 2 3 4 5 6 7 8 9 10
// console.log(concat4); // 6 7 8 9 10 1 2 3 4 5
// console.log([...concat1, ...concat2]);

// console.log("----- JOIN -----");

// // JOIN - does not mutate the original array
// console.log(concat1.join("-"));

// // at Method

// const arr4 = [23, 3, 7, 12];
// console.log(arr4[0]);
// console.log(arr4.at(0));
// console.log(arr4[-1]); //undefined
// console.log(arr4.slice(-1)); // [12]
// console.log(arr4.slice(-1)[0]); // 12
// console.log(arr4.at(-1)); // 12

// console.log("----- MAP METHOD -----");

// //  map method
// const mapArr = [8, 9, 1, 0, 2];

// const mapArrCopy = mapArr.map((val) => "hello " + val);

// console.log(`testtohhh: ${mapArrCopy}`);

// // const movements = [44, 90, 100, 12, 24, 7];
// // const eurToUsd = 1.1;
// // const newMov = [];

// // for (const mov of movements) {
// //   newMov.push(mov * eurToUsd);
// // }
// // console.log(newMov);
// // console.log("----------------------");

// const mapTest = mapArr.map(function (val, i, k) {
//   return val > 2; //true, true, false, false, false
// });

// console.log(mapTest);

// console.log("----- FILTER METHOD -----");
// // filter method

// const filterTest = mapArr.filter(function (val, i, k) {
//   return val > 2; // [8, 9]
// });

// console.log(filterTest);

// const reduceTest = mapArr.reduce(function (a, b, c, d) {
//   console.log(a);
//   return a + b;
// }, 100);
// console.log(reduceTest);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(" ----- MAP -----");
// map
// convert from euro to dollars

const euroToUsd = 1.1;
const euroToUsdArr = movements.map((mov) => mov * euroToUsd);
console.log(euroToUsdArr);

// using for of loop
const euroToUsdFor = [];
for (const mov of movements) euroToUsdFor.push(mov * euroToUsd);
console.log(euroToUsdFor);

const movementDescriptions = movements.map((mov, i) => `Movement ${i}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(mov)}`);
console.log(movementDescriptions);

console.log("----- FILTER -----");
// filter

const deposits = movements.filter((mov) => mov > 0);
console.log(deposits);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);

console.log("----- REDUCE -----");
// reduce
const reduced = movements.reduce((acc, cur) => acc + cur, 0);

console.log(reduced);

let movred = 0;

for (const mov of movements) movred += mov;

console.log(movred);

console.log(movements);

const firstDeposit = movements.find((mov) => mov > 0); //returns the first element in the array that satisfies this condition, only returns the element itself not array
console.log(firstDeposit);

console.log(movements.includes(-130)); //equality
console.log(movements.some((mov) => mov > 5000)); //condition
console.log(movements.every((mov) => mov > 0));

const flatArr = [2, 3, 4, 5, [1, 1, [2, "hello"]], ["world", 1]]; // nested array
console.log(flatArr);
console.log(flatArr.flat(1));

//sorting arrays

const owners = ["Jonas", "Zach", "Adam", "Martha"];

console.log(owners.sort());

const nums = [1, 8, 67, 35, 12, 7, 10];
// return < 0, A, B

// return > 0, B, A

nums.sort((a, b) => {
  if (a > b) {
    console.log("a: " + a);
    return 1;
  }

  if (b > a) {
    console.log("b: " + b);
    return -1;
  }
});

console.log(nums);

const points = [40, 100, 1, 5, 25, 10, 1];
console.log(points);
points.sort(function (a, b) {
  console.log(a, b, a - b);
  return a - b;
});

console.log(points);

const fillArr = new Array(7);
console.log(fillArr);

// fillArr.fill(10);
// console.log(fillArr);
fillArr.fill(8, 3, 4);
console.log(fillArr);

const fillArr2 = [2, 10, 11, 3, 7, 1];
console.log(fillArr2);
console.log(fillArr2.fill(9));
console.log(fillArr2);

const y = [1, 2, 3, 4, 5];
y.fill(99, 2);
console.log(y);

let fromArr = [24, 7, 12, 1, 8, 1];
// array.from()

// console.log(
//   Array.from(
//     {
//       length: 7,
//     },
//     () => {
//       return n;
//     },
//     (n = 7)
//   )
// );

const fromArr2 = [1, 2, 3, 4, 5, 6, 7];

const z = Array.from({length: 7}, (_, i) => i);
console.log(z);
