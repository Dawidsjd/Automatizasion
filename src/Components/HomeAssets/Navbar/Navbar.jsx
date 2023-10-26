import React from 'react';
import {
  StyledHeader,
  StyledImageWrapper,
  StyledImage,
  StyledNav,
  StyledLink,
  StyledButtonBox,
  StyledLinkBtn,
} from './styles';

const Navbar = () => {
  return (
    <StyledHeader>
      <StyledImageWrapper>
        <StyledImage>FlowView</StyledImage>
      </StyledImageWrapper>
      <StyledNav>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/homeDashboard'>Dashboard</StyledLink>
        <StyledLink to='/safety'>Safety</StyledLink>
        <StyledLink to='/ourTeam'>Our team</StyledLink>
        <StyledLink to='/support'>Support</StyledLink>
      </StyledNav>
      {/* <StyledButtonBox>
        <StyledLinkBtn to='/HomeDashboard'>Application</StyledLinkBtn>
      </StyledButtonBox> */}
    </StyledHeader>
  );
};

export default Navbar;
