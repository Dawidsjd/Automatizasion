import { styled } from '@mui/material/styles';
import loginBackground from '../../assets/loginBackground.svg';

export const LogInContainer = styled('section')(({ theme }) => ({
  width: '100%',
  background: `url(${loginBackground})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
}));
