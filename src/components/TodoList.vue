<template>
  <div class="todo-list">
    <Todo v-for="todo in state.todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Todo from '@/components/Todo.vue';
import { todoStore } from '@/providers/todoStore';

export default defineComponent({
  name: 'todo-list',
  components: {
    Todo,
  },
  setup() {
    const { state } = todoStore;

    return { state };
  },
});
</script>

<style></style>
