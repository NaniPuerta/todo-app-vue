<template>
  <ul class="todo-list">
    <TodoListElement v-for="item in completedTodos" :key="item.id" :item="item" />
  </ul>
</template>

<script>
  import { mapState } from 'vuex';
  import TodoListElement from './TodoListElement.vue';
  export default {
    name: 'CompletedTodos',
    components: { TodoListElement },
    computed: {
      ...mapState(['todos']),
      completedTodos() {
        return this.todos?.filter((item) => item.completed);
      },
    },
  };
</script>

<style scoped></style>
