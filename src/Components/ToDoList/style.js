
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
    Background:
    {
    backgroundColor: '#88a2c4',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '600px',
    minHeight: '800px',
    background: 'white',
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
        justifyContent: `left`,
       
      },
      
      deleteButton: {
        background: '#f44336', 
        color: '#fff', 
        border: 'none',
        borderRadius: '50%', 
        cursor: 'pointer',
        fontSize: '1.5rem',
        width: '2rem', 
        height: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '1rem', 
      },
    title: {
      
      fontSize: '2rem',
      marginBottom: '1rem', 
      color: `white`,
     
    },
    input: {
      width: '600px', 
      padding: '10px', 
      marginBottom: '5px',
      outline: "none",
      justifyContent: 'center',
    },
    button: {
      padding: '0.5rem 1rem',
      fontSize: '1rem',
      cursor: "pointer",
      backgroundColor: `#003366`,
      color: `white`,
    },
      listItem:
      {
        margin: '1.5rem 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
      },
    
    exitBtn:{
        position: "absolute",
        top: "10px",
        left: "10px",
        background: "purple",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        fontSize: "1.5em",
        padding: "10px 30px",
    }
  };
  
  export default styles;
  
  