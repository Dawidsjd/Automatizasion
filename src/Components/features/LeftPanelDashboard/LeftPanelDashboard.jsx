import React, { Component, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  StyledContainer,
  StyledLogoContainer,
  StyledLogo,
  StyledNav,
  StyledSubpages,
  StyledLinks,
  StyledNavLink,
} from "./styles";
import "./styles.css";
import { AiTwotoneHome } from "react-icons/ai";
import { FaSchool } from "react-icons/fa";
import AuthDetails from "../LogInBackEnd/AuthDetails";
class LeftPanelDashboard extends Component {
  state = { clicked: false, user: null };

  handleClick = () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <StyledContainer>
        <StyledLogoContainer>
          <StyledLogo>FlowView</StyledLogo>
        </StyledLogoContainer>
        <StyledNav>
          <ul
            id="navbar"
            className={this.state.clicked ? "nav_active" : "navbar"}
          >
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
      </StyledContainer>
    );
  }
}
export default LeftPanelDashboard;
