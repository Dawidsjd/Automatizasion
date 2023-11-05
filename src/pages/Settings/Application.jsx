import React from 'react'
import NotFound from '../../assets/page_not_found.svg'
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from 'react-router-dom';

const Application = () => {
  return (
    <>
    <Link to="/Settings">
        <button
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            background: "#003366",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            fontSize: "1.5em",
            padding: "10px 30px",
          }}
        >
          <KeyboardBackspaceIcon />
        </button>
      </Link>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
    <img src={NotFound} alt='Page not Found' style={{ maxWidth: "100%", height: "auto" }} />
    </div>
    </>
  )
}

export default Application
