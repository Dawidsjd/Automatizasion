import ContentBackground from "../../assets/content.svg";
import globalTheme from "../features/GlobalStyles/GlobalTheme";
export const styles = {
  background: {
    backgroundColor: '#a9c9dd',
    width: '100%',
    minHeight: '100vh',
    position: 'absolute',
    zIndex: -1,
  },
  h1: {
    textAlign: 'center',
    fontSize: '2.5rem',
    padding: '1.25rem',
  },
  addNote: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    borderWidth: '2px',
    borderColor: '#4299e1',
    padding: '0.5rem',
    marginBottom: '0.5rem',
  },
  button: {
    backgroundColor: '#4299e1',
    padding: '1.25rem 2rem',
    color: 'white',
    background: globalTheme.palette.primary.main,
    marginTop: '1rem',
    size: '90px',
  },
  notes_container: {
    borderTopWidth: '2px',
    borderTopColor: '#4299e1',
    margin: '2.5rem',
    display: 'flex',
    flexWrap: 'wrap',
  },
  notes: {
    backgroundColor: '#F7EC9A',
    marginTop: '1.25rem',
    marginRight: '1.25rem',
    width: '300px',
    padding: '1rem',
    paddingTop: '2.5rem',
    position: 'relative',
    overflow: 'auto',
    fontSize: '16px',
    wordWrap: 'break-word',
    whiteSpace: 'pre-line',
  },
  deleteButton: {
    position: 'absolute',
  right: '0px',
  top: '0',
  fontWeight: 'bold',
  fontSize: '1.5rem',
  color: 'red',
  backgroundColor: 'transparent', // Tło przycisku jest teraz przeźroczyste
  border: 'none', // Usuwamy obramowanie przycisku, jeśli istnieje
  },
  noteTitle: {
    fontWeight: 'bold',
    fontSize: '1rem',
    paddingBottom: '0.5rem',
  },
  p: {
    paddingTop: '1.25rem',
    paddingBottom: '1.25rem',
  },
  // Przykład responsywności
  '@media (max-width: 768px)': {
    h1: {
      fontSize: '2rem',
    notes: {
      width: '100%',
    },
    }.fontSize
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
};
