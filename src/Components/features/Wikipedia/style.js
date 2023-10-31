import ContentBackground from '../../../assets/content.svg';

const style = {
  WikiSearchContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: `#90a4c4 url(${ContentBackground}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    padding: '10px', /* Dodano wewnętrzny padding */
    boxSizing: 'border-box', /* Dodano box-sizing */
  },
    customIcon: {
    marginBottom: "2%"
  },
  searchBar: {
    width: '100%', /* Rozciągnięcie na szerokość kontenera */
    maxWidth: '400px', /* Maksymalna szerokość */
    margin: '10px 0', /* Trochę większy margines */
    padding: '10px',
    fontSize: '1.2em',
    border: 'none',
    borderRadius: '5px',
    width: '300px',
    outline: 'none',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '100%',
    margin: '0 auto',
    overflowY: 'auto', /* Dodano pionowy scrollbar */
    maxHeight: '60vh', /* Dodano maksymalną wysokość, aby uniknąć zasłaniania pozostałej zawartości */
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
    whiteSpace: 'nowrap',
  },
  cardSnippet: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxHeight: '3em',
  },
  dialogTitle: {
    m: 0,
    p: 2,
    background: "#8295b3",
    textAlign: "center"
  },
  dialogCloseButton: {
    position: 'absolute',
    right: 8,
    top: 8,
    color: "#333",
  },
  dialogContent: {
    overflowY: 'auto',
    maxHeight: '70vh',
    textAlign: "center"
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationPageNumber: {
    margin: '0 10px',
    fontSize: '1.2em',
  },
  cardDescription: {
    color: '#111', 
  },
};

export default style;
