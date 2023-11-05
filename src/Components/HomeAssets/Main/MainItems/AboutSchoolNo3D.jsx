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
        <StyledAssets>
            <img
              src='https://builtforathletes.com/cdn/shop/articles/Ronnie_Coleman.jpg?v=1589441229'
              alt='SchoolGraphic'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </StyledAssets>
          <StyledContent>
            <h2>School Dashboard</h2>
            <p>
              The school's Dashboard is a management place where you will find
              upcoming challenges and tasks you need to complete. It's a place
              that gives you a full view of what's ahead of you in the near
              future, making it easier for you to plan and organize. In
              addition, you'll find a variety of tools and features that not
              only make your life easier, but also help you save valuable time.
            </p>
          </StyledContent>
        </WrapperItem>
      </div>
    </StyledWrapperItem>
  );
};

export default AboutDashboardHome;
