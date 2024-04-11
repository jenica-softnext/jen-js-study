/***********************/
/* Example of Promises */
/***********************/

// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if (a == 3) {
//     resolve("Success");
//   } else {
//     reject("Failed");
//   }
// });

// p.then((message) => {
//   console.log(`This is in the 'then' ${message}`);
// }).catch((message) => {
//   console.log(`This is in the 'catch' ${message}`);
// });

/***************************/
/* Example using callbacks */
/***************************/

// const userLeft = false;
// const userWatchingCatMeme = true;

// function watchTutorialCallback(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: "User Left",
//       message: ":(",
//     });
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: "User Watching Cat Meme",
//       message: "WebDevSimplified < Cat",
//     });
//   } else {
//     callback("Thumbs up and Subscribe");
//   }
// }

// watchTutorialCallback(
//   (message) => {
//     console.log("Success: " + message);
//   },
//   (error) => {
//     console.log(error.name + " " + error.message);
//   }
// );

/************************************************/
/* Example using callbacks converted to Promises*/
/************************************************/

// let myPromise = new Promise((myResolve, myReject) => {
//   let myUserLeft = false;
//   let myUserWatchingCatMeme = false;

//   if (myUserLeft) {
//     myReject({
//       name: "User left",
//       message: ":(",
//     });
//   } else if (myUserWatchingCatMeme) {
//     myReject({
//       name: "User watching cat memes",
//       message: "WebDevSimplified < Cat",
//     });
//   } else {
//     myResolve("Thumbs up and Subscribe!");
//   }
// });

// myPromise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error.name + error.message);
//   });

// // solution 2

// let myUserLeft = false;
// let myUserWatchingCatMeme = false;

// function myPromise() {
//   return new Promise((myResolve, myReject) => {
//     if (myUserLeft) {
//       myReject({
//         name: "User left",
//         message: ":(",
//       });
//     } else if (myUserWatchingCatMeme) {
//       myReject({
//         name: "User watching cat memes",
//         message: "WebDevSimplified < Cat",
//       });
//     } else {
//       myResolve("Thumbs up and Subscribe!");
//     }
//   });
// }

// myPromise()
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error.name + error.message);
//   });

// //   solution 2 end

/************************************************/
/* Promise methods */
/************************************************/

// // // always resolved not rejected

// const recordVideoOne = new Promise((resolve, reject) => {
//   resolve("Video 1 Recorded");
// });

// const recordVideoTwo = new Promise((resolve, reject) => {
//   resolve("Video 2 Recorded");
// });

// const recordVideoThree = new Promise((resolve, reject) => {
//   resolve("Video 3 Recorded");
// });

// // // runs all the promises at the same time
// // Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
// //   (messages) => {
// //     console.log(...messages);
// //   }
// // );

// // // race will return the first one that will be completed
// Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
//   (message) => {
//     console.log(message);
//   }
// );

/***************/
/* Async Await */
/***************/

// example with promises only
function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`);
    if (location === "Google") {
      resolve("Google says hi");
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log(`Processing response`);
    resolve(`Extra Information + ${response}`);
  });
}

// makeRequest("Google")
//   .then((response) => {
//     console.log("Response received");
//     return processRequest(response);
//   })
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   makeRequest("Google")
//   .then((response) => {
//     console.log("Response received");
//     return processRequest(response);
//   })
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// example with promises but without then, catch...
// async - to tell javascript that this function is asynchronous
async function doWork() {
  try {
    const response = await makeRequest("Google"); //await - the code should wait until the makeRequest function is finished, then afterwards, execute the next code
    console.log("response received");
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
}
doWork();

// how to handle errors with async/await
