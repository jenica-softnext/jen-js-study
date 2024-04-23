const testAPI = document.querySelector(".test_api");
const testAPI_btn = document.querySelector(".test_api_btn");

// checkValidity() and setCustomValidity

// testAPI_btn.addEventListener("click", function () {
//   if (validityState.valueMissing) {
//     testAPI.setCustomValidity("You gotta fill this out, yo!");
//   } else if (validityState.rangeUnderflow) {
//     testAPI.setCustomValidity("We need a higher number!");
//   } else if (validityState.rangeOverflow) {
//     testAPI.setCustomValidity("Thats too high!");
//   } else {
//     testAPI.setCustomValidity("");
//   }
// });

// Validation DOM Properties
console.log(testAPI.validity);
console.log(testAPI.validationMessage);
console.log(testAPI.willValidate);

testAPI_btn.addEventListener("click", function () {
  if (testAPI.validity.typeMismatch) {
    testAPI.setCustomValidity("hello");

    testAPI.addEventListener("click", function () {
      location.reload();
    });
  }
});

// storage API

// stores data
console.log(localStorage);
console.log(localStorage.length);
console.log(localStorage.clear());

// web worker api
if (typeof Worker !== "undefined") {
  console.log("Yes! Web worker support!");
  // Some code.....
} else {
  console.log("Sorry! No Web Worker support..");
}