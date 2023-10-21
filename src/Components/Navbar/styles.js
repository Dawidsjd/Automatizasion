import { styled } from '@mui/material/styles';

export const StyledHeader = styled('Header')(({ theme }) => ({
  width: '100%',
  height: '80px',
  backgroundColor: 'blue',
  [theme.breakpoints.up('md')]: {
    backgroundColor: 'red',
  },
}));
