// how to handle errors in javascript
// error handling is used most when working with data from other sources or user input
try {
  console.log("Star of 'try' runs");
  unicycle;
  console.log("End of 'try' runs -- never reached");
} catch (err) {
  console.log("Error has occured: " + err);
} finally {
  console.log("This is always run");
}
console.log("...Then the execution continues"); //will run after the try catch statement is over

// for the try catch to work, the code must be runnable

console.log("------------------------------------------------------------------------");

let json = `{"age":30}`;
try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); //custom
  }
  console.log("show this");
  console.log(user.name);
} catch (e) {
  console.log("JSON Error: " + e.name); // name is 'SyntaxError'
  console.log("JSON Error: " + e.message); // message is 'Incomplete data: no name'
  console.log("JSON Error: " + e);
}
