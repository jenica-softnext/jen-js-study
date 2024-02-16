/*1. Write a JavaScript function to check whether an `input` is an array or not.*/
console.log(`// 1. Write a JavaScript function to check whether an 'input' is an array or not.`);

function checkType(input) {
  return `The input is ${Array.isArray(input) ? "an" : "NOT an"} array.`;
}

console.log(checkType([21, 23, 5, 19]));

console.log("----------------------------");

/*2. Write a JavaScript function to clone an array.*/
console.log(`// 2. Write a JavaScript function to clone an array.`);

const array_1 = ["Jen", "Belen", 7, true];
// using slice method
const array_2 = array_1.slice();

const array_3 = [];

// using loop

for (let i = 0; i <= array_1.length - 1; i++) {
  array_3.push(array_1[i]);
}

console.log(`Array 1: ${array_1}`);
console.log(`Array 2: ${array_2}`);
console.log(`Array 3: ${array_3}`);

console.log("----------------------------");

/*3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.*/
console.log(
  `// 3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.`
);

function getFirstElement(n) {
  return n[0];
}

console.log(getFirstElement(["apple", "banana", "orange"]));

console.log("----------------------------");

/*4. Write a simple JavaScript program to join all elements of the following array into a string.*/
console.log(
  `// 4. Write a simple JavaScript program to join all elements of the following array into a string.`
);

function arraysToString(arr) {
  return arr.join(" ");
}

console.log(arraysToString(["Lorivic", "Jenica", "Belen"]));

console.log("----------------------------");

/*5. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.*/
console.log(
  `// 5. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.`
);

function newNumber(num) {
  const str = num.toString();
  let newStr = "";
  for (let i = 0; i <= str.length - 1; i++) {
    if (Number(str[i]) % 2 !== 0) {
      newStr += Number(str[i]);
    } else {
      newStr += `-${Number(str[i])}`;
    }
  }

  if (newStr[0] === "-") {
    return newStr.slice(1);
  } else {
    return newStr;
  }
}

console.log(newNumber(102345622));

console.log("----------------------------");

/*6. Write a JavaScript program to sort the items of an array.*/
console.log(`// 6. Write a JavaScript program to sort the items of an array.`);

function sortItems(arr) {
  return arr.sort();
}

console.log(sortItems(["mango", "apple", "orange", "watermelon", "banana"]));

console.log("----------------------------");

/*7. Write a JavaScript program to find the most frequent item in an array.*/
console.log(`// 7. Write a JavaScript program to find the most frequent item in an array.`);

const array_7 = ["red", "orange", "yellow", "blue", "green", "blue", "blue", "indigo", "red"];

console.log(array_7.at(-1));

console.log("----------------------------");

/*8. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.*/
console.log(
  `// 8. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.`
);

function swapCase(str) {
  let newStr = "";

  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === str[i].toUpperCase()) {
      newStr += str[i].toLowerCase();
    } else {
      newStr += str[i].toUpperCase();
    }
  }

  return newStr;
}

console.log(swapCase("Lorivic Jenica Belen"));
console.log(swapCase("The Quick Brown Fox Jumps Over The Lazy Dog"));

console.log("----------------------------");

/*9. Write a JavaScript program that prints the elements of the following array.*/
console.log(`// 9. Write a JavaScript program that prints the elements of the following array.`);

function getElement(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    console.log(arr[i]);
  }
}

getElement([1, "Jen", "Batangas", true]);

console.log("----------------------------");

/*10. Write a JavaScript program to find the sum of squares of a numerical vector.*/
console.log(`// 10. Write a JavaScript program to find the sum of squares of a numerical vector.`);

console.log("----------------------------");

/*11. Write a JavaScript program to compute the sum and product of an array of integers.*/
console.log(
  `// 11. Write a JavaScript program to compute the sum and product of an array of integers.`
);

function getArrSum(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }

  return sum;
}

function getArrProduct(arr) {
  let product = 1;
  for (let i = 0; i <= arr.length - 1; i++) {
    product *= arr[i];
  }

  return product;
}

function getSumAndProduct(arr) {
  return `${arr} has a sum of ${getArrSum(arr)} and a product of ${getArrProduct(arr)}.`;
}

console.log(getSumAndProduct([2, 7, 1, 4, 5]));

console.log("----------------------------");

/*12. Write a JavaScript program to add items to a blank array and display them.*/
console.log(`// 12. Write a JavaScript program to add items to a blank array and display them.`);

console.log("----------------------------");

/*13. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).*/
console.log(
  `// 13. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).`
);

console.log("----------------------------");

/*14. We have the following arrays :
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]

Write a JavaScript program to display the colors in the following way :
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."*/

console.log(`// 14. We have the following arrays :
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]`);

/////////////////////////////////////////// Array Methods ///////////////////////////////////////////

console.log("sort array");

const jenArray = ["a", "b", "c", "z", "t", "avocado", "watermelon"];
console.log(jenArray.sort());

// for each function

jenArray.forEach(function (e) {
  console.log(e + "test");
});

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}

console.log(numbers2);

const list = ["apple", "banana", "orange", "watermelon", "grapes", "apple"];

list.forEach(function (e, x, y, z) {
  console.log(e === e);
});

//  flat method

const flatArray = [
  [1, 3, 4],
  [0, 7, 10],
  [9, 5, 2],
];

console.log(flatArray.flat());

// splice method - adds new item to an array

const letters = ["a", "b", "c", "d", "e", "f"];

letters.splice(2, 0, "lemon", "red");

console.log(letters);

letters.splice(1, 2); // 1 - position, 2 - how many elements
console.log(letters);

// slice method - slices out piece of an array into a new array

const array_8 = ["batangas", "lipa", "bauan", "san pascual", "mabini", "santo nino"];

const array_8_new = array_8.slice(1, 4);

console.log(array_8_new);

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

console.log(citrus);

const friends = ["Dennis", "Lavinia", "Ryan", "Evelyn"];

console.log(friends);

friends[3] = "Lara";
console.log(friends);

friends[4] = "Veia";
console.log(friends);

friends[6] = "Mavoc";
console.log(friends);
