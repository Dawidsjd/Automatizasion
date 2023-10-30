import { styled } from '@mui/material/styles';
import globalTheme from '../../Components/features/GlobalStyles/GlobalTheme';
import dashboardBackground from './../../assets/dashboardBackground.svg';

export const StyledDashboard = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100vh',
  background: `url(${dashboardBackground})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  position: 'relative',
  display: 'flex',
}));

export const Widgets = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexFlow: 'nowrap',
  gap: '20px',
  padding: '20px',
  flexDirection: 'column',
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    flexFlow: 'wrap',
  },
}));

export const WidgetWrapper = styled('div')(({ theme }) => ({
  '&:nth-child(1)': {
    width: '95%',
  },
  '&:nth-child(2)': {
    width: '95%',
  },
  '&:nth-child(3)': {
    width: '95%',
  },
  '&:nth-child(4)': {
    width: '95%',
  },

  [theme.breakpoints.up('lg')]: {
    '&:nth-child(1)': {
      width: '55%',
    },
    '&:nth-child(2)': {
      width: '43%',
    },
    '&:nth-child(3)': {
      width: '49%',
    },
    '&:nth-child(4)': {
      width: '49%',
    },
  },
}));
