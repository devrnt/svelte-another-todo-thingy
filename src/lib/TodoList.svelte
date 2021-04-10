<script lang="ts">
  import { getContext } from 'svelte';
  import { quartOut } from 'svelte/easing';
  import { scale } from 'svelte/transition';

  import { contextKey } from './store';
  import type { Store } from './store';

  import TodoItem from './TodoItem.svelte';

  const { todos, amount } = getContext<Store>(contextKey);
</script>

{#if $amount > 0}
  <ul>
    {#each $todos as todo (todo.id)}
      <article
        in:scale={{ easing: quartOut, duration: 300 }}
        out:scale={{ easing: quartOut, duration: 300 }}
      >
        <TodoItem {todo} />
      </article>
    {/each}
  </ul>
{:else}
  <p in:scale={{ easing: quartOut, delay: 250, duration: 300 }}>
    You're all settled up! 📝
  </p>
{/if}

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }

  p {
    text-align: center;
    background: var(--success);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    padding: 1rem 2rem;
    font-size: 0.9rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  ul,
  p {
    grid-area: 1/1/2/2;
  }
</style>
