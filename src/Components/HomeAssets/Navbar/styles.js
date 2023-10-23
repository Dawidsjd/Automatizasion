import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const StyledHeader = styled('Header')(({ theme }) => ({
  width: '100%',
  height: '80px',
  padding: '0 40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  position: 'fixed',
  [theme.breakpoints.up('md')]: {
    // backgroundColor: 'blue',
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

export const StyledNav = styled('nav')(({ theme }) => ({
  display: 'flex',
  height: '80px',
  color: 'white',
  alignItems: 'center',
}));

export const SingleItem = styled('ul')(({ theme }) => ({
  fontSize: '16px',
  fontWeight: '600',
  letterSpacing: '1px',
}));

export const StyledButtonBox = styled('div')(({ theme }) => ({}));

export const StyledLinkBtn = styled(Link)(({ theme }) => ({
  padding: '12px 25px',
  border: 'none',
  borderRadius: '50px',
  transition: '.2s',
  fontWeight: '500',
  background: 'white',
  textDecoration: 'none',
  ':hover': {
    boxShadow: '0px 5px 15px 3px #3030303b',
    color: '#2464cc',
  },
}));
