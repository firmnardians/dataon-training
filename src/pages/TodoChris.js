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
        <ul style={{display: "block"}}>
          {todos.length > 0 && todos.map((todo, i) => (
            <>
              <li key={todo.id}>
                {todo}
                <button style={{marginLeft: '10px'}} type="button" color="red" onClick={() => setTodos(todos.filter((_, j) => j !== i))}>
                  Delete
                </button>
              </li>
            </>
          ))}
        </ul>
      </form>
    </>
  );
}
