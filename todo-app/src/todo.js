import { DataManager } from "./data";

export class TodoManager {
    constructor() {
        this.dataManager = new DataManager();
    }
    addTodo(text) {
        if (!text.trim()) return false;
        const todo = {
            id: Date.now(),
            text: text.trim(),
            completed: false,
            createdAt: new Date().toISOString(),
        };
        // thêm todo vào danh sách
        this.dataManager.todos.push(todo);

        // lưu dữ liệu vào localStorage
        this.dataManager.saveTodos();
        return todo;
    }
    deleteTodo(id) {
        const newTodos = this.todos.filter((todo) => todo.id !== id);
        this.todos = newTodos;
        this.saveTodos();
        this.render();
    }
}