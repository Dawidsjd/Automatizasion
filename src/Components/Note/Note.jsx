import React, { useState } from "react";
import {} from "./styles";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";

function Notepad() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="notepad">
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
      <div className="notepad-footer">
        <button onClick={() => saveNote()}>Save</button>
      </div>
    </div>
  );

  function saveNote() {
    //tu podłączenie do bazy
    console.log("Zapisano notatkę:", title, content);
  }
}

export default Notepad;
