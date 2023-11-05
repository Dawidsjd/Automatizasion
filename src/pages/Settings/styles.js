export const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: '#7289da',
  },
  contentContainer: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
  h1: {
    color: '#333',
    fontSize: '28px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  profileImageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  profileImage: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    border: '4px solid #7289da',
    cursor: 'pointer',
  },
  uploadButton: {
    background: 'transparent',
    color: '#7289da',
    border: '2px solid #7289da',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  inputLabel: {
    color: '#333',
    fontSize: '16px',
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    border: '2px solid #7289da',
    borderRadius: '4px',
    backgroundColor: '#fff',
    color: '#333',
    width: '100%',
    marginBottom: '10px',
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  navigationProfile: {
    marginRight: '20px',
    color: '#333',
    textDecoration: 'none',
  },
  navigationSecurity: {
    marginRight: '20px',
    color: '#333',
    textDecoration: 'none',
  },
  navigationApplication: {
    color: '#333',
    textDecoration: 'none',
  },
  buttonSave: {
    padding: '12px 30px',
    background: '#003366',
    color: '#fff',
    border: 'none',
    borderRadius: '90px',
    cursor: 'pointer',
    margin: '20px 10px',
  },
  button: {
    padding: '12px 40px',
    background: '#003366',
    color: '#fff',
    border: 'none',
    borderRadius: '90px',
    cursor: 'pointer',
    margin: '20px 10px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  '@media (max-width: 768px)': {
    contentContainer: {
      width: '80%',
    },
  },

  '@media (max-width: 480px)': {
    contentContainer: {
      width: '90%',
    },
  },
};
