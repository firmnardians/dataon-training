import React, { useState } from "react";

export default function TodoChris() {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setTodos((prevTodos) => ([
      ...prevTodos,
      ...formData.values(),
    ]));
    console.log(todos);
  }

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit} title="Todo List">
        <input style={{width: "200px"}} type="text" name="todo" required /><br />
        <button style={{width: "200px"}} color="blue" type="submit">Add Todo</button>

        <h1>My List</h1>
        <ol>
          {todos.length > 0 && Object.values(todos).map((todo) => (
            <>
              <li key={todo.id}>
                {todo}
                <button type="button" color="red" onClick={() => setTodos(todos.filter((t) => t !== todo))}>
                  Delete
                </button>
              </li>
            </>
          ))}
        </ol>
      </form>
    </>
  );
}
