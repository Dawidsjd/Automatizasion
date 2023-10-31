export const styles = {
  notepad: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
    backgroundColor: "white", // Poprawione
  },
  notepadHeader: {
    width: "100%",
    padding: "1rem",
    textAlign: "center",
  },
  notepadContent: {
    width: "100%",
    padding: "1rem",
    textAlign: "center",
  },
  saveButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  exitBtn: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    background: 'purple',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.5rem',
    padding: '10px 30px',
  },
};
