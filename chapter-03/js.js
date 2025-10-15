// const myFriends = ["Dat", "Thang", "Huy", "Hieu", "Long"];
// //                 a
// const listElement = document.getElementById("listElement");

// let content = "";
// for
// for (let index = 0; index < myFriends.length; index++) {
//     content = content + `<li>${myFriends[index]}</li>`;
// }

// for...in
// for (let index in myFriends) {
//     content = content + `<li>${myFriends[index]}</li>`;
// }

// for...of
// for (let friend of myFriends) {
//     content = content + `<li>${friend}</li>`;
// }

// forEach
// syntax: array.forEach(function(item, index)){}
// myFriends.forEach((friend, index) => {
//     content = content + `<li>${friend} -  ${index}</li>`;
// });

// map, filter, find, reduce, every, some

// map
// syntax: array.map(function(item, index)){}
// const newFriends = myFriends
//     .map((friend) => {
//         return `<li>${friend}</li>`;
//     })
//     .join("");
// filter
// const newFriends = myFriends
//     .filter((friend) => friend !== "Huy")
//     .map((friend) => `<li>${friend}</li>`)
//     .join("");

// console.log("Mảng cũ", myFriends);
// console.log("Mảng mới", newFriends);
// listElement.innerHTML = newFriends;
// ================================================

// const todosListData = [
//     { id: 1, name: "Chơi game", completed: false },
//     { id: 2, name: "Học Javascript", completed: false },
//     { id: 3, name: "Học React", completed: false },
//     { id: 4, name: "Học NodeJS", completed: false },
//     { id: 5, name: "Học MongoDB", completed: false },
//     { id: 6, name: "Học MySQL", completed: false },
//     { id: 7, name: "Học PostgreSQL", completed: false },
//     { id: 8, name: "Học Redis", completed: false },
// ];

// const todoList = document.getElementById("todoList");
// console.log(todoList);

// main.js

// ===== DOM Elements =====
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
const emptyState = document.getElementById("emptyState");
const clearCompleted = document.getElementById("clearCompleted");
const filterBtns = document.querySelectorAll(".filter-btn");

// ===== State =====
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let filter = "all"; // all | active | completed

// ===== Utils =====
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function updateCount() {
  const count = todos.filter((t) => !t.completed).length;
  todoCount.textContent = `${todos.length} công việc (${count} chưa hoàn thành)`;
}

// ===== Render =====
function renderTodos() {
  todoList.innerHTML = "";

  let filteredTodos = [];
  if (filter === "all") {
    filteredTodos = todos;
  } else if (filter === "active") {
    filteredTodos = todos.filter((t) => !t.completed);
  } else {
    filteredTodos = todos.filter((t) => t.completed);
  }

  if (filteredTodos.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }

  filteredTodos.forEach((todo) => {
    const item = document.createElement("div");
    item.className =
      "todo-item p-4 hover:bg-gray-50 fade-in flex items-center gap-3" +
      (todo.completed ? " completed" : "");

    // Nút toggle completed
    const toggleBtn = document.createElement("button");
    toggleBtn.className =
      "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 " +
      (todo.completed
        ? "bg-green-500 border-green-500 text-white"
        : "border-gray-400 text-transparent");
    toggleBtn.innerHTML = "✓";
    toggleBtn.addEventListener("click", () => toggleTodo(todo.id));

    // Nội dung
    const content = document.createElement("div");
    content.className = "flex-1";
    content.innerHTML = `
      <p class="text-gray-800">${todo.text}</p>
      <p class="text-xs text-gray-500 mt-1">${todo.date}</p>
    `;

    // Nút Edit
    const editBtn = document.createElement("button");
    editBtn.className =
      "p-2 text-blue-500 hover:bg-blue-100 rounded-lg transition-colors duration-200";
    editBtn.innerHTML = "✏️";
    editBtn.addEventListener("click", () => editTodo(todo.id));

    // Nút Delete
    const deleteBtn = document.createElement("button");
    deleteBtn.className =
      "p-2 text-red-500 hover:bg-red-100 rounded-lg transition-colors duration-200";
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.addEventListener("click", () => deleteTodo(todo.id));

    const actionGroup = document.createElement("div");
    actionGroup.className = "flex gap-2";
    actionGroup.append(editBtn, deleteBtn);

    item.append(toggleBtn, content, actionGroup);
    todoList.appendChild(item);
  });

  // Hiện nút "Clear Completed"
  const hasCompleted = todos.some((t) => t.completed);
  clearCompleted.classList.toggle("hidden", !hasCompleted);

  updateCount();
}

// ===== Handlers =====
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();
  if (!text) return;

  const todo = {
    id: Date.now(),
    text,
    completed: false,
    date: new Date().toLocaleDateString("vi-VN"),
  };

  todos.push(todo);
  saveTodos();
  renderTodos();
  todoInput.value = "";
});

function toggleTodo(id) {
  todos = todos.map((t) =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
  saveTodos();
  renderTodos();
}

function editTodo(id) {
  const todo = todos.find((t) => t.id === id);
  if (!todo) return;
  const newText = prompt("Chỉnh sửa công việc:", todo.text);
  if (newText && newText.trim() !== "") {
    todo.text = newText.trim();
    saveTodos();
    renderTodos();
  }
}

function deleteTodo(id) {
  todos = todos.filter((t) => t.id !== id);
  saveTodos();
  renderTodos();
}

clearCompleted.addEventListener("click", () => {
  todos = todos.filter((t) => !t.completed);
  saveTodos();
  renderTodos();
});

// Bộ lọc
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) =>
      b.classList.remove("bg-blue-500", "text-white", "active")
    );
    filterBtns.forEach((b) =>
      b.classList.add("bg-gray-200", "text-gray-700")
    );

    btn.classList.add("bg-blue-500", "text-white", "active");
    btn.classList.remove("bg-gray-200", "text-gray-700");

    if (btn.id === "filterAll") filter = "all";
    if (btn.id === "filterActive") filter = "active";
    if (btn.id === "filterCompleted") filter = "completed";

    renderTodos();
  });
});

// ===== Init =====
renderTodos();

