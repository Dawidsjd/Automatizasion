import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const StyledFooterWrapper = styled('Section')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  background: '#181818',
  color: '#fff',
}));

export const InfoContentWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: '60px',
}));

const SharedStyles = {
  '& p': {
    padding: 0,
    margin: 0,
  },
  '& h3': {
    color: '#5865F2',
    padding: 0,
    margin: 0,
  },
};

export const AboutShortContent = styled('div')(({ theme }) => ({
  ...SharedStyles,
  width: '30%',
  background: '#181818',
}));

export const InfoLinks = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '50%',
}));

export const SingleLinks = styled('div')(({ theme }) => ({
  ...SharedStyles,
  width: '100%',
  '&:nth-child(1)': {
    width: '50%',
  },
  '&:nth-child(3)': {
    width: '60%',
  },
}));

export const RestInformations = styled('div')(({ theme }) => ({}));

export const StyledQuickLinks = styled('div')(({ theme }) => ({}));

export const StyledLinkQuickMedia = styled(Link)(({ theme }) => ({
  margin: '10px 10px 10px 0',
  display: 'inline-block',
  textAlign: 'center',
  color: 'white',
  border: '2px solid white',
  borderRadius: '10px',
  padding: '5px 8px',
}));
