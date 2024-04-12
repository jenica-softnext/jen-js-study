// // const arr = [1, 23, 7, 10, 34, 56, 80];

// // function test(n) {
// //   console.log(...n);
// // }

// // test(arr);

// // // rest paratemeter

// // const sampleArr = ["Jen", "Dennis", "lavinia"];

// // const [testSample, ...test2Sample, v] = sampleArr;

// // console.log(testSample);
// // console.log(test2Sample);
// // console.log(v)

// /////////////////////////// OBJECT LITERAL START //////////////////////////
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
// /////////////////////////// OBJECT LITERAL END //////////////////////////

// const orderDelivery = restaurant.delivery({time: "10am", address: "San Antonio", starterIndex: 0, mainIndex: 0});

// console.log(orderDelivery);

// console.log({...restaurant}); // to spread an object enclose with curly brackets

// // let a = 0;
// // let b = 90;

// // const sampleObj = {a: 22, b: 24, c: 78, d: 20};

// // ({a, b} = sampleObj);

// // console.log(a);

// // spread operator

// // const jenArray = ["Jen", "Belen", 28, "Batangas"];

// // const jenNewArray = [...jenArray];

// // console.log(jenNewArray);

// // const jenObject = {
// //   fName: "Lorivic Jenica",
// //   lName: "Belen",
// //   age: 28,
// //   location: "Batangas",
// //   msg: "This is an object",
// // };

// // console.log({...jenObject})

// const [pizza, , risotto, ...others] = [...restaurant.mainMenu, ...restaurant.starterMenu];

// console.log(pizza, risotto, others);

// const testArr = [1, 2, 3, 4, 5];
// const [first, second, ...otherNumber] = testArr;
// console.log(first, second, otherNumber);

// const {openingHours} = restaurant;
// const {sat, ...weekdaysOpeningHours} = openingHours;

// console.log(weekdaysOpeningHours);

// const add = function (...n) {
//   let sum = 0;
//   for (let i = 0; i <= n.length - 1; i++) {
//     sum += n[i];
//   }

//   return sum;
// };

// const numberSum = add(1, 2, 3, 4, 5, 6, 7, 8, 9, 11);
// console.log(numberSum);

// const testFunction = function (a, ...others) {
//   console.log(a);
//   console.log(others);
// };

// testFunction("a", "b", "c", "d", "e", "f", "g");

// let showGuestList;

// let numGuest = false;

// showGuestList = numGuest && "no guest";

// console.log(showGuestList);

// console.log(undefined ?? 0 ?? null);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [itemNum, itemFood] of menu.entries()) {
//   console.log(`${itemNum + 1}: ${itemFood}`);
// }

// // const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// // const daysObject = {
// //   [days[0]]: "happy monday!",
// // };

// // console.log(daysObject.mon);

// // optional chaining

// // console.log(restaurant.openingHours?.mon);

// //

// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open;

//   console.log(`We are ${open ?? `closed`} in ${day}`);
// }

// const myArray = [
//   ["Dennis", "Tina", "Che", "Ryan"],
//   ["", "Veia", "Jen", "Mavoc", "Lara"],
// ];

// console.log(myArray[1]?.[0] || "No name");

// // looping objects

// // looping over objects property names (keys)

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// const dennis = {
//   [`full name`]: "Dennis Castillo",
//   job: "operator",
//   age: 28,
// };

// const jen = ["Jenica Belen", "web designer", 28];

// console.log(jen.entries());

// for (const [x, y] of Object.entries(dennis)) {
//   console.log(`Dennis' ${x} is ${y}`);
// }

// for (const [x, {y, z}] of Object.entries(openingHours)) {
//   console.log(`We are open on ${x}, from ${y} ton ${z}`);
// }

// challenge #2

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    ["Neuer", "Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski"],
    ["Burki", "Schulz", "Hummels", "Akanji", "Hakimi", "Weigl", "Witsel", "Hazard", "Brandt", "Sancho", "Gotze"],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2

