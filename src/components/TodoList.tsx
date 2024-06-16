import React from 'react';
import { Todo } from '../models/Todo';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id.toString()}>
          <input 
            type="checkbox" 
            id={`todo-${todo.id}`} 
            checked={todo.completed} 
            onChange={() => onToggle(todo.id)} 
          />
          <label htmlFor={`todo-${todo.id}`}>{todo.title}</label>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
