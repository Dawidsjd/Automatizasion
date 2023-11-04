import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { styles } from "./styles"; // Import pliku ze stylami
import { Container } from "@mui/material";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { db } from '../../firebase';

function Note() {
  const [notes, setNotes] = useState([]);
  const [state, setState] = useState({
    title: "",
    note: "",
    id: Math.random() * 10,
    date: new Date().toLocaleString(),
  });
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setUser(user);
        getNotesFromFirebase(user.uid);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = (id) => {
    const leftNotes = notes.filter((note) => note.id !== id);
    setNotes(leftNotes);

    if (user) {
      saveNotesToFirebase(user.uid, leftNotes);
    }
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
      setNotes([...notes, { ...state, id: Math.random() * 10, date: new Date().toLocaleString() }]);
    }

    setState({
      title: "",
      note: "",
      date: new Date().toLocaleString(),
    });

    if (user) {
      saveNotesToFirebase(user.uid, [...notes, { ...state, id: Math.random() * 10, date: new Date().toLocaleString() }]);
    }
  };

  const saveNotesToFirebase = (userId, notes) => {
    const database = getDatabase();
    set(ref(database, `notes/${userId}`), notes);
  };

  const getNotesFromFirebase = (userId) => {
    const database = getDatabase();
    onValue(ref(database, `notes/${userId}`), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setNotes(data);
      }
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
                    <p style={styles.date}>{note.date}</p>
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

export default Note;
