"use strict";

/*1. Write a JavaScript function that accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined. */
console.log(`// 1. Write a JavaScript function that accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.`);

function getTypeOf(x) {
  return `${x}'s type is: ${typeof x}`;
}

console.log(getTypeOf(7));

console.log("----------------------------"); /* */

/*2. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.*/
console.log(
  `// 2. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.`
);

function capitalizeStr(str) {
  let strings = str.split(" ");
  let newStrings = [];

  for (let i = 0; i <= strings.length - 1; i++) {
    newStrings.push(strings[i][0].toUpperCase() + strings[i].slice(1));
  }

  return newStrings.join(" ");
}
console.log(capitalizeStr("lorivic jenica belen"));

console.log("----------------------------"); /* */

/*3. Write a JavaScript function to print the “Hello World” message*/
console.log(`// 3. Write a JavaScript function to print the “Hello World” message`);

function sayHello(message) {
  return `${message}`;
}

console.log(sayHello("Hello World!"));

console.log("----------------------------"); /* */

/*4. Write a function that returns the square of a number*/
console.log(`// 4. Write a function that returns the square of a number`);

function getSquareNum(num) {
  return `${num}^2 = ${num * num}`;
}

console.log(getSquareNum(9));

console.log("----------------------------"); /* */

/*5. Write a function to convert Celsius to Fahrenheit*/
console.log(`// 5. Write a function to convert Celsius to Fahrenheit`);

const convertToFahrenhit = function (celcius) {
  let fahrenheit = (celcius / 5) * 9 + 32;

  return `${celcius}C is equal to ${fahrenheit}F`;
};

console.log(convertToFahrenhit(33));

console.log("----------------------------"); /* */

/*6. Write a function to find the area of a given Rectangle*/
console.log(`// 6. Write a function to find the area of a given Rectangle`);

const getTriangleArea = function (base, height) {
  return (1 / 2) * (base * height);
};

console.log(getTriangleArea(20, 20));

console.log("----------------------------"); /* */

/*7. Write a function to reverse a number*/
console.log(`// 7. Write a function to reverse a number`);

function reverseNum(num) {
  let newNum = "";

  for (let i = String(num).length - 1; i >= 0; i--) {
    newNum += String(num)[i];
  }

  return Number(newNum);
}

console.log(reverseNum(238));

console.log("----------------------------"); /* */

/*8. Count number of Vowels in String*/
console.log(`// 8. Count number of Vowels in String`);

function countVowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;

  for (let i = 0; i <= vowels.length - 1; i++) {
    vowelCount += Array.from(str.matchAll(vowels[i])).length;
  }
  return `vowel count: ${vowelCount}`;
}

console.log(countVowel("dennis castillo"));

console.log("----------------------------"); /* */

/*9. Write a function to check if an input string is a palindrome*/
console.log(`// 9. Write a function to check if an input string is a palindrome`);

function isPalindorome(str) {
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return `${str} is ${str === newStr ? "a" : "NOT a"} palindrome.`;
}

console.log(isPalindorome("kayak"));
console.log(isPalindorome("jenica"));
console.log(isPalindorome("rotator"));

console.log("----------------------------"); /* */

/*10. Write a function to calculate simple interest based on the principle amount*/
console.log(`// 10. Write a function to calculate simple interest based on the principle amount`);

function calculateSimpleInterest(p, r, t) {
  const si = p * (r / 100) * (t / 12);

  return `The borrowed amount is $${p} for a period of ${t} months at ${r}% per annum. The Simple Interest is: $${si}.`;
}

console.log(calculateSimpleInterest(46500, 20, 21));

console.log("----------------------------"); /* */

/*11. Write a function to generate a random number*/
console.log(`// 11. Write a function to generate a random number`);

function generateRandomNum() {
  return Math.trunc(Math.random() * 20 + 1);
}

console.log(generateRandomNum());

console.log("----------------------------"); /* */

/*12. Write a function to find Factorial of a number*/
console.log(`// 12. Write a function to find Factorial of a number`);

function getFactorial(num) {
  let factorial = 1;
  let nums = [];
  for (let i = num; i >= 1; i--) {
    factorial *= i;
    nums.push(i);
  }

  return `${nums.join(" + ")} = ${factorial}`;
}

console.log(getFactorial(4));

console.log("----------------------------"); /* */

/*13. Write a function to add unlimited numbers*/
console.log(`// 13. Write a function to add unlimited numbers`);

console.log("----------------------------");

/*14. Write a function to combine unlimited arrays*/
console.log(`// 14. Write a function to combine unlimited arrays`);

console.log("----------------------------");
