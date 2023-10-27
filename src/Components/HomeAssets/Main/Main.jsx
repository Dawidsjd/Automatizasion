import React from 'react';
import Introduction from './MainItems/Introduction';
import AboutDashboardHome from './MainItems/AboutHome';
import AboutDashboardSchool from './MainItems/AboutSchool';
import { StyledMain } from './styles';

const Main = () => {
  return (
    <StyledMain>
      <Introduction />
      <AboutDashboardHome />
      <AboutDashboardSchool />
      <section>
        <h1>Fourth Content</h1>
      </section>
    </StyledMain>
  );
};

export default Main;
