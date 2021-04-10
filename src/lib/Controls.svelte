<script lang="ts">
  import { getContext } from 'svelte';
  import { fly } from 'svelte/transition';

  import { contextKey } from './store';
  import type { Store } from './store';

  const { reset, amount, amountCompleted } = getContext<Store>(contextKey);
</script>

{#if $amount > 0}
  <div out:fly={{ y: -20, duration: 300 }}>
    <span>{$amountCompleted}/{$amount} completed</span>
    <button on:click={reset}>Reset</button>
  </div>
{/if}

<style>
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span {
    color: var(--secondary300);
    font-size: 0.9rem;
    font-weight: 500;
  }
  button {
    background: var(--accent);
    color: var(--primary);
  }
</style>
