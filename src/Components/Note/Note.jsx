import React, { useState } from "react";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { styles } from "./styles"; // Import pliku ze stylami
import { Container } from "@mui/material";

function App() {
  
  
  const [notes, setNotes] = useState([]);
  const [state, setState] = useState({
    title: "",
    note: "",
    id: Math.random() * 10,
  });

  const handleDelete = (id) => {
    const leftNotes = notes.filter((note) => note.id !== id);
    setNotes(leftNotes);
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setNotes([...notes, state]);
    setState({
      title: "",
      note: "",
    });
  };

  return (
    <div style={styles.background}>
      <h1 style={styles.h1}>Notes</h1>
      <div style={styles.addNote}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input style={styles.input}
            type="text"
            placeholder="title"
            name="title"
            onChange={handleChange}
            value={state.title}
            required
          />
          <textarea
            style={styles.note}
            name="note"
            id=""
            cols="30"
            rows="5"
            placeholder="note"
            className="border-2 border-blue-200 p-2"
            onChange={handleChange}
            value={state.note}
            required
          ></textarea>
          <button
            type="subit"
            style={styles.button}
          >
            Add Note
          </button>
        </form>
      </div>

      <div style={styles.notes_container}>
        {
          notes.length > 0 ? notes.map((note, i) => {
            return (
              <div
              style={styles.notes}
                key={i}
              >
                <button
                style={styles.deleteButton}
                  onClick={() => handleDelete(note.id)}
                >
                  x
                </button>
                <h3 style={styles.noteTitle}>{note.title}</h3>
                <p>{note.note}</p>
              </div>
              
            );
          }) : <p style={styles.p}>
            No notes available.
          </p>
        }
        <Link to="/SchoolDashboard">
        <button style={styles.exitBtn}>
          <KeyboardBackspaceIcon />
        </button>
      </Link>
      </div>
    </div>
    
  );
}

export default App;