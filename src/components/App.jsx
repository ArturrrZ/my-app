import React, { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setTodo(value);
  }
  function getTodo() {
    setTodoList((prev) => {
      return [...prev, todo];
    });
    setTodo("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={todo} onChange={handleChange} />
        <button onClick={getTodo}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todoList.map((element) => {
            return <li>{element}</li>;
          })}
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
