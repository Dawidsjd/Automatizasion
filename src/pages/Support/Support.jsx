import React from 'react';
import { InlineWidget } from 'react-calendly';
import Header from '../../Components/HomeAssets/Navbar/Navbar';
import { StyledSupportContainer, StyledMain, StyledWrapper } from './Styles';

const Support = () => {
  return (
    <StyledSupportContainer>
      <Header />

      <StyledWrapper>
        <StyledMain>
          <InlineWidget url='https://calendly.com/flowview/contact' />
        </StyledMain>
      </StyledWrapper>
    </StyledSupportContainer>
  );
};

export default Support;
