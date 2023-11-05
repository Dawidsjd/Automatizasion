import { styled } from '@mui/material/styles';

export const StyledContainerSubPage = styled('section')(({ theme }) => ({
  background: '#dfe6e9',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
}));

export const StyledWrapperContent = styled('section')(({ theme }) => ({
  background: 'white',
  boxShadow: '0px 10px 25px 1px #bdc3c7',
  marginTop: '200px',
  color: '#1f2224',
  borderRadius: '35px',
  width: '95%',
  height: 'auto',
  marginBottom: '100px',
  [theme.breakpoints.up('lg')]: {
    width: '65%',
  },
}));

export const StyledContent = styled('section')(({ theme }) => ({
  padding: '30px',
  h1: {
    fontSize: '30px',
    margin: '10px 0 35px 0',
    textAlign: 'center',
  },
  h2: {
    fontSize: '20px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '50px',

    h1: {
      fontSize: '40px',
      margin: '10px 0 35px 0',
      textAlign: 'center',
    },
    p: {
      margin: '2px',
    },
  },
}));
