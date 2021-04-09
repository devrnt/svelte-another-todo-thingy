<script lang="ts">
  import { getContext } from 'svelte';

  import { contextKey } from './store';
  import type { Todo } from '../types';
  import type { Store } from './store';

  export let todo: Todo;

  const { remove, toggle } = getContext<Store>(contextKey);

  const handleToggle = () => {
    toggle(todo.id);
  };

  const handleRemove = () => {
    remove(todo.id);
  };
</script>

<li on:click={handleToggle} class:completed={todo.isCompleted}>
  <div class="content">
    <h3>{todo.title}</h3>
    <p>{todo.description}</p>
  </div>
  <button class="danger icon" type="button" on:click={handleRemove}>X</button>
</li>

<style>
  li {
    align-items: center;
    justify-content: space-between;
    width: 100%;
    list-style: none;
    display: flex;
    background: #ffffff;
    border-radius: var(--border-radius);
    display: flex;
    flex-wrap: wrap;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 19px 12px;
    list-style: none;
    display: flex;
    padding: 1rem 2rem;
    overflow: hidden;
    position: relative;
  }

  li::before {
    position: absolute;
    content: '';
    height: 100%;
    top: 50%;
    left: -10%;
    width: 10px;
    background: var(--success);
    transform: translateY(-50%);
    transition: var(--transition);
  }

  li.completed {
    text-align: center;
    position: relative;
  }

  li.completed::before {
    left: 0;
  }

  .content {
    display: flex;
    flex-direction: column;
  }

  h3,
  p {
    margin: 0.25rem 0;
    text-align: start;
    color: var(--secondary300);
  }

  h3 {
    font-weight: 600;
    color: var(--secondary);
  }

  button {
    align-self: center;
  }
</style>
