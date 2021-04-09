import { derived, writable } from 'svelte/store';
import { v4 as uuid } from '@lukeed/uuid';

import type { AddTodo, Todo } from '../types';

export const contextKey = Symbol('todo');

export const createTodoStore = () => {
  const todos = writable<Todo[]>([]);

  const add = (todo: AddTodo) => {
    const id = uuid();

    todos.update((todos) => [...todos, { id, isCompleted: false, ...todo }]);
  };

  const remove = (id: string) => {
    todos.update((todos) => todos.filter((todo) => todo.id !== id));
  };

  const reset = () => {
    todos.set([]);
  };

  const toggle = (id: string) => {
    todos.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }

        return todo;
      });
    });
  };

  const amount = derived(todos, ($todos) => $todos.length);

  const amountCompleted = derived(
    todos,
    ($todos) => $todos.filter((todo) => todo.isCompleted).length,
  );

  return {
    todos,
    add,
    remove,
    reset,
    amount,
    toggle,
    amountCompleted,
  };
};

export type Store = ReturnType<typeof createTodoStore>;
