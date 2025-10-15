// lưu danh sách todos
export function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// lấy danh sách todos
export function loadTodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  return todos;
}
