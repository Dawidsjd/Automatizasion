import { styled } from '@mui/material/styles';

export const StyledHeader = styled('Header')(({ theme }) => ({
  width: '100%',
  height: '80px',
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: 'blue',
  [theme.breakpoints.up('md')]: {
    backgroundColor: 'red',
  },
}));

export const StyledImageWrapper = styled('section')(({ theme }) => ({
  height: '80px',
  width: '120px',
}));

export const StyledImage = styled('div')(({ theme }) => ({
  backgroundColor: 'green',
  height: '80px',
}));
