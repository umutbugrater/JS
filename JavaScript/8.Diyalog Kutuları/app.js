/*
    --------DİYALOG KUTULARI---------
     - Alert
     - Prompt
     - Confirm
*/


// console.log(window);


// alert("İşleminize devam etmeden önce kaydetmelisiniz!");


//Prompt(); Kullanıcıdan değer alabiliyoruz...

//! KULLANICIDAN ALINAN DEĞERLER HER ZAMAN STRİNG DÖNER
// let isim = prompt("İsminizi Giriniz :");
// let yas  = prompt("Yaşınızı giriniz : ");

// console.log("İsminiz : " + isim);
// console.log("Yaşınız : "  + yas);

//? TÜR DÖNÜŞÜMLERİ adındaki konu ile Kullanıcıdan gelen string değerleri int çevirebilecez

// console.log(typeof isim);
// console.log(typeof yas);


let sonuc =confirm("Silmek istediğinize emin misiniz ?");
console.log(sonuc);