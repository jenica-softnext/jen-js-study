// the worker object is the global object

self.onmessage = function (message) {
  let sum = 0;
  for (let i = 0; i < 10000000000; i++) sum += i;
  postMessage(`The final sum is ${sum}`);
};
