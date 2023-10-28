import React from 'react';
import Introduction from './MainItems/Introduction';
import AboutHome from './MainItems/AboutHome';
import AboutSchool from './MainItems/AboutSchool';
import Activities from './MainItems/Activities';
import { StyledMain } from './styles';
import Newsletter from './MainItems/Newsletter';

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
