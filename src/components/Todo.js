import React, { useState, useEffect } from "react";

function Todo({ data }) {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    setTodo(data);
  }, [data]);

  function handleDelete(id) {
    const newList = todo.filter((elt, idx) => idx !== id);
    setTodo(newList);
  }

  return (
    <div>
      <ul>
        {todo.map((item, id) => (
          <li
            key={id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <span>{item}</span>
            <button onClick={() => handleDelete(id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
