<template>
  <div class="wrapper">
    <Header />
    <Todo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Todo from '@/components/Todo.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Todo,
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

p {
  font-family: 'Roboto', sans-serif;
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
