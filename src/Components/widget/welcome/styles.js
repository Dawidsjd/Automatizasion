import { styled } from '@mui/material/styles';
import globalTheme from '../../features/GlobalStyles/GlobalTheme';

export const StyledContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  background: globalTheme.palette.tiles.main,
  backdropFilter: 'blur(6.2px)',
  paddingTop: '30px',
  paddingLeft: '30px',
  width: '100%',
  maxHeight: '300px',
  margin: '20px auto',
  textAlign: 'left',
  [theme.breakpoints.up('lg')]: {
    maxHeight: '300px',
  },
}));

export const StyledCalendar = styled('div')(({ theme }) => ({
  backgroundColor: globalTheme.palette.secondary.main,
  height: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px',
  width: '170px',
  color: globalTheme.palette.textcolorprimary.main,
  fontSize: globalTheme.typography.semimediumfontsize.main,
}));

export const StyledDate = styled('div')(({ theme }) => ({
  marginLeft: '10px',
}));

export const StyledIcon = styled('i')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

export const StyledWelcome = styled('div')(({ theme }) => ({
  marginTop: '5%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'left',
  flex: 1,
  [theme.breakpoints.up('lg')]: {
    marginTop: '100px',
  },
}));

export const StyledMessage = styled('div')(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 'bold',
  color: globalTheme.palette.textcolorprimary.main,
  marginBottom: '0',
  [theme.breakpoints.up('lg')]: {
    fontSize: '24px',
  },
}));

export const StyledDescription = styled('p')(({ theme }) => ({
  fontSize: globalTheme.typography.semimediumfontsize.main,
  color: globalTheme.palette.textcolorprimary.main,
  marginBottom: '0',
  marginTop: '0',
}));

export const StyledImage = styled('img')(({ theme }) => ({
  maxWidth: '35%',
  pointerEvents: 'none',
  userSelect: 'none',
  [theme.breakpoints.up('lg')]: {
    width: '300px',
  },
}));

export const StyledContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  marginRight: '25px',
  marginBottom: '20px',
}));
