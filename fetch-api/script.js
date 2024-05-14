// from Web Dev Simplified - "Learn Fetch API In 6 Minutes" https://www.youtube.com/watch?v=cuEtnrL9-H0

// fake API just for example

fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json", //tell fetch that you are gonna be passing json
  },
  body: JSON.stringify({
    name: "User 1",
  }),
})
  .then((res) => res.json()) // response object
  .then((data) => console.log(data)) // actual data
  .catch((err) => console.log(err));
// fetch is promise base so we can use asyn and await or .then, .catch, etc..
// fetch always succeeds no matter what, netwro error, connection to internet
