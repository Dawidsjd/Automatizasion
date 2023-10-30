import ContentBackground from '../../assets/content.svg';

const styles = {
  BackgroundSVG: {
    background: `#677bab url(${ContentBackground}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Background: {
    background: '#88a2c4',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '700px',
    minHeight: '900px',
    textAlign: 'center',
    margin: '128px auto',
    borderRadius: '10px',
    paddingBottom: '32px',
  },
  span: {
    color: '#ffffff',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    backgroundColor: '#4a5568',
    padding: '0.5rem 1rem',
    borderRadius: '10px',
    justifyContent: 'left',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '1rem',
    outline: 'none',
  },
 todoList: {
  float: 'left',
 },
editButton: {
  backgroundColor: '#003366',
  width: '50px',
  height: '25px',
  cursor: 'pointer',
  color: 'white',
  borderRadius: '50px',
},
deleteButton: {
  background: '#f44336',
  width: '50px',
  height: '25px',
  cursor: 'pointer',
  fontSize: '1.5rem',
  color: '#fff',
  borderRadius: '50px',
},


  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: 'white',
  },
  
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer',
    backgroundColor: '#003366',
    color: 'white',
    borderRadius: '50px',
  },
  
  saveButton:
  {
    width: "100px",
    height: "30px",
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer',
    backgroundColor: '#003366',
    color: 'white',
    borderRadius: '50px',
    with: '30px',
    display: 'block', 
    margin: '0 auto', 
    position: 'absolute', 
    bottom: '90px', 
    left: '50%', 
    transform: 'translateX(-50%)', 
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

export default styles;
