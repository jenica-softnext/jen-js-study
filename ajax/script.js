// make a simple get request to read the content of a text file into the html body tag

// 1. make an xmlhttprequest
const xhr = new XMLHttpRequest(); //hmlhttprequest object

// represents the current states of the request ( 0 to 4 )
console.log(xhr.readyState);
// 0 - unsent
// 1 - opened
// 2 - headers received
// 3 - loading
// 4 - done

// 2. define an event listener or handles when the ready state changes
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    // check if status ok - 200
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    }

    //  check if the response codes is 404 not found

    if (xhr.status === 404) {
      console.log("file not found");
    }
  }
};

// make the request (open and send it)

//xhr.open take 3 arguments: type of request, url of the file, weather the request will be asynchronous or not (if true: the request will not interupt the remaining js codes)

xhr.open("GET", test.txt, true);
