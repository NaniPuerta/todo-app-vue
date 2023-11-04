<!-- main app layout -->
<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        placeholder="What needs to be done?"
        autofocus
        v-model.trim="newTodoInputValue"
        @keypress.enter="handleAddTodo"
      />
    </header>
    <section class="main" v-if="todos?.length > 0">
      <input id="toggle-all" class="toggle-all" type="checkbox" @click="toggleAll" />
      <label for="toggle-all">Mark all as complete</label>
      <!-- router component to show filtered data by route -->
      <RouterView />
    </section>
    <footer class="footer" v-if="todos?.length > 0">
      <span class="todo-count">
        <strong>{{ todos?.length }}</strong> {{ todos?.length === 1 ? 'item' : 'items' }} left
      </span>
      <ul class="filters">
        <li>
          <router-link to="/all" :class="{ selected: $route.name === 'all' }"> All </router-link>
        </li>
        <li>
          <router-link to="/active" :class="{ selected: $route.name === 'active' }">
            Active
          </router-link>
        </li>
        <li>
          <router-link to="/completed" :class="{ selected: $route.name === 'completed' }">
            Completed
          </router-link>
        </li>
      </ul>
      <button v-if="isAnyCompleted" class="clear-completed" @click="clearCompleted">
        Clear completed
      </button>
    </footer>
  </section>
</template>

<script>
  import { mapMutations, mapState } from 'vuex';
  export default {
    data() {
      return {
        newTodoInputValue: '',
      };
    },
    computed: {
      ...mapState(['todos']),
      isAnyCompleted() {
        return this.todos?.filter((item) => item.completed)?.length !== 0;
      },
    },
    methods: {
      ...mapMutations(['addTodo', 'toggleAll', 'clearCompleted']),
      handleAddTodo() {
        if (this.newTodoInputValue !== '') {
          this.addTodo({
            id: this.todos.length + 1,
            title: this.newTodoInputValue,
            completed: false,
          });
          this.newTodoInputValue = '';
        }
      },
    },
  };
</script>

<style>
  @import '../node_modules/todomvc-common/base.css';
  @import '../node_modules/todomvc-app-css/index.css';
</style>

