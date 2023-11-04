import React, { useState, useEffect } from 'react';
import styles from './style';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';
import punkt from '../../assets/punkt.svg';
import { db } from '../../firebase';
import { set, ref, onValue } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';



function ToDoList() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [editText, setEditText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Obserwuj zmiany w stanie autoryzacji
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setUser(user);
        getListFromFirebase(user.uid); // Pobierz listę zadań dla obecnie zalogowanego użytkownika
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const addToList = (todo) => {
    if (todo.trim() !== '') {
      const newTodoList = {
        id: Math.random(),
        todo: todo,
      };
      setInput('');
      setList([...list, newTodoList]);

      if (user) {
        const userId = user.uid;
        saveListToFirebase(userId, [...list, newTodoList]); // Zapisz listę zadań do Firebase
      }
    }
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);

    if (user) {
      const userId = user.uid;
      saveListToFirebase(userId, newList); // Zapisz zaktualizowaną listę zadań do Firebase
    }
  };

  const startEdit = (index, text) => {
    setEditIndex(index);
    setEditText(text);
    setIsEditing(true);
  };

  const saveEdit = (index) => {
    if (editText.trim() !== '') {
      const updatedList = list.map((item, i) => {
        if (i === index) {
          return { ...item, todo: editText };
        }
        return item;
      });
      setList(updatedList);
      setEditIndex(-1);
      setEditText('');
      setIsEditing(false);

      if (user) {
        const userId = user.uid;
        saveListToFirebase(userId, updatedList); // Zapisz zaktualizowaną listę zadań do Firebase
      }
    }
  };

  const saveListToFirebase = (userId, list) => {
    set(ref(db, `todoList/${userId}`), list);
  };

  const getListFromFirebase = (userId) => {
    onValue(ref(db, `todoList/${userId}`), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setList(data);
      }
    });
  };

  return (
    <div style={styles.BackgroundSVG}>
      <div style={styles.Background}>
        <Link to="/HomeDashboard">
          <button style={styles.exitBtn}>
            <KeyboardBackspaceIcon />
          </button>
        </Link>
        <h1 style={styles.title}>To-do List</h1>
        <input
          type="text"
          value={input}
          style={styles.input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addToList(input);
            }
          }}
        />
        <button onClick={() => addToList(input)} style={styles.button}>
          ADD
        </button>

        <div style={styles.todoList}>
          <ul style={styles.bulletList}>
            {list.map((todo, index) => (
              <li key={todo.id} style={styles.bulletListItem}>
                <img src={punkt} alt="Obraz" style={styles.imageBulletPoint} />
                {editIndex === index && isEditing ? (
                  <div style={styles.editBox}>
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                    <button onClick={() => saveEdit(index)}>Save</button>
                  </div>
                ) : (
                  <div style={styles.listItem}>
                    <span style={styles.todoText}>{todo.todo}</span>
                    <button onClick={() => startEdit(index, todo.todo)} style={styles.editButton}>
                      Edit
                    </button>
                    <button onClick={() => deleteTodo(todo.id)} style={styles.deleteButton}>
                      X
                    </button>
                  </div>
                )}
                <hr style={styles.hr} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
