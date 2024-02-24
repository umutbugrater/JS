// Element silmek

const todoList = document.querySelector(".list-group");
const todos = document.querySelectorAll(".list-group-item");
const todo1 = document.querySelector(".list-group-item");

// todos[0].remove();
// todos[3].remove();
// console.log(todos)

// todos[todos.length-1].remove()

//--------------------------------------

// todoList.removeChild(0) // index vererek olmaz. Node türünde istiyor todos NodeList şeklinde dönüyor
// todoList.removeChild(todos[2])
// todoList.removeChild(todos[todos.length-1])
// todoList.removeChild(todoList.lastElementChild)
console.log(todoList.lastElementChild)
console.log(todo1)