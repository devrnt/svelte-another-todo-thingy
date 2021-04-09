<script lang="ts">
  import TodoContainer from './lib/TodoContainer.svelte';
</script>

<main>
  <h1>Te doen</h1>
  <TodoContainer />
</main>

<style>
  main {
    overflow: hidden;
  }
  h1 {
    margin-bottom: 2rem;
  }
</style>
