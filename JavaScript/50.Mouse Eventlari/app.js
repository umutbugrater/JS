const clearButton = document.querySelector("#todoClearButton");

clearButton.addEventListener("click",changeTitle);

function changeTitle(e) {
    console.log(e.type)
    console.log(e.target)
    console.log(e.target.textContent)
    console.log(e.target.className="")
}
//MOUSE EVENTLARI

//DOMContentLoaded
//load
//click
//dblclick
//mouseover
//mouseout
//mouseenter
//mouseleave

// document.addEventListener("DOMContentLoaded",run)

// window.addEventListener("load",run);

// function run(){
//     console.log("Sayfa Yüklendi");
// }

const cardTitle = document.querySelectorAll(".card-title")[1];
const cardBody = document.querySelectorAll(".card-body")[1];

cardBody.addEventListener("mouseover",run2);
cardBody.addEventListener("mouseout",run2);

cardBody.addEventListener("mouseenter",run2);
cardBody.addEventListener("mouseleave",run2);

function run2(e){
    console.log(e.type);
}