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
  <input type="text" bind:value={title} placeholder="Title" required />
  <textarea bind:value={description} placeholder="Description" required />
  <button type="submit">Add</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
  }

  form > * {
    margin-top: 1rem;
  }

  input,
  textarea {
    padding: 0.25rem 0.5rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border: 1px solid var(--grey);
  }

  input::placeholder,
  textarea::placeholder {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
