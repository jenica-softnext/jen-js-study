// IIFE - Immediately Invoked Function Expression (IIFE)
// a functin that disappears right after its called once

const run_once = function () {
  console.log("this will never run again");
};

run_once();
run_once();
run_once();

(function () {
  console.log("This will never run agaaaaainnnnnnn... :)");
});

// immediately invoked function expression - IIFE (NOT THAT USED ANYMORE)
(function () {
  console.log("This will never run agaaaaainnnnnnn... :)");
})();

(() => {
  console.log("This will ALSO  never run agaaaaainnnnnnn... :)");
})();

// why is this pattern invented
