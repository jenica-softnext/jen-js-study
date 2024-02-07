const date = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const currentDay = days[date.getDay()];

// switch statement
console.log("// switch statement");
switch (currentDay) {
  case "Monday":
    console.log(`Happy ${currentDay}! Work work work!😄`);
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log(`Hello ${currentDay}.👋`);
    console.log("Continue to Study JavaScript. 👩‍💻");
    break;
  case "Friday":
    console.log(`It's ${currentDay}!🤩`);
    console.log("Practice practice practice!🤓");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy your weekend!😍");
    break;

  default:
    console.log("ERROR.");
    break;
}

console.log("----------------------------------------");

// if/else statement
console.log("// if/else statement");

if (currentDay === "Monday") {
  console.log(`Happy ${currentDay}! Work work work!😄`);
} else if (currentDay === "Tuesday" || currentDay === "Wednesday" || currentDay === "Thursday") {
  console.log(`Hello ${currentDay}.👋`);
  console.log("Continue to Study JavaScript. 👩‍💻");
} else if (currentDay === "Friday") {
  console.log(`It's ${currentDay}!🤩`);
  console.log("Practice practice practice!🤓");
} else if (currentDay === "saturday" || currentDay === "Sunday") {
  console.log("Enjoy your weekend!😍");
} else {
  console.log("ERROR.");
}
