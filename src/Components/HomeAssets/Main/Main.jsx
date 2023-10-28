import React from 'react';
import Introduction from './MainItems/Introduction';
import AboutHome from './MainItems/AboutHome';
import AboutSchool from './MainItems/AboutSchool';
import Activities from './MainItems/Activities';
import Newsletter from './MainItems/Newsletter';
import { StyledMain } from './styles';

const Main = () => {
  return (
    <StyledMain>
      <Introduction />
      <AboutHome />
      <AboutSchool />
      <Activities />
      <Newsletter />
    </StyledMain>
  );
};

export default Main;
