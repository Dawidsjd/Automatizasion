import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const StyledFooterWrapper = styled('Section')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  background: '#181818',
  color: '#fff',
}));

export const StyledpositioningFooter = styled('Section')(({ theme }) => ({
  maxWidth: 1250,
  width: '95%',
  [theme.breakpoints.up('xl')]: {
    width: '100%',
  },
}));

export const InfoContentWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: '60px',
  [theme.breakpoints.up('lg')]: {},
}));

const SharedStyles = {
  '& p': {
    padding: 0,
    margin: 0,
  },
  '& h3': {
    color: '#3a7ae3',
    padding: 0,
    margin: 0,
  },
};

export const AboutShortContent = styled('div')(({ theme }) => ({
  ...SharedStyles,
  width: '30%',
  background: '#181818',
  p: {
    fontSize: '14px',
    lineHeight: '22px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '18px',
    lineHeight: '30px',
  },
}));

export const InfoLinks = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  fontSize: '14px',
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    fontSize: '18px',
    lineHeight: '30px',
  },
}));

export const SingleLinks = styled('div')(({ theme }) => ({
  ...SharedStyles,
  display: 'flex',
  flexDirection: 'column',
  h3: {
    padding: '5px 0',
    width: '100%',
    lineHeight: '25px',
  },
  p: {
    lineHeight: '25px',
  },
  width: '100%',
  '&:nth-child(1)': {
    width: '50%',
  },
  '&:nth-child(3)': {
    width: '60%',
  },
}));

export const RestInformations = styled('div')(({ theme }) => ({
  margin: '2px 0',
  hr: {
    width: '99%',
  },
  [theme.breakpoints.up('lg')]: {
    hr: {
      width: '100%',
    },
  },
}));

export const StyledQuickLinks = styled('div')(({ theme }) => ({
  // przykladowy styl
}));

export const StyledLinkQuickMedia = styled(Link)(({ theme }) => ({
  margin: '10px 15px 10px 0',
  display: 'inline-block',
  textAlign: 'center',
  color: 'white',
  border: '2px solid white',
  borderRadius: '10px',
  padding: '6px 8px 2px 8px',
}));

export const StyledInfoLinks = styled(Link)(({ theme }) => ({
  color: '#fff',
  lineHeight: '26px',
  transition: '.2s',
  '&:hover': {
    color: 'rgba(156, 165, 255, 1)',
  },
  [theme.breakpoints.up('lg')]: {
    lineHeight: '30px',
  },
}));
