import React, { useState } from 'react';
import {
  StyledHeader,
  StyledImageWrapper,
  StyledImage,
  StyledNav,
  StyledLink,
  StyledNavBurger,
  ResponsiveBurger,
  BurgerBox,
  StyledWrapperNav,
} from './styles';

import { Sling as Hamburger } from 'hamburger-react';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  console.log(isOpen);

  return (
    <StyledHeader>
      <StyledImageWrapper>
        <StyledImage>FlowView</StyledImage>
      </StyledImageWrapper>

      <ResponsiveBurger>
        <Hamburger toggled={isOpen} toggle={handleToggle} color='#fff' />
      </ResponsiveBurger>

      <StyledNavBurger isOpen={isOpen ? 'open' : ''}>
        <StyledWrapperNav>
          <BurgerBox>
            <Hamburger toggled={isOpen} toggle={handleToggle} color='#fff' />
          </BurgerBox>
          <StyledNav>
            <StyledLink to='/'>Home</StyledLink>
            <StyledLink to='/homeDashboard'>Dashboard</StyledLink>
            <StyledLink to='/safety'>Safety</StyledLink>
            <StyledLink to='/ourTeam'>Our team</StyledLink>
            <StyledLink to='/support'>Support</StyledLink>
          </StyledNav>
        </StyledWrapperNav>
      </StyledNavBurger>
    </StyledHeader>
  );
};

export default Navbar;
