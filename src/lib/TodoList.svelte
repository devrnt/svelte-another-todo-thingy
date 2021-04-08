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
    <p>You're fine no todo's! 📝</p>
  {/if}
</div>

<style>
  div {
    padding: 1rem 2rem;
    border: 1px solid var(--grey);
    border-radius: 3px;
    display: flex;
    flex-wrap: wrap;
  }

  div.done {
    background: rgb(234, 255, 234);
    border: 1px solid rgb(0, 219, 48);
  }

  ul {
    list-style: none;
    display: flex;
    padding: 0 1rem;
  }

  h3,
  p {
    margin: 0.25rem 0;
    text-align: start;
  }

  h3 {
    font-weight: 600;
  }
</style>
