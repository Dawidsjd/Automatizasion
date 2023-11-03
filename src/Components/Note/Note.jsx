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
    date: new Date().toLocaleString(), // Dodanie daty notatki
  });
  const [editingNoteId, setEditingNoteId] = useState(null);

  const handleDelete = (id) => {
    const leftNotes = notes.filter((note) => note.id !== id);
    setNotes(leftNotes);
  };

  const handleEdit = (id) => {
    setEditingNoteId(id);
    const noteToEdit = notes.find((note) => note.id === id);
    if (noteToEdit) {
      setState({
        title: noteToEdit.title,
        note: noteToEdit.note,
        id: noteToEdit.id,
        date: noteToEdit.date,
      });
    }
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingNoteId !== null) {
      // Aktualizacja notatki
      setNotes((prevNotes) =>
        prevNotes.map((note) => {
          if (note.id === editingNoteId) {
            return { ...note, title: state.title, note: state.note };
          }
          return note;
        })
      );

      setEditingNoteId(null);
    } else {
      // Dodawanie nowej notatki
      setNotes([...notes, { ...state, id: Math.random() * 10, date: new Date().toLocaleString() }]);
    }

    setState({
      title: "",
      note: "",
      date: new Date().toLocaleString(),
    });
  };

  return (
    <div style={styles.background}>
      <h1 style={styles.h1}>Notes</h1>
      <div style={styles.addNote}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            style={styles.input}
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
            onChange={handleChange}
            value={state.note}
            required
          ></textarea>
          <button type="submit" style={styles.button}>
            {editingNoteId !== null ? "Update Note" : "Add Note"}
          </button>
        </form>
      </div>

      <div style={styles.notes_container}>
        {notes.length > 0 ? (
          notes.map((note) => {
            return (
              <div style={styles.notes} key={note.id}>
                <button
                  style={styles.deleteButton}
                  onClick={() => handleDelete(note.id)}
                >
                  x
                </button>
                {editingNoteId === note.id ? (
                  <div>
                    <input
                      type="text"
                      name="title"
                      value={state.title}
                      onChange={handleChange}
                    />
                    <textarea
                      name="note"
                      cols="30"
                      rows="5"
                      value={state.note}
                      onChange={handleChange}
                    />
                  </div>
                ) : (
                  <div>
                    <p style={styles.date}>{note.date}</p> {/* Przeniesiona data */}
                    <h3 style={styles.noteTitle}>{note.title}</h3>
                    <p>{note.note}</p>
                    <button
                      style={styles.editButton}
                      onClick={() => handleEdit(note.id)}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <p style={styles.p}>No notes available.</p>
        )}
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
