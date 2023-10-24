import { styled } from '@mui/material/styles';
import loginBackground from '../../assets/loginBackground.svg';
import Separate from '../../assets/LineLogIn.svg';

import { Link } from 'react-router-dom';

export const StyledLogInContainer = styled('section')(({ theme }) => ({
  width: '100%',
  height: '100vh',
  background: `url(${loginBackground})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledLogInWrapper = styled('section')(({ theme }) => ({
  width: '70%',
  maxWidth: '1200px',
  height: '75vh',
  position: 'relative',
  background: 'rgba(8, 52, 100, 0.5)',
  backdropFilter: 'blur(5px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '28px',
}));

export const StyledLogInContent = styled('section')(({ theme }) => ({
  width: '80%',
  height: '60vh',
  color: 'white',
  h1: {
    margin: '0 0 35px 0 ',
    color: 'white',
    fontSize: '45px',
  },
}));

export const UserDataWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  height: '50vh',
  display: 'flex',
  h1: {
    margin: '0',
    color: 'white',
    fontSize: '45px',
  },
}));

export const SocialLogIn = styled('div')(({ theme }) => ({
  width: '50%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  button: {
    padding: '20px',
    fontSize: '16px',
    fontWeight: '600',
    background: '3A61B4',
    borderRadius: '6px',
  },
  h1: {
    margin: '0',
    color: 'white',
    fontSize: '45px',
  },
}));

export const StyledSeparate = styled('div')(({ theme }) => ({
  background: `url(${Separate})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  width: '60px',
}));

export const StyledDefaultLogIn = styled('div')(({ theme }) => ({
  marginLeft: '5em',
  width: '35%',
  button: {
    width: '100%',
    color: 'white',
    padding: '13px',
    borderRadius: '6px',
    background: '#48CC74',
    fontSize: '16px',
    fontWeight: '600',
    transition: '.3s',
    '&: hover': {
      background: '#288c44',
      cursor: 'pointer',
    },
  },
}));

export const SingleInput = styled('div')(({ theme }) => ({
  marginBottom: '20px',
  p: {
    margin: '0 0 2px 0',
    fontSize: '15px',
    fontWeight: '600',
  },

  input: {
    padding: '13px',
    fontSize: '16px',
    width: '92%',
    borderRadius: '6px',
  },
}));

export const StyledButtons = styled('div')(({ theme }) => ({
  width: '85%',
  display: 'flex',
  flexDirection: 'column',
  gap: '25px',
}));

export const StyledLinkRegister = styled(Link)(({ theme }) => ({
  display: 'flex',
  justifyItems: 'center',
  marginTop: '10px',
  padding: '5px',
  color: '#5DC8EF',
  fontSize: '16px',
}));
