var p = 55;

function function1() {
  var t = 99;

  function function2() {
    return t + 1;
  }

  let f = function2();
  console.log(f);
}

function1();
