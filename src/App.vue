<template>
  <div class="wrapper">
    <Header />
    <Input />
    <TodoList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import TodoList from '@/components/TodoList.vue';
import Input from '@/components/Input.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    TodoList,
    Input,
  },
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Roboto&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

p,
input::placeholder,
input {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: white;
  font-family: 'Poppins', sans-serif;
}

.wrapper {
  width: 90%;
  margin: 0 auto;
  padding: 2em 0;
}
</style>
