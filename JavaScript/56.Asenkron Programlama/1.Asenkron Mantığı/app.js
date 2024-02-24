/* 
1- Javascript senkron çalışan bir programlama dilidir.

------------Asenkron ÇALIŞMASINA SEBEP OLANLAR--------------
1- Timing
2- Event(Olay)
3- Http İsteklerinde
      -XmlHttpRequest
      -Fetch Api
      -Axios

--------- CALLBACK - PROMISE - ASYNC & AWAIT -----------
ASENKRON YAPILARI SENKRONA ÇEVİRİP YÖNETMEMİZE YARAYACAKLAR
*/

// selamla();
// console.log("1");
// console.log("2");
// console.log("UmUt");

// function selamla() {
//   console.log("Selam");
// }

//Asenkron
// setTimeout(() => {

// }, timeout);

console.log("UmUt");

setTimeout(() => {
  console.log("Süre doldu ve çalıştı");
}, 1000);

setTimeout(() => {
    console.log("500ms süre doldu ve çalıştı");
  }, 500);
  

console.log("   ter");
