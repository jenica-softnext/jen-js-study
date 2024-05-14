//callbacks
// example (add event listener)
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   console.log("You clicked me !");
// });

//promises
// example 1
// fetch("https://restcountries.com/v3.1/all")
//   .then((res) => res.json())
//   .then((data) => showCountries(data))
//   .catch((err) => console.log(err));

const showCountries = function (countries) {
  const btn = document.querySelector("button");
  btn.addEventListener("click", function () {
    countries
      .map((country) => [country.name.common, country.flags.png])
      .sort()
      .forEach(([country, flag]) => {
        document.querySelector("button").insertAdjacentHTML("afterend", `<div class = "country"><p>${country}</p><img src="${flag}" alt=""></div>`);
      });
  });
};

//example 2

//async and await
// the async keyword before function makes the function return a promise
// the await keyword only WORKS inside the async function
// fetch("https://restcountries.com/v3.1/all")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log("errors" + err.message));

const getData = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  useData(data);
};

getData();

const useData = function (data) {
  console.log(data);
};

async function testFunction() {}

console.log(testFunction());
