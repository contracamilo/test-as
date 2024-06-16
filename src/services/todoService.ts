import { Todo } from '../models/Todo';

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  console.log(response)
  return response.json();
};


