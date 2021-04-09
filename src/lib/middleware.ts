import type { Writable } from 'svelte/store';

type Middleware<T = unknown> = (value: T) => void;

export const createLocalStoragePersistor = <T = unknown>(
  key: string,
): Middleware<T> => {
  return (value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
};

export const applyMiddleware = <T = unknown>(
  store: Writable<T>,
  middleware: Middleware,
) => {
  store.subscribe((value) => middleware(value));
};
