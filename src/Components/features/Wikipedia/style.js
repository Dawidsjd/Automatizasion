const style = {
    WikiSearchContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: '#90a4c4',
    },
    searchBar: {
      margin: '10px',
      padding: '10px',
      fontSize: '1.2em',
      border: 'none',
      borderRadius: '5px',
      width: '300px',
      outline: 'none'
    },
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      maxWidth: '80%',
      margin: '0 auto'
    },
    card: {
      width: '300px',
      margin: '10px',
    },
    cardContent: {
      fontSize: '1.2em',
      lineHeight: '1.4',
      fontWeight: 'bold',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    cardSnippet: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      maxHeight: '2.4em'
    },
    dialogTitle: {
      m: 0,
      p: 2
    },
    dialogCloseButton: {
      position: 'absolute',
      right: 8,
      top: 8,
      color: (theme) => theme.palette.grey[500],
    },
    dialogContent: {
      overflowY: 'auto',
      maxHeight: '70vh'
    },
    paginationContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '20px'
    },
    paginationButton: {
      margin: '0 5px',
      color: 'black',
      opacity: 1
    },
    paginationPageNumber: {
      margin: '0 10px'
    }
  };
  
  export default style;
  