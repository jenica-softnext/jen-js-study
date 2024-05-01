const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log("----- for of loop -----");
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You widthrew ${movement}`);
  }
}

console.log("----- for of loop with entries -----");
for (const [key, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`${key}: You deposited ${movement}`);
  } else {
    console.log(`${key}: You widthrew ${movement}`);
  }
}

console.log("----- for each method -----");
movements.forEach(function (movement, i, array) {
  // current element, current index , entire array
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
    console.log(`array: ${array}`);
  } else {
    console.log(`Movement ${i + 1}: You widthrew ${movement}`);
    console.log(`array: ${array}`);
  }
});

console.log("----- for each with maps and sets -----");
//  map
const currencies = new Map([
  ["USD", "United Stated Dollar"],
  ["EUR", "Euro"],
  ["BBP", "Pound Sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(key, value);
});

// set

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);

console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, set) {
    console.log(key, value);
});
