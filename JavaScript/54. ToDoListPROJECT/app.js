// TÜm elementleri seçmek

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");

let todos = [];

runEvents();

function runEvents() {
  form.addEventListener("submit", addTodo);
  document.addEventListener("DOMContentLoaded", pageLoaded);
  secondCardBody.addEventListener("click", removeTodoUI);
  clearButton.addEventListener("click", allTodosDeleteEverywhere);
  filterInput.addEventListener("keyup", filter);
}

function pageLoaded() {
  checkTodosFromStorage(); //todos dizisini güncel halini çekmek için tekrar çağırdık
  todos.forEach(function (todo) {
    addTodoToUI(todo);
  });
}

function filter(e) {
  const filterValue = e.target.value.toLowerCase().trim();
  const todoListesi = document.querySelectorAll(".list-group-item");

  if (todoListesi.length > 0) {
      todoListesi.forEach(function (todo) {
        console.log(todo)
      if (todo.textContent.toLowerCase().trim().includes(filterValue)) {
        todo.setAttribute("style","display : block");
      }else {
        todo.setAttribute("style","display : none !important");
      }
    });
  } else {
    showAlert("warning", "Filtreleme yapmak için en az 1 todo olmalıdır");
  }
}

function allTodosDeleteEverywhere() {
  const todoListesi = document.querySelectorAll(".list-group-item");
  // todoList.remove() //li olarak teker teker değilde groupunu silme
  if (todoListesi.length > 0) {
    //Ekrandan silme
    todoListesi.forEach(function (todo) {
      todo.remove();
    });

    //Storage dan Silme
    todos = [];
    localStorage.setItem("todos", JSON.stringify(todos));
    showAlert("success", "Başarılı bir şekilde silindi..");
  } else {
    showAlert("warning", "Silmek için en az bir todo olmalıdır..");
  }
}

function removeTodoUI(e) {
  // console.log(e.target) // secondCardBody de tıklanıldığı yerin html kodlarını veriyor
  if (e.target.className === "fa fa-remove") {
    //Ekrandan silme
    const todo = e.target.parentElement.parentElement;
    todo.remove();

    //Storage 'dan silme
    removeTodoToStorage(todo.textContent);
    showAlert("success", "Todo başarıyla silindi..");
  }
}

function removeTodoToStorage(removeTodo) {
  checkTodosFromStorage();
  todos.forEach(function (todo, index) {
    if (removeTodo === todo) {
      console.log(todo + "-" + index);
      todos.splice(index, 1);
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo(e) {
  const inputText = addInput.value.trim();
  if (inputText == null || inputText == "") {
    showAlert("warning", "Lütfen boş bırakmayınız.");
  } else {
    //Arayüze ekleme
    addTodoToUI(inputText);
    //storage ekleme
    addTodoStorage(inputText);
    showAlert("success", "Todo Eklendi");
  }

  e.preventDefault();
}

function addTodoToUI(newTodo) {
  /*
     <li class="list-group-item d-flex justify-content-between">Todo 1
                            <a href="#" class="delete-item">
                                <i class="fa fa-remove"></i>
                            </a>
                        </li>
 */

  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between";
  li.textContent = newTodo;

  const a = document.createElement("a");
  a.href = "#";
  a.className = "delete-item";

  const i = document.createElement("i");
  i.className = "fa fa-remove";

  a.appendChild(i);
  li.appendChild(a);
  todoList.appendChild(li);

  addInput.value = "";
}

function addTodoStorage(newTodo) {
  checkTodosFromStorage();
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function checkTodosFromStorage() {
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
}

function showAlert(type, message) {
  {
    /* <div class="alert alert-warning" role="alert">
                      This is a warning alert-check it out
                    </div> */
  }
  const div = document.createElement("div");
  //   div.className="alert alert-"+type;
  div.className = `alert alert-${type} mt-3`;
  div.role = "alert";
  div.textContent = message;

  firstCardBody.appendChild(div);

  setTimeout(function () {
    div.remove();
  }, 2500);
}
