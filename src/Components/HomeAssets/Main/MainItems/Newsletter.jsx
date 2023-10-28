import React from 'react';
import { StyledNewsLetterWrapper } from '../styles';

const Newsletter = () => {
  return (
    <StyledNewsLetterWrapper>
      <StyledNewsLetterWrapper>
        <h2>Zapisz się na Newsletter</h2>
        <p>aby otrzymywać bieżące informacje o nowych funkcjonalnościach</p>
        <input type='text' />
      </StyledNewsLetterWrapper>
    </StyledNewsLetterWrapper>
  );
};

export default Newsletter;
