import React from 'react';
import { StyledHeader, StyledImageWrapper, StyledImage } from './styles';

const Navbar = () => {
  return (
    <StyledHeader>
      <StyledImageWrapper>
        <StyledImage>X</StyledImage>
      </StyledImageWrapper>
      <nav>
        <ul>
          <li>Home</li>
          <li>Aplication</li>
          <li>Safety</li>
          <li>Our team</li>
          <li>Support</li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Navbar;
