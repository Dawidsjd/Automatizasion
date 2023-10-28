import React from 'react';
import {
  StyledNewsLetterWrapper,
  StyledNewsletterContent,
  ContentBox,
} from '../styles';

const Newsletter = () => {
  return (
    <StyledNewsLetterWrapper>
      <StyledNewsletterContent>
        <ContentBox>
          <h2>Subscribe to Newsletter</h2>
          <p>aby otrzymywać bieżące informacje o nowych funkcjonalnościach</p>
          <input type='text' placeholder='Your email' />
        </ContentBox>
      </StyledNewsletterContent>
    </StyledNewsLetterWrapper>
  );
};

export default Newsletter;
