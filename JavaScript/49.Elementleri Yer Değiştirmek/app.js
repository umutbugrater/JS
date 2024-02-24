// Elementleri Yer Değiştirmek

const cardBody = document.querySelectorAll(".card-body")[1];

//  <h5 class="card-title">Todo Listesi</h5>

const newTitle = document.createElement("h3");
newTitle.className = "card-title";
newTitle.textContent = "Todo Listesi - YEni";

console.log(cardBody.childNodes);

// cardBody.replaceChild(newTitle,cardBody.childNodes[1])  //? Node türünde istiyor bu yüzden cardboyd.childnotes nodelist türünde döndürüyor

// cardBody.childNodes[1].replaceWith(newTitle)
