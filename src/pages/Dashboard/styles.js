import { styled } from '@mui/material/styles';
import dashboardBackground from './../../assets/dashboardBackground.svg';

export const StyledDashboard = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: `url(${dashboardBackground})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  position: 'relative',
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    flexDirection: 'unset',
  },
}));

export const Widgets = styled('section')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignSelf: 'self-start',
  gap: '20px',
  padding: '20px',
  flexDirection: 'column',
  alignItems: 'start',
  [theme.breakpoints.up('xl')]: {
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

  [theme.breakpoints.up('xll')]: {
    '&:nth-child(1)': {
      width: '55%',
      height: 'min-content',
    },
    '&:nth-child(2)': {
      width: '43%',
      height: 'min-content',
    },
    '&:nth-child(3)': {
      width: '49%',
      height: 'min-content',
    },
    '&:nth-child(4)': {
      width: '49%',
      height: 'min-content',
    },
  },
}));

export const WidgetWrapperS = styled('div')(({ theme }) => ({
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

  [theme.breakpoints.up('xll')]: {
    '&:nth-child(-n+4)': {
      width: '49%',
      height: 'min-content',
    },
  },
}));
