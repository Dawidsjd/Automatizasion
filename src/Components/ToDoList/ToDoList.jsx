import React, { useState } from "react";

function ToDoList() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addtolist = (todo) => {
    const newTodoList = {
      id: Math.random(),
      todo: todo,
    };
    setInput("");
    // dodaje rzeczy do zrobienia do listy to do
    setList([...list, newTodoList]);

    // Czyszczenie listy z rzeczy do zrobienia
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => addtolist(input)}>Add</button>
        <ul>
          {list.map((todo) => (
            <li key={todo.id}>
              {todo.todo}
              <button onClick={() => deleteTodo(todo.id)}>&times;</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ToDoList;
