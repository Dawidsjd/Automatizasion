import { styled } from '@mui/material/styles';

export const StyledSupportContainer = styled('main')(({ theme }) => ({
  background: '#dfe6e9',
  display: 'flex',
  justifyContent: 'center',
}));

export const StyledWrapper = styled('div')(({ theme }) => ({
  background: 'white',
  borderRadius: '50px',
  margin: '26vh 0 10vh 0',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.up('xl')]: {
    width: '80%',
    paddingTop: '50px',
  },
}));

export const StyledMain = styled('div')(({ theme }) => ({
  width: '100%',
}));

export const StyledWrapperContent = styled('div')(({ theme }) => ({
  width: '80%',
  textAlign: 'center',
  h1: {
    fontSize: '46px',
  },
}));
