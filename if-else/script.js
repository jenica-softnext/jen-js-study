"use strict";

// 1. Check if a number is odd or even in JavaScript
console.log("// 1. Check if a number is odd or even in JavaScript");

function oddOrEven(num) {
  if (num % 2 === 0) {
    return `${num} is an even number.`;
  } else if (num % 2 !== 0) {
    return `${num} is an odd number.`;
  }
}

console.log(oddOrEven(21));

console.log("----------------------------");

// 2. Check if input variable is a number or not
console.log("// 2. Check if input variable is a number or not");

function checkTypeOf(x) {
  if (typeof x === "number") {
    return `${x} is a number.✔️`;
  } else {
    return `${x} is NOT a number.❌`;
  }
}
console.log(checkTypeOf("Jenica"));

console.log("----------------------------");

// 3. Find the largest of two number
console.log("// 3. Find the largest of two number");

function findLargest(x, y) {
  if (x > y) {
    return `${x} is larger than ${y}`;
  } else if (y > x) {
    return `${y} is larger than ${x}`;
  } else if (x === y) {
    return `${x} is equal to ${y}`;
  }
}

console.log(findLargest(209, 327));

findLargest(54, 109);

console.log("----------------------------");

// 4. Find the largest of three number
console.log("// 4. Find the largest of three number");

function findLargestNumber(x, y, z) {
  if (x > y && x > z) {
    return `${x} is greater that ${y} and ${z}`;
  } else if (y > x && y > z) {
    return `${y} is greater that ${x} and ${z}`;
  } else if (z > x && z > y) {
    return `${z} is greater that ${x} and ${y}`;
  }
}

console.log(findLargestNumber(9, 34, 650));

console.log("----------------------------");

// 5. Check if a triangle is equilateral, scalene, or isosceles
console.log("// 5. Check if a triangle is equilateral, scalene, or isosceles");
// Print “Equilateral triangle.” if values for all side1, side2 and side3 are equal.
// Print “Isosceles triangle.” if values for side1 is equal to side2 or side2 is equal to side3
// Else “Scalene triangle.” since values of all sides are unequal.

const checkTriangleShape = function (side1, side2, side3) {
  if (side1 === side2 && side2 === side3 && side3 === side1) {
    return `Equilateral triangle.`;
  } else if (side1 === side2 || side2 === side3 || side3 === 1) {
    return `Isosceles triangle.`;
  } else if (side1 !== side2 && side2 !== side3 && side3 !== side1) {
    return `Scalene triangle.`;
  }
};

console.log(checkTriangleShape(12, 12, 12));
console.log(checkTriangleShape(20, 20, 31));
console.log(checkTriangleShape(5, 4, 3));

console.log("----------------------------");

// 6. Find the a number is present in given range
console.log("// 6.Find the a number is present in given range");

const findInRange = (start, end, num) => {
  if (num >= start && num <= end) {
    return `The number ${num} is BETWEEN the range of ${start} to ${end}.👍`;
  } else {
    return `The number ${num} is OUTSIDE the range of ${start} to ${end}. 👎`;
  }
};

console.log(findInRange(1, 100, 101));

console.log("----------------------------");

// 7. Perform arithmetic operations on two numbers
console.log("// 7. Perform arithmetic operations on two numbers");

function getSum(x, y) {
  return x + y;
}

function getDifference(x, y) {
  return x - y;
}

function getProduct(x, y) {
  return x * y;
}

function getQuotient(x, y) {
  return x / y;
}

function calculate(num1, num2, op) {
  if (op === "add") {
    return getSum(num1, num2);
  } else if (op === "minus") {
    return getDifference(num1, num2);
  } else if (op === "multiply") {
    return getProduct(num1, num2);
  } else if (op === "divide") {
    return getQuotient(num1, num2);
  }
}

console.log(calculate(10, 5, "add"));
console.log(calculate(10, 5, "minus"));
console.log(calculate(10, 5, "multiply"));
console.log(calculate(10, 5, "divide"));

console.log("----------------------------");

// 8. Check if a year is leap year or not
console.log("// 8. Check if a year is leap year or not");

function checkYear(year) {
  if ((year % 4 === 0 && year % 400 === 0) || year % 100 !== 0) {
    return `The year ${year} is a leap year.`;
  } else {
    return `The year ${year} is NOT a leap year.`;
  }
}

console.log(checkYear(1700));
console.log(checkYear(2000));
console.log(checkYear(2024));

console.log("----------------------------");

// 9. Find the grade for input marks
console.log("// 9. Find the grade for input marks");
// Print “S grade” if marks is between 91 and 100.
// Print “A grade” if marks is between 81 and 90.
// Print “B grade” if marks is between 71 and 80.
// Print “C grade” if marks is between 61 and 70.
// Print “D grade” if marks is between 51 and 60.
// Print “E grade” if marks is between 41 and 50.
// Print “Student has failed” if marks is between 0 and 40.
// Else print “Invalid marks”.

let gradeMark = 74;

if (gradeMark >= 91 && gradeMark <= 100) {
  console.log("S Grade.");
} else if (gradeMark >= 81 && gradeMark <= 90) {
  console.log("A Grade.");
} else if (gradeMark >= 71 && gradeMark <= 80) {
  console.log("B Grade.");
} else if (gradeMark >= 61 && gradeMark <= 70) {
  console.log("C Grade.");
} else if (gradeMark >= 51 && gradeMark <= 60) {
  console.log("D Grade.");
} else if (gradeMark >= 41 && gradeMark <= 50) {
  console.log("E Grade.");
} else if (gradeMark >= 0 && gradeMark <= 40) {
  console.log("Student failed.");
} else {
  console.log("Invalid marks...");
}

console.log("----------------------------");

// 10. Find number of days in a given month
console.log("// 10. Find number of days in a given month");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Sepetember",
  "October",
  "November",
  "December",
];

function getNumDays(yyyy, mm) {
  let date = new Date(yyyy, mm, 0);
  return `${months[mm - 1]} ${yyyy} has ${date.getDate()} days.`;
}

console.log(getNumDays(2024, 2));