const odds = Object.entries(game.odds);

let average = 0;

for (const [team, odd] of odds) {
  average += odd;

  // 3
  console.log(`Odd of ${game[team] ?? "draw"}: ${odd}`);
}
average /= odds.length;

console.log(average);

// sets

const orderSets = new Set(["Pizza", "Pasta", "Risotto", "Pizza", "Bread", "Bread", "Bread"]);
console.log(orderSets);

let newSetArray = [...orderSets];

console.log(newSetArray);

// rest pattern refresher

const [firsOrder, ...otherOrder] = orderSets;

console.log(firsOrder);

console.log(otherOrder);

for (const x of orderSets) {
  console.log("test: " + x);
}

// maps

const myRestaurant = new Map();

myRestaurant.set("first", "Lagoon Bay");
myRestaurant.set(1, "Co-working Restau");
myRestaurant.set(2, "Apartment with breakfast");
myRestaurant.set("test");

myRestaurant.set("categories", ["Itailan", "Pizzeria", "Vegetarian", "organic"]).set("open", 11).set("close", 23).set(true, "open").set(false, "closed");

const currentTime = 21;

console.log(myRestaurant.get(currentTime > myRestaurant.get("open") && currentTime < myRestaurant.get("close")));

// map iteration

// populating a new map without using the set method

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct! 🎉"],
  [false, "Try again.."],
]);

console.log(question);

// convert object to map

const {openingHours} = restaurant;
console.log(Object.entries(openingHours));

// map iteration
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

// const answer = Number(prompt("What is your answer? Choose from 1, 2, or 3."));
const answer = 3;
console.log(question.get(question.get("correct") === answer));

// convert map to array

console.log([...question]);

// coding challenge #3

/*1. Create an array 'events' of the different game events that happened (no 
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL*/

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);

// 1
const events = [...new Set(gameEvents.values())];

// 2
gameEvents.delete(64);

// 3

console.log(`A $n event happened, on average, every ${90 / gameEvents.size} minutes`);

// 4
for (const [min, event] of gameEvents) {
  const half = min < 45 ? "FIRST" : "SECOND";
  const str = `[${half} HALF] ${min}: ${event}`;

  console.log(str);
}

console.log(events);

console.log(gameEvents);

// working with strings 1
const airline = "TAP Air Portugal";
const plane = "A320";

// get a character of a string at a certain position
console.log(plane[0]); //A
console.log(plane[1]); //3
console.log(plane[2]); //2

// directly on string
console.log("B737"[0]); // B

// read the length

console.log(airline.length); //16
console.log("B737".length); //4

// string methods
// indexOf

console.log(airline.indexOf("r")); //6 (will give the first occurence)
// !!! Strings are also 0 based

// get last 'r' index
console.log(airline.lastIndexOf("r")); // 10

// occurance of words (case sensitive)
console.log(airline.indexOf("Portugal")); // 8 (the inde of the first character of the word)

// why are they useful? To extract part of a string using the slice method, slice method needs indexes as arguments
// example:

console.log(airline.slice(4, 6));

// what if we dont know the string that we are received yet? (without knowing any the indexes)

// extracting the first word
console.log(airline.slice(0, airline.indexOf(" "))); //TAP

// extracting the last word
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// using negative index as arguments
console.log(airline.slice(-2)); //al
console.log(airline.slice(1, -1)); //AP Air Portuga

// practice: write a function that receives an airplane seat and logs to the console whether it is a middle seat or not

const seats = ["A", "B", "C", "D", "E", "F"];
const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);

  if (s === "B" || s === "E") {
    console.log("You got the middle seat.");
  } else {
    console.log("You got lucky.");
  }
};

checkMiddleSeat("11B");

checkMiddleSeat("13F");

checkMiddleSeat("9A");
// working with strings 2

// working with strings 3