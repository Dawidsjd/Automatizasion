import { styled } from '@mui/material/styles';

export const StyledSupportContainer = styled('main')(({ theme }) => ({
  background: '#dfe6e9',
  display: 'flex',
  justifyContent: 'center',
}));

export const StyledWrapper = styled('div')(({ theme }) => ({
  background: 'white',
  borderRadius: '25px',
  margin: '200px 0',
  paddingTop: '50px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.up('lg')]: {
    width: '80%',
    // margin: '200px 0',
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
