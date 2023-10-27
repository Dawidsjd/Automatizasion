import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import globalTheme from '../GlobalStyles/GlobalTheme';

export const StyledContainer = styled('div')(({ theme }) => ({
  height: '100vh',
  width: '270px',
  paddingTop: '0.1px',
  boxSizing: 'border-box',
  background: globalTheme.palette.primary.main,
  borderRadius: '0 35px 35px 0',
  position: 'relative',
}));

export const StyledLogoContainer = styled('div')(({ theme }) => ({
  background: globalTheme.palette.primary.dark,
  // marginTop: '40px',
  height: '60px',
  width: '85%',
  position: 'relative',
  borderRadius: '0 10px 10px 0',
}));

export const StyledLogo = styled('p')(({ theme }) => ({
  position: 'relative',
  textAlign: 'center',
  top: '30%',
  color: globalTheme.palette.textcolorsecondary.main,
  fontWeight: 'bolder',
  fontSize: globalTheme.typography.semimediumfontsize.main,
}));

export const StyledNav = styled('nav')(({ theme }) => ({
  position: 'relative',
  top: '15%',
  right: '10%',
}));

export const StyledSubpages = styled('div')(({ theme }) => ({
  position: 'relative',
  top: '43%',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
}));

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  marginTop: '25px',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'none',
  },
  color: globalTheme.palette.textcolorsecondary.main,
  fontSize: globalTheme.typography.semismallfontsize.main,
}));

export const StyledAuthorization = styled('div')(({ theme }) => ({
  position: 'relative',
  top: '45%',
}));

export const StyledLoginBtn = styled('button')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  margin: '0 auto', // Dodane style
  background: 'none',
  color: globalTheme.palette.textcolorsecondary.main,
  fontWeight: 'bold',
  cursor: 'pointer',
}));

export const StyledSeparator = styled('hr')(({ theme }) => ({
  marginTop: '20px',
  width: '220px',
  height: '1px',
  border: 'none',
  background: '#000',
}));

export const StyledUserStatus = styled('div')(({ theme }) => ({
  marginLeft: '25px',
  display: 'flex',
  flexDirection: 'column',
}));

export const StyledUserAvatar = styled('img')(({ theme }) => ({
  background: '#1e3d58', //tymczasowe
  width: '45px',
  height: '45px',
  borderRadius: '75px',
  position: 'absolute',
}));

export const StyledStatus = styled('div')(({ theme }) => ({
  borderRadius: '10px',
  height: '15px',
  width: '15px',
  left: '60px',
  position: 'absolute',
  top: '80px',
}));

export const StyledUserName = styled('p')(({ theme }) => ({
  textAlign: 'left',
  marginLeft: '25%',
  marginTop: '0',
  color: globalTheme.palette.textcolorsecondary.main,
  fontWeight: 'bold',
  fontSize: globalTheme.typography.semismallfontsize.main,
}));

export const StyledStatusName = styled('p')(({ theme }) => ({
  textAlign: 'left',
  marginLeft: '25%',
  marginTop: '-10%',
  color: globalTheme.palette.textcolorsecondary.main,
  fontSize: '12px',
}));

export const StyledIcon = styled('i')(({ theme }) => ({
  marginRight: '0',
  marginLeft: '-10px',
}));
