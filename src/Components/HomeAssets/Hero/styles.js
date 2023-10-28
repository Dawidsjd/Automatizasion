import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import HeroBackground from '../../../assets/HeroBackground.svg';

export const StyledHeroContainer = styled('section')(({ theme }) => ({
  background: '#484CEC',
  display: 'flex',
  justifyContent: 'center',
}));

export const StyledHeroWrapper = styled('section')(({ theme }) => ({
  backgroundColor: '#484CEC',
  zIndex: '0',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  background: `url(${HeroBackground})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
}));

export const StyledHeroBox = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  // border: '5px solid red',
  position: 'relative',
}));

export const StyledHeroContent = styled('section')(({ theme }) => ({
  height: '45em',
  width: '90%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  color: 'white',
  zIndex: 1,
  '& h1': {
    textAlign: 'center',
    fontSize: '32px',
    fontWeight: '900',
    letterSpacing: '5px',
    margin: '10px',
  },
  '& h3': {
    fontSize: '18px',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: '35px',
  },
  [theme.breakpoints.up('md')]: {
    height: '40em',
    width: '80%',
    '& h1': {
      fontSize: '56px',
      margin: '40px',
    },
    '& h3': {
      fontSize: '20px',
    },
  },
  [theme.breakpoints.up('lg')]: {
    height: '40em',
    width: '70%',
  },
  [theme.breakpoints.up('xl')]: {
    width: '45%',
  },
}));

export const StyledButtons = styled('div')(({ theme }) => ({
  width: '90%',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '15px',
  // justifyContent: 'center',
  // flexDirection: 'column',
  columnGap: 10,
}));

const SharedStylesButtons = {
  width: '45%',
  height: '40px',
  textDecoration: 'none',
  border: 'none',
  fontSize: '16px',
  display: 'flex',
  borderRadius: '100px',
  justifyContent: 'center',
  transition: '.3s',
  fontWeight: '600',
};

export const StyledLink = styled(Link)(({ theme }) => ({
  ...SharedStylesButtons,
  color: 'white',
  background: '#23272A',
  alignItems: 'center',
  transition: '.3s',
  '&: hover': {
    background: '#2d3436',
  },
  [theme.breakpoints.up('md')]: {
    height: '60px',
    fontSize: '20px',
  },
}));

export const StyledButton = styled('button')(({ theme }) => ({
  ...SharedStylesButtons,
  color: 'black',
  background: '#dfe6e9',
  alignItems: 'center',
  '&: hover': {
    background: '#b2bec3',
  },
  [theme.breakpoints.up('md')]: {
    height: '60px',
    fontSize: '20px',
  },
}));

export const StyledImages = styled('section')(({ theme }) => ({
  position: 'absolute',
  bottom: '15%',
  width: '90%',
  display: 'flex',
  justifyContent: 'space-between',
  // border: '2px solid red',
}));

export const StyledImageWave = styled('section')(({ theme }) => ({
  position: 'absolute',
  bottom: -4,
  zIndex: '-1',
}));

export const StyledImagesWrapper = styled('section')(({ theme }) => ({
  width: '100%',
  position: 'relative',
}));
