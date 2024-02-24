//CALLBACK NEDİR ?

// timing - event - http istekleri

//callback - promise - async await

//Callback : bir fonksiyonu bir fonksiyona parametre geçerek 
//asenkron yapıyı senkrona çeviririz.


// function getName(callback) {
//     setTimeout(() => {
//         //servisten ismimi getirdi.
//        console.log("Umut")
//        let name = "UMUT"
//        callback(name);
//     }, 1000);
// }

// function getSurname(name) {
//     setTimeout(() => {
//        console.log("TER")
//        let surname = "ter"
//        console.log(name , surname)
//     }, 500);
// }

// getName(getSurname)

function getName(callback) {
    setTimeout(() => {
        //servisten ismimi getirdi.
        let name = "Enes"; //web servisten geldi.
        callback(name);
    }, 1000);
}

function getSurname(name, callback) {
    setTimeout(() => {
        let surname = "Bayram"; // name 'e göre soyismi buldu.
        callback(surname)
    }, 500);
}

const a = () => {

}

function getAge(name, surname, callback) {
    setTimeout(() => {
        let age = 23; //ismi Enes ve Soyisimi Bayram olanı servisten yaşını getirdi.
        callback(age);
    }, 300);
}

getName((name) => {
    getSurname(name, (surname) => {
        getAge(name, surname, (age) => {
            console.log(name, surname, age);
        })
    })
})

