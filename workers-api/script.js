// worker start
const myworker = new Worker("worker.js"); //takes a path
// worker end

const sumButton = document.querySelector("#sumButton");
const bgButton = document.querySelector("#bgButton");

sumButton.addEventListener("click", (event) => {
  myworker.postMessage("hello, worker");
});

myworker.onmessage = function (message) {
  console.log(message);
};

bgButton.addEventListener("click", (event) => {
  if (document.body.style.background !== "green") {
    document.body.style.background = "green";
  } else {
    document.body.style.background = "blue";
  }
});
