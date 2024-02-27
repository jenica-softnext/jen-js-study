// const arr = [1, 23, 7, 10, 34, 56, 80];

// function test(n) {
//   console.log(...n);
// }

// test(arr);

// // rest paratemeter

// const sampleArr = ["Jen", "Dennis", "lavinia"];

// const [testSample, ...test2Sample, v] = sampleArr;

// console.log(testSample);
// console.log(test2Sample);
// console.log(v)

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italiano", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  delivery: function ({time, address, starterIndex, mainIndex}) {
    return `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}. :)`;
  },
};

const orderDelivery = restaurant.delivery({time: "10am", address: "San Antonio", starterIndex: 0, mainIndex: 0});

console.log(orderDelivery);

console.log({...restaurant}); // to spread an object enclose with curly brackets

// let a = 0;
// let b = 90;

// const sampleObj = {a: 22, b: 24, c: 78, d: 20};

// ({a, b} = sampleObj);

// console.log(a);

// spread operator

// const jenArray = ["Jen", "Belen", 28, "Batangas"];

// const jenNewArray = [...jenArray];

// console.log(jenNewArray);

// const jenObject = {
//   fName: "Lorivic Jenica",
//   lName: "Belen",
//   age: 28,
//   location: "Batangas",
//   msg: "This is an object",
// };

// console.log({...jenObject})

const [pizza, , risotto, ...others] = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(pizza, risotto, others);

const testArr = [1, 2, 3, 4, 5];
const [first, second, ...otherNumber] = testArr;
console.log(first, second, otherNumber);

const {openingHours} = restaurant;
const {sat, ...weekdaysOpeningHours} = openingHours;

console.log(weekdaysOpeningHours);

const add = function (...n) {
  let sum = 0;
  for (let i = 0; i <= n.length - 1; i++) {
    sum += n[i];
  }

  return sum;
};

const numberSum = add(1, 2, 3, 4, 5, 6, 7, 8, 9, 11);
console.log(numberSum);

const testFunction = function (a, ...others) {
  console.log(a);
  console.log(others);
};

testFunction("a", "b", "c", "d", "e", "f", "g");

let showGuestList;

let numGuest = false;

showGuestList = numGuest && "no guest";

console.log(showGuestList);

console.log( undefined ?? 0 ?? null);
