<template>
  <div class="todo">
    <p class="todo__content">{{ todo.content }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Todo from '@/@types/Todo';

export default defineComponent({
  name: 'todo',

  props: {
    todo: {
      required: true,
      type: Object as PropType<Todo>,
    },
  },
});
</script>

<style scoped lang="scss">
.todo {
  margin: 1em 0;
  background-color: white;
  width: 100%;
  padding: 1em 0 1em 1em;
}
</style>
