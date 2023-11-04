import { createStore } from 'vuex';
const STORAGE_KEY = 'todos_storage';

// save todo list to local storage for persistence
const save = (todos) => localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));

export default createStore({
  state: {
    todos: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'), // load the saved list from the local storage if it exists
  },
  mutations: {
    /**
     * Adds a todo item to the list
     * 
     * @param {*} state Vuex store state prop
     * @param {object} todo The item to add. Must be an object of the form { id: number, title: string, completed: bool }
     */
    addTodo(state, todo) {
      state.todos.push(todo);
      save(state.todos);
    },
    /**
     * Edits an existing todo
     * 
     * @param {*} state Vuex store state prop
     * @param {object} param An dictionary containing the id and the new title of the todo item to edit 
     */
    editTodo(state, { id, title }) {
      state.todos.find((item) => item.id === id).title = title;
      save(state.todos);
    },
    /**
     * Toggles a todo's completed state
     *  
     * @param {*} state Vuex store state prop
     * @param {number} id The id of the todo item
     */
    toggleTodo(state, id) {
      const todo = state.todos.find((item) => item.id === id);
      todo.completed = !todo.completed;
      save(state.todos);
    },
    /**
     * Deletes a todo item from the list
     * 
     * @param {*} state Vuex store state prop
     * @param {number} id The id of the item to delete
     */
    clearTodo(state, id) {
      const index = state.todos.findIndex((item) => item.id === id);
      state.todos.splice(index, 1);
      save(state.todos);
    },
    /**
     * Sets the same completed state to all todos in the list, true if at list one todo is active, false otherwise
     * 
     * @param {*} state Vuex store state prop
     */
    toggleAll(state) {
      const allCompleted =
        state.todos.filter((item) => item.completed).length === state.todos.length;
      state.todos.forEach((item) => {
        item.completed = !allCompleted;
      });
      save(state.todos);
    },
    /**
     * Deletes all completed todos from the list 
     * 
     * @param {*} state Vuex store state prop
     */
    clearCompleted(state) {
      const active = state.todos.filter((item) => !item.completed);
      state.todos = active;
      save(state.todos);
    },
  },
});

