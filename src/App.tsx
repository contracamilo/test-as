import React, { useState, useEffect } from 'react';
import './styles/App.css';
import TodoList from './components/TodoList';
import { Todo } from './models/Todo';
import { fetchTodos } from './services/todoService';
import { toggleTodo } from './helpers/helpers';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown | string | null>(null);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const todos = await fetchTodos();
        setTodos(todos);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    loadTodos();
  }, []);

  const handleToggleTodo = (id: number) => {
    const updatedTodos = toggleTodo(todos, id);
    setTodos(updatedTodos);
  };

  return (
    <section>
      <h1>To Do List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Oops try again later!</p>
      ) : (
        <TodoList todos={todos} onToggle={handleToggleTodo} />
      )}
    </section>
  );
};

export default App;
