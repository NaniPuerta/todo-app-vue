<template>
  <ul class="todo-list">
    <TodoListElement v-for="item in todos" :key="item.id" :item="item" />
  </ul>
</template>

<script>
  import { mapState } from 'vuex';
  import TodoListElement from './TodoListElement.vue';
  export default {
    name: 'AllTodos',
    components: { TodoListElement },
    computed: {
      ...mapState(['todos']),
    },
  };
</script>

<style scoped></style>
