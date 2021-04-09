import { derived, writable } from 'svelte/store';
import { v4 as uuid } from '@lukeed/uuid';

import { applyMiddleware, createLocalStoragePersistor } from './middleware';
import type { AddTodo, Todo } from '../types';

const LOCAL_STORAGE_KEY = 'te-doen';

const getInitialTodos = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? [];
};

export const createTodoStore = () => {
  const todos = writable<Todo[]>(getInitialTodos());

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

  const localstorageMiddleware = createLocalStoragePersistor(LOCAL_STORAGE_KEY);
  applyMiddleware(todos, localstorageMiddleware);

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

export const contextKey = Symbol('todo');

export type Store = ReturnType<typeof createTodoStore>;
