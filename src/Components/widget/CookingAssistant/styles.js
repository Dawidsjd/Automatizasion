import { styled } from '@mui/material/styles';
import globalTheme from '../../features/GlobalStyles/GlobalTheme';

export const StyledContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  background: globalTheme.palette.tiles.light,
  backdropFilter: 'blur(6.2px)',
  padding: '54px',
  maxWidth: '650px',
  minHeight: '300px',
  margin: '20px auto',
  textAlign: 'left',
}));

export const Title = styled('div')(({ theme }) => ({
  fontSize: globalTheme.typography.semibigfontsize.main,
  fontWeight: 'bold',
  color: globalTheme.palette.textcolorprimary.main,
  marginBottom: '10px',
}));

export const Subtitle = styled('div')(({ theme }) => ({
  fontSize: globalTheme.typography.semimediumfontsize.main,
  color: globalTheme.palette.textcolorprimary.main,
  marginBottom: '20px',
}));

export const Button = styled('button')(({ theme }) => ({
  padding: '12px 24px',
  fontSize: '1.2em',
  fontWeight: 'bold',
  background: globalTheme.palette.primary.main,
  color: '#fff',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  display: 'flex',
}));

export const IconContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const IconFood = styled('img')(({ theme }) => ({
  width: '150px',
  height: '150px',
}));

export const IconFork = styled('img')(({ theme }) => ({
  width: '30px',
  height: '100px',
}));
