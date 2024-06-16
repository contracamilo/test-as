import { Todo } from '../models/Todo';

export const toggleTodo = (todos: Todo[], id: number): Todo[] => {
    return todos.map(todo => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };