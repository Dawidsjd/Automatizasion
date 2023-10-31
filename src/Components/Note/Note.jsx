import React, { useState } from "react";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { styles } from "./styles"; // Poprawiona ścieżka do importu

function Notepad() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div style={styles.notepad}>
      <h1 style={styles.title}>Note</h1>
      <div className="notepad-header" style={styles.notepadHeader}>
        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="notepad-content" style={styles.notepadContent}>
        <textarea
          placeholder="Note Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={styles.textarea}
        ></textarea>
      </div>
      <div className="saveButton" style={styles.saveButton}>
        <button onClick={() => saveNote()}>Save</button>
      </div>
      <Link to="/SchoolDashboard">
        <button style={styles.exitBtn}>
          <KeyboardBackspaceIcon />
        </button>
      </Link>
    </div>
  );

  function saveNote() {
    //tu podłączenie do bazy
    console.log("Zapisano notatkę:", title, content);
  }
}

export default Notepad;
