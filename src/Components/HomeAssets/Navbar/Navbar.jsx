import React from 'react';
import {
  StyledHeader,
  StyledImageWrapper,
  StyledImage,
  StyledNav,
  SingleItem,
  StyledButtonBox,
  StyledLinkBtn,
} from './styles';

const Navbar = () => {
  return (
    <StyledHeader>
      <StyledImageWrapper>
        <StyledImage></StyledImage>
      </StyledImageWrapper>
      <StyledNav>
        <SingleItem>Home</SingleItem>
        <SingleItem>Aplication</SingleItem>
        <SingleItem>Safety</SingleItem>
        <SingleItem>Our team</SingleItem>
        <SingleItem>Support</SingleItem>
      </StyledNav>
      <StyledButtonBox>
        <StyledLinkBtn to='/HomeDashboard'>Aplication</StyledLinkBtn>
      </StyledButtonBox>
    </StyledHeader>
  );
};

export default Navbar;
