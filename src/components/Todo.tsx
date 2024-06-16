import { useEffect, useState } from "react";

export const Todos = () => {
  const [x, setX] = useState([]); 
  const [y, setY] = useState(true); 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((data) => {
        setX(data);
        setY(false); 
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const toggleTodo = (id: number) => {
    const updatedTodos = x.map((todo: any) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }; // Mal manejo del estado
      }
      return todo;
    });
    setX(updatedTodos); 
  };

  return (
    <div style={{width: "100%"}}>
      {y ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {x.map((item: any) => (
              <li key={item.id}>
                <input
                  id="todo-checkbox"
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleTodo(item.id)}
                />
                <span>{item.title}</span>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};
