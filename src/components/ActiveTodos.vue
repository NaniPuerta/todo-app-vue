<template>
  <ul class="todo-list">
    <TodoListElement v-for="item in activeTodos" :key="item.id" :item="item" />
  </ul>
</template>

<script>
  import { mapState } from 'vuex';
  import TodoListElement from './TodoListElement.vue';
  export default {
    name: 'ActiveTodos',
    components: { TodoListElement },
    computed: {
      ...mapState(['todos']),
      activeTodos() {
        return this.todos?.filter((item) => !item.completed);
      },
    },
  };
</script>
