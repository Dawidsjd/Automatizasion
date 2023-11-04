import ContentBackground from '../../assets/content.svg';
import globalTheme from '../features/GlobalStyles/GlobalTheme';
export const styles = {
  background: {
    backgroundColor: '#A9C9DD',
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
    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)',
  },

  input: {
    borderWidth: '2px',
    borderColor: '#4299e1',
    padding: '1rem',
    marginBottom: '0.5rem',
    fontSize: '1rem',
  },
  button: {
    backgroundColor: '#4299e1',
    padding: '1.25rem 2rem',
    color: 'white',
    background: globalTheme.palette.primary.main,
    marginTop: '1rem',
    size: '90px',
  },
  editButton: {
    backgroundColor: '#003366',
    color: 'white',
    borderRadius: '24px',
  },
  notes_container: {
    borderTopWidth: '2px',
    borderTopColor: '#4299e1',
    margin: '2.5rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: '1.25rem',
  },
  notes: {
    backgroundColor: '#F7EC9A',
    padding: '1rem',
    paddingTop: '2.5rem',
    position: 'relative',
    overflow: 'auto',
    fontSize: '16px',
    wordWrap: 'break-word',
    whiteSpace: 'pre-line',
    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)',
    borderRadius: '24px',
  },

  deleteButton: {
    position: 'absolute',
    right: '0px',
    top: '0',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: 'red',
    backgroundColor: 'transparent',
    border: 'none',
  },
  date: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '1rem',
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

  '@media (max-width: 768px)': {
    h1: {
      fontSize: '2rem',
    },
    notes: {
      width: '100%',
    },
  },
  exitBtn: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    background: globalTheme.palette.primary.main,
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
