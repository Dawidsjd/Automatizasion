import React from 'react';
import Introduction from './MainItems/Introduction';
import AboutHome from './MainItems/AboutHome';
import AboutSchool from './MainItems/AboutSchool';
import { StyledMain } from './styles';

const Main = () => {
  return (
    <StyledMain>
      <Introduction />
      <AboutHome />
      <AboutSchool />

      <section>
        <h1>Fourth Content</h1>
      </section>
    </StyledMain>
  );
};

export default Main;
