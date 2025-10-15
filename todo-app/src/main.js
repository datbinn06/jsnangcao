import { TodoManager } from "./todo";
import { UIManager } from "./ui";

class TodoApp {
    constructor() {
        this.todoManager = new TodoManager();
        this.uiManager = new UIManager();
    }
    init() {
        this.uiManager.init();
    }
}
// Initialize the app
const todoApp = new TodoApp();
window.todoApp = todoApp;