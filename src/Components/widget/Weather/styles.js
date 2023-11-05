import { styled } from '@mui/material/styles';
import globalTheme from '../../features/GlobalStyles/GlobalTheme';

export const StyledContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  textAlign: 'center',
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  background: globalTheme.palette.tiles.light,
  backdropFilter: 'blur(6.2px)',
  width: '100%',
  margin: '20px auto',
  padding: '32.5px',
  minHeight: '300px',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
  [theme.breakpoints.up('lg')]: {
    minHeight: '300px',
  },
}));

export const StyledColumn = styled('div')(({ theme }) => ({
  flex: '1',
  padding: '10px',
}));

export const StyledIcon = styled('img')(({ theme }) => ({
  width: '90px',
  pointerEvents: 'none',
  userSelect: 'none',
}));

export const StyledDescription = styled('p')(({ theme }) => ({
  color: globalTheme.palette.textcolorprimary.main,
  textTransform: 'capitalize',
  fontSize: '24px',
  [theme.breakpoints.up('up')]: {
    fontSize: globalTheme.typography.semimediumfontsize.main,
  },
}));

export const StyledTemp = styled('p')(({ theme }) => ({
  marginBottom: '0',
  fontSize: '24px',
  color: 'white',
  [theme.breakpoints.up('lg')]: {
    fontSize: '46px',
  },
}));

export const StyledCity = styled('p')(({ theme }) => ({
  color: globalTheme.palette.textcolorprimary.main,
  fontSize: '24px',
  marginTop: '40px',
  [theme.breakpoints.up('lg')]: {
    fontSize: '26px',
  },
}));
