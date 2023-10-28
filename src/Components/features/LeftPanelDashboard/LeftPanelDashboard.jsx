import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  StyledContainer,
  StyledLogoContainer,
  StyledLogo,
  StyledNav,
  StyledSubpages,
  StyledLinks,
  StyledNavLink,
  StyledWrapper,
} from "./styles";
import "./styles.css";
import { AiTwotoneHome } from "react-icons/ai";
import { FaSchool } from "react-icons/fa";
import AuthDetails from "../LogInBackEnd/AuthDetails";

const LeftPanelDashboard = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
    setClicked(!clicked);
  };

  return (
    <StyledContainer>
      <StyledLogoContainer>
        <StyledLogo>FlowView</StyledLogo>
      </StyledLogoContainer>
      <StyledWrapper>
        <StyledNav>
          <ul id="navbar" className={clicked ? "nav_active" : "navbar"}>
            <li>
              <NavLink
                to="/HomeDashboard"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                <i>
                  <AiTwotoneHome style={{ width: "25px", height: "25px" }} />
                </i>{" "}
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/SchoolDashboard"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                <i>
                  <FaSchool style={{ width: "25px", height: "25px" }} />
                </i>
                School
              </NavLink>
            </li>
          </ul>
        </StyledNav>
        <StyledSubpages>
          <StyledNavLink to="/">Main Page</StyledNavLink>
          <StyledNavLink to="/Settings">Settings</StyledNavLink>
        </StyledSubpages>
        <AuthDetails />
      </StyledWrapper>
    </StyledContainer>
  );
};

export default LeftPanelDashboard;
