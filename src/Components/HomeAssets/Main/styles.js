import { styled } from '@mui/material/styles';
import newsletter from '../../../assets/newsLetter.svg';
import place from '../../../assets/placeHome.svg';

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
  padding: '75px 0',
  '&:nth-child(2), &:nth-child(4)': {
    background: '#e7e7e7',
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
  background: 'none',
  color: 'white',
  marginBottom: '25px',
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'unset',
    width: '45%',
    marginBottom: 0,
  },
}));

export const StyledSingleAsset = styled('div')(({ theme }) => ({
  backgroundImage: `url(${place})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: '102%',
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
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
  },
}));

export const StyledVisualSection = styled('div')(({ theme }) => ({
  width: '95%',
  height: '350px',
  position: 'relative',
  background: 'orange',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.up('lg')]: {
    width: '50%',
  },
}));

// NewsLetter

export const StyledNewsLetterWrapper = styled('section')(({ theme }) => ({
  maxWidth: 1250,
  marginTop: '100px',
  width: '100%',
  height: '450px',
  padding: '75px 0',
  background: `url(${newsletter})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  [theme.breakpoints.up('xl')]: {
    margin: '125px 0',
    height: '530px',
  },
}));

export const StyledNewsletterContent = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  [theme.breakpoints.up('lg')]: {},
}));

export const ContentBox = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  '& h2': {
    padding: 0,
    margin: 0,
  },
  '& p': {
    padding: 0,
    margin: 0,
    fontSize: '14px',
    width: '70%',
    lineHeight: '25px',
  },
  input: {
    width: '60%',
    borderRadius: '15px',
    marginTop: '20px',
    padding: '10px',
    fontSize: '14px',
  },
  [theme.breakpoints.up('md')]: {
    input: {
      width: '34%',
      fontSize: '17px',
      padding: '15px',
    },
    '& p': {
      fontSize: '16px',
      width: '45%',
    },
  },
}));
