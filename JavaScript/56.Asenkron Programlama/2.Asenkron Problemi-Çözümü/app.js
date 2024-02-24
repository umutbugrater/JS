// ASENKRON PROBLEMI

//http istekleri

const users = [
  {
    userId: 5,
    post: "Umut Post 1",
  },
  {
    userId: 5,
    post: "Umut Post 2",
  },
  {
    userId: 5,
    post: "Umut Post 3",
  },
  {
    userId: 6,
    post: "Ali Post 1",
  },
  {
    userId: 7,
    post: "Veli Post 1",
  },
];
//userId
//post by userId

//Senkrona çevirmemiz lazım
function getUserId(callback) {
  setTimeout(() => {
    //Servise gittik ve cevabı aldık.
   let userId = 5;
   callback(userId)
  }, 1000);
}

function getPostByUserId(userId) {
    console.log(userId)
  setTimeout(() => {
    users.forEach((user) => {
      if (user.userId === userId) {
        console.log(user.post);
      }
    });
  }, 500);
}

getUserId(getPostByUserId)
// let userId = getUserId();
// getPostByUserId(userId);
