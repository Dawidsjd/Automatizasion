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
  // maxWidth: '700px',
  width: '100%',
  minHeight: '300px',
  margin: '20px auto',
  padding: '32.5px',
}));

export const StyledColumn = styled('div')(({ theme }) => ({
  flex: '1',
  padding: '10px',
}));

export const StyledIcon = styled('img')(({ theme }) => ({
  width: '90px',
}));

export const StyledDescription = styled('p')(({ theme }) => ({
  fontSize: globalTheme.typography.semimediumfontsize.main,
  color: globalTheme.palette.textcolorprimary.main,
  textTransform: 'capitalize',
}));

export const StyledTemp = styled('p')(({ theme }) => ({
  marginBottom: '0',
  fontSize: globalTheme.typography.bigfontsize.main,
  color: globalTheme.palette.textcolorprimary.main,
}));

export const StyledCity = styled('p')(({ theme }) => ({
  color: globalTheme.palette.textcolorprimary.main,
  fontSize: globalTheme.typography.semibigfontsize.main,
}));
