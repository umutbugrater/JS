//KLAVYE EVENTLARI

//keypress : harf ve sayılarda tetiklenen eventtır.

//keydown : hepsinde çalışır.

//keyup : tuştan elini kaldırdığında çalışan eventtır.


// document.addEventListener("keydown",run);

// function run(e){
//   console.log(e.keyCode);
//   if(e.keyCode ==116){ //f5 bastığında
//     alert("Sayfa yenileme engellendi!");
//   }

//   e.preventDefault(); //yönlendirmeyi engelliyor
// }


const cardTitle = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoName");

input.addEventListener("keyup",run);


function run(e){
    cardTitle.textContent = e.target.value;
}



