<script lang="ts">
  import { getContext } from 'svelte';

  import { contextKey } from './store';
  import type { Todo } from '../types';
  import type { Store } from './store';

  export let todo: Todo;

  const { remove } = getContext<Store>(contextKey);

  const handleRemove = () => {
    remove(todo.id);
  };
</script>

<li>
  <h3>{todo.title}</h3>
  <p>{todo.description}</p>
  <button type="button" on:click={handleRemove}>X</button>
</li>

<style>
  li {
    display: flex;
  }

  h3,
  p {
    margin: 0.25rem 0;
    text-align: start;
  }

  h3 {
    font-weight: 600;
  }

  button {
    justify-self: flex-end;
  }
</style>
