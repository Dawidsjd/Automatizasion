import React, { useState, useEffect } from "react";
import {
  StyledHeader,
  StyledImageWrapper,
  StyledNav,
  StyledLink,
  StyledNavBurger,
  ResponsiveBurger,
  BurgerBox,
  StyledWrapperNav,
  StyledHeaderContent,
  StyledLogo,
} from "./styles";

import { Sling as Hamburger } from "hamburger-react";

import logo from "../../../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(null);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY === 0) {
      setHeaderHeight(100);
    } else {
      setHeaderHeight(80);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledHeader style={{ height: `${headerHeight}px` }}>
      <StyledHeaderContent>
        <StyledImageWrapper>
          <StyledLogo src={logo} />
        </StyledImageWrapper>

        <ResponsiveBurger>
          <Hamburger toggled={isOpen} toggle={handleToggle} color="#fff" />
        </ResponsiveBurger>

        <StyledNavBurger isOpen={isOpen ? "open" : ""}>
          <StyledWrapperNav>
            <BurgerBox>
              <Hamburger toggled={isOpen} toggle={handleToggle} color="#fff" />
            </BurgerBox>
            <StyledNav>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/homeDashboard">Dashboard</StyledLink>
              <StyledLink to="/support">Support</StyledLink>
            </StyledNav>
          </StyledWrapperNav>
        </StyledNavBurger>
      </StyledHeaderContent>
    </StyledHeader>
  );
};

export default Navbar;
