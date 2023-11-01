import { styled } from '@mui/material/styles';

export const StyledSupportContainer = styled('main')(({ theme }) => ({
  display: 'flex',
}));

export const StyledWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledMain = styled('div')(({ theme }) => ({
  width: '100%',
}));
