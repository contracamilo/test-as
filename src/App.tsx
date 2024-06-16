import  { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [x, setX] = useState([]); // Malos nombres de variables
  const [y, setY] = useState(true); // Nombres no descriptivos

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(data => {
        setX(data);
        setY(false); // Estado innecesario
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const toggleTodo = (id: number) => {
    const updatedTodos = x.map((todo: any) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }; // Mal manejo del estado
      }
      return todo;
    });
    setX(updatedTodos); // Modificación directa del estado
  };

  return (
    <div className='container'>
      <h1>Bad Practices TODO</h1>
      {y ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {x.map((item: any) => ( // Usar `any` en lugar de tipos específicos
            <li key={item.id}>
              <input 
                type="checkbox" 
                checked={item.completed} 
                onChange={() => toggleTodo(item.id)} 
              />
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
