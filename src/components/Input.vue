<template>
  <form class="form" @submit.prevent="handleSubmit()">
    <input
      class="form__input"
      type="text"
      name="content"
      placeholder="Type here to add a todo"
      v-model="content"
    />
    <button class="form__button" type="submit">
      <icon class="form__button-icon" icon="plus-circle" />
    </button>
  </form>
</template>

<script lang="ts">
import { todoStore } from '@/providers/todoStore';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'app-input',
  setup() {
    const { addTodo } = todoStore;
    const content = ref('');

    const handleSubmit = () => {
      addTodo(content.value);
      content.value = '';
    };

    return {
      content,
      handleSubmit,
    };
  },
});
</script>

<style scoped lang="scss">
.form {
  margin-top: 2em;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  &__input {
    width: calc(100% - 100px);
    border: none;
    padding: 1em 0 1em 1em;
    height: 50px;
  }

  &__button {
    width: 100px;
    border: none;
    border-radius: none;
    color: white;
    background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%);
  }

  &__button-icon {
    width: 25px;
    height: 100%;
  }
}
</style>
