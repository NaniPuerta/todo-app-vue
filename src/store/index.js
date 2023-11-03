import { createStore } from 'vuex';
const STORAGE_KEY = 'todos_storage';

const save = (todos) => localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));

export default createStore({
  state: {
    todos: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
      save(state.todos);
    },
    editTodo(state, { id, title }) {
      state.todos.find((item) => item.id === id).title = title;
      save(state.todos);
    },
    toggleTodo(state, id) {
      const todo = state.todos.find((item) => item.id === id);
      todo.completed = !todo.completed;
      save(state.todos);
    },
    clearTodo(state, id) {
      const index = state.todos.findIndex((item) => item.id === id);
      state.todos.splice(index, 1);
      save(state.todos);
    },
    toggleAll(state) {
      const allCompleted =
        state.todos.filter((item) => item.completed).length === state.todos.length;
      state.todos.forEach((item) => {
        item.completed = !allCompleted;
      });
      save(state.todos);
    },
    clearCompleted(state) {
      const active = state.todos.filter((item) => !item.completed);
      state.todos = active;
      save(state.todos);
    },
  },
});

