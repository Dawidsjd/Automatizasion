import { styled } from '@mui/material/styles';
import globalTheme from '../../Components/features/GlobalStyles/GlobalTheme';
import dashboardBackground from './../../assets/dashboardBackground.svg';

export const StyledContainer = styled('div')(({ theme }) => ({
  background: globalTheme.palette.secondary.main,
}));

export const StyledDashboard = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100vh',
  background: `url(${dashboardBackground})`,
  backgroundSize: 'cover',
}));

export const Widgets = styled('div')(({ theme }) => ({
  position: 'absolute',
  //tymczasowe
  // marginLeft: '17%',
  // paddingTop: '5%',
}));
