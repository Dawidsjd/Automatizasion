import { styled } from '@mui/material/styles';
import globalTheme from '../../features/GlobalStyles/GlobalTheme';
import { Link } from 'react-router-dom';

export const StyledContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  background: globalTheme.palette.tiles.light,
  backdropFilter: 'blur(6.2px)',
  padding: '40px',
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

export const StyledLink = styled(Link)(({ theme }) => ({
  padding: '12px 24px',
  fontSize: '1.2em',
  fontWeight: 'bold',
  background: globalTheme.palette.primary.main,
  color: '#fff',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  display: 'flex',
  width: '180px',
}));

export const Icon = styled('img')(({ theme }) => ({
  width: '150px',
  height: '150px',
}));

export const CheckList = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '30px',
}));

export const CheckStatus = styled('div')(({ theme }) => ({
  width: '25px',
  height: '25px',
  borderRadius: '100px',
  background: '#E5FFCF',
  border: '2px solid #000',
  marginRight: '10px',
}));

export const ListContent = styled('p')(({ theme }) => ({
  height: '30px',
  display: 'flex',
  alignItems: 'center',
}));

export const Line = styled('div')(({ theme }) => ({
  width: '250px',
  height: '1px',
  background: '#000',
  marginLeft: '30px',
  marginBottom: '10px',
}));
