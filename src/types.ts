export type Todo = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
};

export type AddTodo = Omit<Todo, 'id' | 'isCompleted'>