<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="What needs to be done?" autofocus />
    </header>
    <TheTodoList />
  </section>
</template>

<script>
  import TheTodoList from '@/components/TheTodoList.vue';
  export default {
    components: { TheTodoList },
  };
</script>

<style>
  @import '../node_modules/todomvc-common/base.css';
  @import '../node_modules/todomvc-app-css';
</style>

