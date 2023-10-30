import React from 'react';
import {
  StyledWrapperItem,
  WrapperItem,
  StyledAssets,
  StyledContent,
} from '../styles';
import Home3D from '../../../Model3D/Home3D';

const AboutDashboardHome = () => {
  return (
    <StyledWrapperItem>
      <div style={{ maxWidth: 1250 }}>
        <WrapperItem>
          <StyledContent>
            <h2>Home Dashboard</h2>
            <p>
              The home Dashboard is your central hub for upcoming tasks and
              challenges. It provides a clear view of what lies ahead,
              simplifying your planning and organization. It offers various
              tools and features to streamline your tasks, saving you precious
              time.
            </p>
          </StyledContent>
          <StyledAssets>
            {/* <Home3D />  przepraszam ale kompa mi wywali */}
          </StyledAssets>
        </WrapperItem>
      </div>
    </StyledWrapperItem>
  );
};

export default AboutDashboardHome;
