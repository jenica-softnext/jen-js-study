// 1. Write a JS code to print numbers from 1 to 10
console.log("// 1. Write a JS code to print numbers from 1 to 10");

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

console.log("----------------------------");

// 2. Write a JS code to print a 2D array
console.log("// 3. Write a JS code to print a 2D array");

let myArray = [];
let k = 0;

for (let row = 0; row <= 2; row++) {
  myArray[row] = [row];

  for (let col = 0; col <= 1; col++) {
    myArray[row][col] = k++;
  }
}

console.table(myArray);
console.log(myArray);

console.log("----------------------------");

// 3. Write a JS code to print Even numbers in given array
console.log("// 3. Write a JS code to print Even numbers in given array");

const givenArray = [2, 34, 25, 22, 90, 17, 3, 8];

for (let i = 0; i <= givenArray.length - 1; i++) {
  if (givenArray[i] % 2 !== 0) continue;
  console.log(givenArray[i]);
}

console.log("----------------------------");

// 4. Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".
console.log(
  "// 4. Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print 'Fizz' instead of the number and for multiples of five print 'Buzz'. For numbers multiples of both three and five print 'FizzBuzz'."
);

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

console.log("----------------------------");

// 5. Write a JavaScript program to construct the following pattern, using a nested for loop.
console.log(`// 5. Write a JavaScript program to construct the following pattern, using a nested for loop.
*  
* *  
* * *  
* * * *  
* * * * * `);

let output = "";

for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    output += " * ";
  }
  console.log(output);
  output = "";
}

// OR

let array5 = [];

for (let i = 1; i <= 5; i++) {
  array5.push(" * ");
  console.log(array5.join(""));
}

console.log("----------------------------");

// 6. Write a JS code to find the power of a number using for loop
console.log("// 6. Write a JS code to find the power of a number using for loop");

let power = 1;

function getPower(base, exp) {
  for (let i = 1; i <= exp; i++) {
    power *= base;
  }
  return power;
}

console.log(getPower(4, 0));

console.log("----------------------------");

// 7. Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.
console.log("// 7. Get the sum of two arrays…actually the sum of all their elements.");

console.log("----------------------------");

// 8. Using a for loop print all even numbers up to and including n. Don’t include 0.
console.log(
  "// 8. Using a for loop print all even numbers up to and including n. Don’t include 0."
);

console.log("----------------------------");

// 9. Using a for loop output the elements in reverse order

console.log("// 9. Using a for loop output the elements in reverse order");

console.log("----------------------------");

/* 10. Given two arrays of integers. Add up each element in the same position and
create a new array containing the sum of each pair. Assume both arrays are of the same length.*/
console.log(`// 7. Given two arrays of integers. Add up each element in the same position and
create a new array containing the sum of each pair. Assume both arrays are of the same length.`);

console.log("----------------------------");

/* 11. Given a string change the every second letter to an uppercase ‘Z’. Assume
there are no space. */
console.log(`// 11. Given a string change the every second letter to an uppercase ‘Z’. Assume
there are no space.`);

console.log("----------------------------");

// 12. Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
console.log(
  "// 12. Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not."
);

console.log("----------------------------");

// 13. Given a number n Calculate the factorial of the number
console.log("// 13. Given a number n Calculate the factorial of the number");

console.log("----------------------------");

/* 14. Write a program that will allow someone to guess a four digit pin exactly 4
times. If the user guesses the number correctly. It prints “That was
correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right.*/
console.log(`// 14. Write a program that will allow someone to guess a four digit pin exactly 4
times. If the user guesses the number correctly. It prints “That was
correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right.`);

console.log("----------------------------");

/* 15. Write a program that will check if two strings are palindromes. A palindrome is a word that spells the same forward and backward.
Palindrome: a word, phrase, or sequence that reads the same backward as
forward, e.g., madam or nurses run.*/
console.log(`// 15. Write a program that will check if two strings are palindromes. A palindrome is a word that spells the same forward and backward.
Palindrome: a word, phrase, or sequence that reads the same backward as
forward, e.g., madam or nurses run.`);
