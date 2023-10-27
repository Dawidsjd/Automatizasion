import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const StyledHeader = styled('header')(({ theme }) => ({
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100%',
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: '999',
  background: '#484cec',
  flexDirection: 'row-reverse',
  [theme.breakpoints.up('md')]: {
    // backgroundColor: 'blue',
  },
  [theme.breakpoints.up('lg')]: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
}));

export const StyledImageWrapper = styled('section')(({ theme }) => ({
  width: '100px',
  marginRight: '25px',
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
  fontWeight: '600',
  letterSpacing: '1px',
  padding: '5px',
  margin: '10px',
  [theme.breakpoints.up('lg')]: {
    padding: '5px 10px',
    margin: '0px 20px',
  },
  // border: '1px solid red',
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
  transform: isOpen
    ? 'translateX(calc(-105% + 15px))'
    : 'translateX(calc(-200% - 15px))',
  transition: '.3s',
  position: 'absolute',
  top: '0',
  height: '300vh',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50%',
  background: '#2054a4',
  zIndex: '300',
  [theme.breakpoints.up('lg')]: {
    height: '80px',
    position: 'relative',
    background: 'none',
    transform: 'translateX(calc(0%))',
  },
}));

export const ResponsiveBurger = styled('div')(({ theme }) => ({
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
