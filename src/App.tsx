import  { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [x, setX] = useState([]); 
  const [y, setY] = useState(true); 

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
        return { ...todo, completed: !todo.completed }; 
      }
      return todo;
    });
    setX(updatedTodos);
  };

  return (
    <div className='container'>
      <h1>Bad Practices TODO</h1>
      {y ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {x.map((item: any) => (
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
