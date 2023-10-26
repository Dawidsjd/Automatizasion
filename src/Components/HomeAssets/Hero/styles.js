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
  height: '40em',
  width: '45%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  color: 'white',
  zIndex: 1,
  '& h1': {
    fontSize: '56px',
    fontWeight: '900',
    letterSpacing: '5px',
    margin: '40px',
  },
  '& h3': {
    fontSize: '20px',
    textAlign: 'center',
    fontWeight: '500',
  },
}));

export const StyledButtons = styled('div')(({ theme }) => ({
  width: '90%',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '15px',
  // justifyContent: 'center',
  // flexDirection: 'column',
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  width: '320px',
  height: '60px',
  textDecoration: 'none',
  color: 'white',
  fontSize: '20px',
  background: '#23272A',
  borderRadius: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: '.3s',
  '&: hover': {
    background: '#2d3436',
  },
}));

export const StyledButton = styled('button')(({ theme }) => ({
  width: '320px',
  height: '50px',
  color: 'black',
  background: '#dfe6e9',
  border: 'none',
  fontSize: '20px',
  borderRadius: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: '.3s',
  '&: hover': {
    background: '#b2bec3',
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
