import globalTheme from '../GlobalStyles/GlobalTheme';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

export const StyledNavbar = styled('div')(({ theme, clicked }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '80%',
  '& .link, & .link-active': {
    display: 'flex',
    width: '100%',
    height: '100%',
    textDecoration: 'none',
    borderRadius: '7px',
    alignItems: 'center',
    justifyContent: 'left',
    color: '#caf0f6',
    fontSize: '14px',
    '&:hover, &.link-active': {
      background: '#001e3b',
    },
  },
  '& .nav_active': {
    // dodaj styl dla klasy 'nav_active' tutaj
  },
}));

export const StyledWrapperGeneral = styled('section')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'center',
  margin: '50px 0',
  span: {
    color: '#bdc3c7',
  },
}));

export const StyledLink = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  color: 'white !important',
  textDecoration: 'none',
  borderRadius: '7px',
  alignItems: 'center',
  justifyContent: 'left',
  color: '#caf0f6',
  fontSize: '14px',
  a: {
    color: '#fff !important',
    width: '100%',
  },
  '&.link-active, &:hover': {
    background: '#001e3b',
  },
}));

export const StyledContainer = styled('div')(({ theme }) => ({
  height: '100vh',
  maxWidth: '325px',
  width: '22%',
  background: globalTheme.palette.primary.main,
  borderRadius: '0 35px 35px 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

export const StyledLogoContainer = styled('div')(({ theme }) => ({
  background: globalTheme.palette.primary.dark,
  borderRadius: '0 10px 10px 0',
  display: 'flex',
  width: '90%',
  height: '90px',
  padding: '0 10px',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  top: '40px',
}));

export const StyledLogo = styled('p')(({ theme }) => ({
  display: 'flex',
  color: globalTheme.palette.textcolorsecondary.main,
  fontWeight: 'bolder',
  fontSize: globalTheme.typography.semimediumfontsize.main,
  margin: '0',
}));

export const StyledNav = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '90%',
  height: 'auto',
  margin: '0 0 50px 0',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledItem = styled('li')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '40px',
  width: '100%',
  margin: '5px 0',
  borderRadius: '7px',
  color: 'white',
}));

export const StyledIcon = styled('i')(({ theme }) => ({
  display: 'flex',
  margin: '0 15px',
  color: 'white',
}));

export const StyledPanel = styled('img')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 'auto',
  marginTop: '20px',
}));

export const StyledAuthorization = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '100px',
  background: globalTheme.palette.primary.dark,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0 0 35px 0',
}));

export const StyledUserAvatar = styled('img')(({ theme }) => ({
  background: 'grey',
  display: 'flex',
  width: '50px',
  height: '50px',
  margin: '10px 0',
  marginLeft: '10px',
  borderRadius: '5px',
}));

export const StyledProfile = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '120px',
  padding: '5px',
  margin: '0 10px',
}));

export const StyledUserName = styled('p')(({ theme }) => ({
  display: 'flex',
  fontSize: globalTheme.typography.semismallfontsize.main,
  color: globalTheme.palette.textcolorsecondary.main,
  fontWeight: 'bolder',
  margin: '0',
}));

export const StyledStatusName = styled('span')(({ theme }) => ({
  display: 'flex',
  fontSize: globalTheme.typography.semismallfontsize.main,
  color: globalTheme.palette.textcolorsecondary.main,
  margin: '0',
}));

export const StyledLoginBtn = styled('a')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  width: '100%',
  height: '100%',
  borderRadius: '7px',
  color: 'white',
  fontSize: '16px',
  fontWeight: 'unset',
  color: '#caf0f6',
  '&:hover': {
    background: '#001e3b',
  },
}));

export const StyledLoginIcon = styled('i')(({ theme }) => ({
  display: 'flex',
  fontSize: globalTheme.typography.mediumfontsize.main,
  color: globalTheme.palette.textcolorsecondary.main,
  fontWeight: 'bolder',
  cursor: 'pointer',
}));

export const StyledLogoImage = styled('img')(({ theme }) => ({
  display: 'flex',
  width: '90px',
  height: 'auto',
}));
