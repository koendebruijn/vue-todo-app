import { reactive, readonly } from 'vue';
import { v4 as uuid } from 'uuid';
import Todo from '@/@types/Todo';

const state = reactive({
  todos: [
    { id: uuid(), content: 'My first todo', isDone: false },
    { id: uuid(), content: 'My second todo', isDone: true },
  ] as Todo[],
});

const addTodo = (todoContent: string) => {
  state.todos.push({ id: uuid(), content: todoContent, isDone: false });
};

const handleDone = (id: string) => {
  const index = state.todos.findIndex(todo => todo.id === id);
  state.todos[index].isDone = !state.todos[index].isDone;
};

const handleDelete = (id: string) => {
  state.todos = state.todos.filter(todo => todo.id !== id);
};

export const todoStore = readonly({
  state,
  addTodo,
  handleDone,
  handleDelete,
});
