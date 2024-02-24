//? FETCH API

// callback - promise
//ajax(XMLHttpRequest) - fetch api

// function getStudents(url) {
//   // const promise = fetch(url);
//   // console.log(promise);

//   //Promise<Response> tipinde olduğu için 2 kere then yazmak zorundayız.
//   fetch(url)
//     .then((response) => {
//       return response.json(); //promise
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// getStudents("students.json");
//-----------------------------------

function getData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => {
      console.log(err);
    });
}

getData("https://jsonplaceholder.typicode.com/users");

function getData(url) {
  return fetch(url);
}

getData("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
  });
