<script lang="ts">
  import TodoContainer from './lib/TodoContainer.svelte';
</script>

<main>
  <h1>Todoist</h1>
  <section>
    <TodoContainer />
    <TodoContainer />
  </section>
</main>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    --grey: rgb(206, 206, 206);
    --grey600: rgb(167, 167, 167);
    --grey800: rgb(99, 99, 99);
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: crimson;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  :global(button) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0.25rem 1rem;
    background: rgb(231, 231, 231);
    align-self: flex-end;
    border: 1px solid var(--grey);
    cursor: pointer;
    border-radius: 3px;
    color: black;
  }

  :global(button:hover) {
    background: var(--grey600);
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
