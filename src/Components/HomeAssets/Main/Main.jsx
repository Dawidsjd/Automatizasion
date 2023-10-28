import React from 'react';
import Introduction from './MainItems/Introduction';
import AboutHome from './MainItems/AboutHome';
import AboutSchool from './MainItems/AboutSchool';
import Activities from './MainItems/Activities';
import Newsletter from './MainItems/Newsletter';
import Footer from '../Footer/Footer';
import { StyledMain } from './styles';

const Main = () => {
  return (
    <StyledMain>
      <Introduction />
      <AboutHome />
      <AboutSchool />
      <Activities />
      <Newsletter />
      <Footer />
    </StyledMain>
  );
};

export default Main;
