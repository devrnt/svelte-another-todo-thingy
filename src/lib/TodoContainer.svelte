<script lang="ts">
  import { setContext } from 'svelte';

  import { contextKey, createTodoStore } from './store';

  import TodoList from './TodoList.svelte';
  import AddTodo from './AddTodo.svelte';
  import Controls from './Controls.svelte';

  const store = createTodoStore();
  setContext(contextKey, store);
</script>

<section>
  <TodoList />
  <Controls />
  <AddTodo />
</section>

<style>
  section {
    margin-bottom: 1rem;
  }
</style>
