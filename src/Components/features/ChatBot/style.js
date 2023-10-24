const styles = {
    ChatContainer: {
        position: 'fixed',
        bottom: '60px',
        right: '100px',
        // border: '1px solid black',
        background: '#fff',
        width: '350px',
        height: '450px',
        overflowY: 'auto',
        display: 'flex', // Dodane
        flexDirection: 'column', // Dodane
        justifyContent: 'flex-end', // Dodane
        borderRadius: '5px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
      },
      MessagesContainer: {
        overflowY: 'auto',
        borderBottom: '1px solid #ccc',
        padding: '10px',
        marginBottom: '10px',
        display: 'flex',
        flexDirection: 'column',
      },
      
    container: {
      position: 'relative',
    },
    toggleButton: {
      position: 'fixed',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      background: 'purple',
      bottom: '20px',
      right: '20px',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
    },
    chatIcon: {
      color: '#fff',
    },
    SendContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center', 
    },
    MsgSend: {
      border: 'none',
      outline: 'none',
      flex: '1', 
      marginRight: '5px', 
      padding: '5px 5px 10px 5px',
      fontSize: '17px',
    },
    MsgSendBtn: {
      border: 'none',
      background: 'none',
      color: 'purple',
      cursor: 'pointer',
    },
    Banner: {
        background: 'purple',
        color: '#fff',
        padding: '10px 0 10px 0',
        textAlign: 'center',
        borderRadius: '5px 5px 0 0', // Zaokrąglenie górnych krawędzi
        position: 'absolute', // Dodane
        top: '0',
        width: '100%', // Dodane
      },      
      
  };
  
  export default styles;
  