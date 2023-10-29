import React, { useState } from 'react';
import styles from './style';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';

function ToDoList() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  const addtolist = (todo) => {
    if (todo.trim() !== '') {
      const newTodoList = {
        id: Math.random(),
        todo: todo,
      };
      setInput('');
      setList([...list, newTodoList]);
    }
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  return (
    <div style={styles.BackgroundSVG}>
      <div style={styles.Background}>
      <Link to="/HomeDashboard">
        <button
          style={styles.exitBtn}
        >
          <KeyboardBackspaceIcon />
        </button>
      </Link>
      <h1 style={styles.title}>To-do List</h1>
      <input
        type='text'
        value={input}
        style={styles.input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addtolist(input);
          }
        }}
      />
      <button onClick={() => addtolist(input)} style={styles.button}>
        Add
      </button>
      
      <ul>
        {list.map((todo) => (
          <li key={todo.id} style={styles.listItem}>
            <span style={styles.span}>{todo.todo}</span>
            <button onClick={() => deleteTodo(todo.id)} style={styles.deleteButton}>&times;</button>
          </li>
        ))}
      </ul>
      
      </div>
    </div>
  );
}

export default ToDoList;
