import { reactive, readonly } from 'vue';
import { v4 as uuid } from 'uuid';
import Todo from '@/@types/Todo';

const state = reactive({
  todos: [{ id: uuid(), content: 'My first todo', isDone: false }] as Todo[],
});

const addTodo = (todoContent: string) => {
  state.todos.push({ id: uuid(), content: todoContent, isDone: false });
};

export const todoStore = readonly({
  state,
  addTodo,
});
