<script lang="ts">
  import { getContext } from 'svelte';
  import { contextKey } from './store';
  import type { Store } from './store';

  import TodoItem from './TodoItem.svelte';

  const { todos, amount } = getContext<Store>(contextKey);
</script>

<div class:done={$amount === 0}>
  {#if $amount > 0}
    <ul>
      {#each $todos as todo (todo.id)}
        <TodoItem {todo} />
      {/each}
    </ul>
  {:else}
    <p>You're all settled up! 📝</p>
  {/if}
</div>

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }

  .done {
    background: var(--success);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    padding: 1rem 2rem;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  p {
    margin: 0.25rem 0;
    text-align: center;
  }
</style>
