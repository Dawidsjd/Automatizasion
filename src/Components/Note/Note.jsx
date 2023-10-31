import React, { useState } from "react";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { styles } from "./styles"; // Importuj style

function Notepad() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div style={styles.notepad}>
      <div className="notepad-header">
        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="notepad-content">
        <textarea
          placeholder="Note Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <div className="saveButton">
        <button onClick={() => saveNote()}>Save</button>
        
        <Link to="/SchoolDashboard">
          <button style={styles.exitBtn}>
            <KeyboardBackspaceIcon />
          </button>
        </Link>
      </div>
    </div>
  );

  function saveNote() {
    //tu podłączenie do bazy
    console.log("Zapisano notatkę:", title, content);
  }
}

export default Notepad;
