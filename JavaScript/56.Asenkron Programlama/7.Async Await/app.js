//? Async Await
// Async ile işaretlersek bir fonksiyonu Promise olarak döner. Await ile normale döndürürüz
// async function hello() {
//   return "Hellooooo!";
// }

// // console.log(hello()) //fonksiyonu async belirttiğimiz için Promise türüne döndü
// hello()
// .then((res)=>console.log(res))
//----------------------------------

// document.querySelector("#button").addEventListener("click", () => {
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => response.json())
//     .then((post) => {
//       // postların geldiği yer
//       // console.log(post);
//       fetch("https://jsonplaceholder.typicode.com/comments?postId=" + post.id)
//       // fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//         .then((response) => response.json())
//         .then((comments) => console.log(comments))
//         .catch((err) => console.log(err));
//     })
//     .catch((err) => console.log(err));
// });

//Async Await ile yapılışı

document.querySelector("#button").addEventListener("click",async () => {
  // const responsePost = await fetch("https://jsonplaceholder.typicode.com/posts/1")
  // const post = await responsePost.json()

  // const responseComment = await  fetch("https://jsonplaceholder.typicode.com/comments?postId=" + post.id);
  // const comments = await responseComment.json()

  const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
  const comments = await (await fetch("https://jsonplaceholder.typicode.com/comments?postId=" + post.id)).json()
  console.log(comments)
})