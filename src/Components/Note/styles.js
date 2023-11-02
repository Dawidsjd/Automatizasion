import globalTheme from "../features/GlobalStyles/GlobalTheme";

export const styles = {
  notepad: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
    backgroundColor: "#88a2c4",
  },
  Background: {
    background: "#a9c9dd",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "1100px",
    height: "700px",
    textAlign: "center",
    margin: "128px auto",
    borderRadius: "10px",
    paddingBottom: "32px",
    overflowY: "auto",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)", // Dodaj box-shadow
  },

  notepadHeader: {
    width: "100%",
    padding: "1rem",
    textAlign: "left",
    marginLeft: "30px",
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
    position: "absolute",
    top: "10px",
    left: "10px",
    background: globalTheme.palette.primary.main,
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    fontSize: "1.5rem",
    padding: "10px 30px",
  },
  input: {
    border: "2px solid black", // Dodaj to pole, aby dodać czarne obramowanie
  },
};
