import React from 'react';
import Introduction from './MainItems/Introduction';
import AboutHome from './MainItems/AboutHome';
import AboutSchool from './MainItems/AboutSchool';
import Activities from './MainItems/Activities';
import { StyledMain } from './styles';

const Main = () => {
  return (
    <StyledMain>
      <Introduction />
      <AboutHome />
      <AboutSchool />
      <Activities />

      <section>
        <h1>NEWSLETTER</h1>
      </section>
    </StyledMain>
  );
};

export default Main;
