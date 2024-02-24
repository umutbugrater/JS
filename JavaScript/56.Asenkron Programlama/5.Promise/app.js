//? --------- PROMISE ------------
/*
  1- pending 
  2- fullfiiled(resolve)  .then()
  3- rejected             .catch()
*/

// let check = false;

// const promise1 = new Promise((resolve, reject) => {
//   if (check) resolve("Promise başarılı");
//   else reject("Promise başarısızzz");
// });

// console.log(promise1)
//-------------------------------------------
//Asenkron yapıları senkrona çevirmek için kullanıyoruz
//CALLBACK LERİN ALTERNATİFİ

// let check = true;
// function createPromise() {
//   return new Promise((resolve, reject) => {
//     if (check) {
//       resolve("Promise te herhangi bir sıkıntı yok.");
//     } else {
//       reject("Sıkıntı varr!!");
//     }
//   });
// }

// createPromise()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => console.log("Her zxaman çalışıor"));
//-------------------------------------------

//? PROMISE + XMLHTTPREQUEST
//? yerel dosyadaki kendi oluşturduğumuz verileri çekerek yaptık
// function readStudents(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.addEventListener("readystatechange", () => {
//       try {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//           resolve(JSON.parse(xhr.responseText));
//         }
//       } catch (error) {
//         reject(error);
//       }
//     });

//     xhr.open("GET", url);
//     xhr.send();
//   });
// }

// readStudents("students.json")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
//----------------------------------------------

// function getUsers(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.addEventListener("readystatechange", () => {
//       try {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//           resolve(JSON.parse(xhr.responseText));
//         }
//       } catch (error) {
//         reject(error);
//       }
//     });
//     xhr.open("GET", url);
//     xhr.send();
//   });
// }

// function getCommentsByUserId(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.addEventListener("readystatechange", () => {
//       try {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//           resolve(JSON.parse(xhr.responseText));
//         }
//       } catch (error) {
//         reject(error);
//       }
//     });
//     xhr.open("GET", url);
//     xhr.send();
//   });
// }
// getUsers("https://jsonplaceholder.typicode.com/users/3")
//   .then((data) => {
//     console.log(data);
//     // data.forEach(user => {
//     //   console.log(user.name)
//     // });
//     // console.log("daha sonra farklı asenkron kodlarını yazabilirz.")
//     return getCommentsByUserId(
//       "https://jsonplaceholder.typicode.com/comments/" + data.id
//     );
//     // getCommentsByUserId("https://jsonplaceholder.typicode.com/comments/"+data.id)
//     // .then((res)=> console.log(res))
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => {
//     //Mail yoluyla mesaj atma kodlarını yazabilirz
//   });
//_-------------------------------------------

const p1 = Promise.resolve("birinci promise başarılı");
const p2 = Promise.resolve("ikinci promise başarılı");
const p3 = new Promise((resolve, reject) => {
  resolve("ücüncü promise başarılı");
});
const p4 = Promise.reject("hata var")
//Tüm promisler başarılıysa then'e girer. Biri bile hatalıysa catch'e girer
Promise.all([p1, p2, p3,p4])
.then((res) => {
  // console.log(res);
  for(let value of res){
    console.log(value)
  }
})
.catch((err)=>console.log(err))
