import { reactive, readonly } from 'vue';
import { v4 as uuid } from 'uuid';
import Todo from '@/@types/Todo';

const state = reactive({
  todos: [] as Todo[],
});

const addTodo = (todoContent: string) => {
  state.todos.push({ id: uuid(), content: todoContent, isDone: false });
};

export const TodoStore = readonly({
  state,
  addTodo,
});
