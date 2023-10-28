import { styled } from '@mui/material/styles';

// Main.jsx
export const StyledMain = styled('main')(({ theme }) => ({
  width: '100%',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}));

// || /MainItems
export const StyledWrapperItem = styled('section')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  padding: '75px 0 ',
  '&:nth-child(2), &:last-child': {
    background: '#e7e7e7',
  },
  '&:last-child': {
    padding: 0,
  },

  [theme.breakpoints.up('md')]: {
    padding: '125px 0',
  },
}));

export const WrapperItem = styled('div')(({ theme }) => ({
  width: '95%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    width: '60%',
    margin: 'auto',
  },
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'unset',
    alignItems: 'unset',
    width: '90%',
  },
  [theme.breakpoints.up('xl')]: {
    width: '100%',
  },
}));

export const StyledAssets = styled('section')(({ theme }) => ({
  width: '95%',
  height: '350px',
  background: 'blue',
  color: 'white',
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'unset',
    width: '45%',
  },
}));

export const StyledContent = styled('section')(({ theme }) => ({
  width: '95%',
  color: '#1F2224',

  h2: {
    fontSize: '1.7em',
    fontWeight: '800',
    marginTop: '0',
    marginBottom: '0px',
  },
  p: {
    fontSize: '1em',
    fontWeight: '600',
    marginTop: '5px 0',
  },
  [theme.breakpoints.up('lg')]: {
    width: '45%',
    h2: {
      fontSize: '2.4em',
    },
    p: {
      fontSize: '1.2em',
      fontWeight: '600',
    },
  },
}));

// last child of Main Items

export const WrapperActivities = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));
