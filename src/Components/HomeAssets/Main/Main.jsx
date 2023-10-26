import React from 'react';
import Introduction from './MainItems/Introduction';
import AboutDashboardHome from './MainItems/AboutDashboardHome';
import AboutDashboardSchool from './MainItems/AboutDashboardSchool';
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
