import React from 'react';
import {
  StyledWrapperItem,
  WrapperItem,
  StyledAssets,
  StyledContent,
} from '../styles';

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
            <img
              src='https://builtforathletes.com/cdn/shop/articles/Ronnie_Coleman.jpg?v=1589441229'
              alt='HomeGraphic'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </StyledAssets>
        </WrapperItem>
      </div>
    </StyledWrapperItem>
  );
};

export default AboutDashboardHome;
