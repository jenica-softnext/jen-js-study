// passengerCount = 99;

// const secureBooking = function () {
//   let passengerCount = 0;
//   let testlangto = 99;

//   return function () {
//     passengerCount++;
//     return passengerCount;
//   };
// };

// secureBooking()();

// const booker = secureBooking();
// console.log(booker());
// console.log(booker());
// console.log(booker());
// const newBooker = booker();
// console.log(newBooker + 99);

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
h();
f();

// example 2

const boardPasengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds.`);
};

boardPasengers(180, 5);
