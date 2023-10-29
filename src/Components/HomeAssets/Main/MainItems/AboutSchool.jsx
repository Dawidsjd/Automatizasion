import React from 'react';
import {
  StyledWrapperItem,
  WrapperItem,
  StyledAssets,
  StyledContent,
} from '../styles';
import School3D from '../../../Model3D/School3D';

const AboutDashboardHome = () => {
  return (
    <StyledWrapperItem>
      <div style={{ maxWidth: 1250 }}>
        <WrapperItem>
          <StyledAssets>
            <School3D />
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
