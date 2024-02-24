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
function getUserId() {
  setTimeout(() => {
    //Servise gittik ve cevabı aldık.
    return 5;
  }, 1000);
}

// Asenkron yapı olduğu için belli bir süre bekleyip userId yi almamız gerekiyor. 
// Fakat biz senkron yapı olarak çağırdığımız için, hemen veri gelmesini istediğimiz için 
// undefined olarak geliyor. Bu yüzden konsolda hiçbir şey gözükmüyor.

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

let userId = getUserId();
getPostByUserId(userId);
