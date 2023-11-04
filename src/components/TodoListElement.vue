<template>
  <!-- the component element for each todo in the list -->
  <li :class="{ completed: item?.completed, editing: onEdit }" @dblclick="startEdition">
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        :checked="item?.completed"
        @click="toggleTodo(item.id)"
      />
      <label>{{ item?.title }}</label>
      <button class="destroy" @click="clearTodo(item.id)"></button>
    </div>
    <!-- input for editing the item -->
    <input
      id="edit"
      ref="edit"
      class="edit"
      v-model="inputValue"
      @keyup.enter="saveEdition"
      @keyup.esc="finishEdition"
      @blur="onBlur"
    />
  </li>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    name: 'TodoListElement',
    props: ['item'],
    data() {
      return {
        onEdit: false,
        inputValue: '',
      };
    },
    methods: {
      ...mapMutations(['editTodo', 'clearTodo', 'toggleTodo']),
      startEdition() {
        this.onEdit = true;
        this.inputValue = this.item.title;
        this.$nextTick(() => this.$refs.edit.focus());
      },
      saveEdition() {
        this.editTodo({ id: this.item.id, title: this.inputValue });
        this.finishEdition();
      },
      finishEdition() {
        this.inputValue = '';
        this.onEdit = false;
      },
      onBlur() {
        if (this.onEdit) this.saveEdition();
      },
    },
  };
</script>
