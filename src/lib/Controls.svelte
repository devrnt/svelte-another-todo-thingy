<script lang="ts">
  import { getContext } from 'svelte';
  import { contextKey } from './store';
  import type { Store } from './store';

  const { reset, amount } = getContext<Store>(contextKey);
</script>

{#if $amount > 0}
  <div>
    <button on:click={reset}>Reset</button>
  </div>
{/if}

<style>
  div {
    display: flex;
    justify-content: flex-start;
  }

  button {
    margin-top: 1rem;
  }
</style>
