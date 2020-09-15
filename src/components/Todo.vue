<template>
  <div :class="{ todo, 'todo--done': todo.isDone }">
    <p class="todo__content">{{ todo.content }}</p>
    <div class="todo__icons">
      <div
        class="todo__icon-container todo__icon-container--success"
        @click.prevent="handleDone(todo.id)"
      >
        <icon icon="check" class="todo__icon" />
      </div>
      <div
        class="todo__icon-container todo__icon-container--danger"
        @click.prevent="handleDelete(todo.id)"
      >
        <icon icon="trash-alt" class="todo__icon" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Todo from '@/@types/Todo';
import { todoStore } from '@/providers/todoStore';

export default defineComponent({
  name: 'todo',
  props: {
    todo: {
      required: true,
      type: Object as PropType<Todo>,
    },
  },
  setup() {
    const { handleDone, handleDelete } = todoStore;

    return { handleDone, handleDelete };
  },
});
</script>

<style scoped lang="scss">
.todo {
  margin: 1em 0;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transition: 0.2s all ease-in-out;

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  &__content {
    padding: 1em 0 1em 1em;
    height: 50px;
  }

  &__icon-container {
    display: inline-block;
    height: 100%;
    width: 50px;
    position: relative;

    &--success {
      background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%);
    }
    &--danger {
      background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);
    }
  }

  &__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 20px;
    color: white;
  }

  &--done {
    opacity: 0.25;
    text-decoration: line-through;
    filter: grayscale(100%);

    transition: 0.2s all ease-in-out;
  }
}
</style>
