import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const StyledHeader = styled('header')(({ theme }) => ({
  width: '100%',
  height: '80px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: '999',
  background: '#2369d1',
  transition: '.3s',
  [theme.breakpoints.up('lg')]: {
    width: '100%',
  },
}));

export const StyledHeaderContent = styled('div')(({ theme }) => ({
  width: '100%',
  height: '80px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row-reverse',
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  [theme.breakpoints.up('xl')]: {
    justifyContent: 'space-between',
    maxWidth: 1250,
  },
}));

export const StyledImageWrapper = styled('section')(({ theme }) => ({
  width: '215px',
  [theme.breakpoints.up('lg')]: {
    margin: '0',
  },
}));

export const StyledImage = styled('div')(({ theme }) => ({
  backgroundColor: 'wheat',
  height: '50px',
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  color: 'white',
  fontSize: '16px',
  margin: '25px 0',
  fontWeight: '600',
  letterSpacing: '1px',
  whiteSpace: 'nowrap',
  padding: '5px',
  transition: '.2s',
  '&: hover': {
    color: '#ced6e0',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '5px 5px',
    margin: '5px 20px',
  },
  [theme.breakpoints.up('xl')]: {
    padding: '5px 10px',
    margin: '0px 20px',
  },
}));

export const StyledButtonBox = styled('div')(({ theme }) => ({}));

export const StyledLinkBtn = styled(Link)(({ theme }) => ({
  padding: '10px 25px',
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

export const StyledNav = styled('nav')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  height: '80px',
  color: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '100px',
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    marginTop: '0',
  },
}));

export const StyledWrapperNav = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));

export const StyledNavBurger = styled('div')(({ isOpen }) => ({ theme }) => ({
  transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
  transition: '.3s',
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50%',
  background: '#2054a4',
  zIndex: '300',
  [theme.breakpoints.up('lg')]: {
    height: '80px',
    position: 'relative',
    background: 'none',
    transform: 'none',
  },
}));

export const ResponsiveBurger = styled('div')(({ theme }) => ({
  position: 'relative',
  marginLeft: '25px',
  [theme.breakpoints.up('lg')]: {
    display: 'none',
    margin: '0',
  },
}));

export const BurgerBox = styled('div')(({ theme }) => ({
  marginTop: '25px',
  height: '100px',
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}));

export const StyledLogo = styled('img')(({ theme }) => ({}));
