<script lang="ts">
  import { getContext } from 'svelte';
  import { contextKey } from './store';
  import type { Store } from './store';

  let title: string;
  let description: string;

  const { add } = getContext<Store>(contextKey);

  const handleSubmit = () => {
    add({ title, description });
    title = '';
    description = '';
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <h3>Add todo</h3>
  <input type="text" bind:value={title} placeholder="Title" required />
  <textarea bind:value={description} placeholder="Description" required />
  <button type="submit">Add</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
    background: var(--primary);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
  }

  form > * {
    margin-top: 1rem;
  }

  form > *:first-child {
    margin: 0;
  }

  button {
    background: var(--info);
    color: var(--secondary);
  }
</style>
