export type Todo = {
  id: string;
  title: string;
  description: string;
};

export type AddTodo = Omit<Todo, 'id'>