import { derived, writable } from 'svelte/store';
import { v4 as uuid } from '@lukeed/uuid';

import type { AddTodo, Todo } from '../types';

export const contextKey = Symbol('todo');

export const createTodoStore = () => {
  const todos = writable<Todo[]>([]);

  const add = (todo: AddTodo) => {
    const id = uuid();

    todos.update((todos) => [...todos, { id, ...todo }]);
  };

  const remove = (id: string) => {
    todos.update((todos) => todos.filter((todo) => todo.id !== id));
  };

  const reset = () => {
    todos.set([]);
  };

  const amount = derived(todos, ($todos) => $todos.length);

  return {
    todos,
    add,
    remove,
    reset,
    amount,
  };
};

export type Store = ReturnType<typeof createTodoStore>;
