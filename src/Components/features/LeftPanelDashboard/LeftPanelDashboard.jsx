import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  StyledContainer,
  StyledLogoContainer,
  StyledLogo,
  StyledNav,
} from "./styles";
import "./styles.css";

class LeftPanelDashboard extends Component {
  state = { clicked: false };

  handleClick = () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <StyledContainer>
        <StyledLogoContainer>
          <StyledLogo>FlowVue</StyledLogo>
        </StyledLogoContainer>
        <ul
          id="navbar"
          className={this.state.clicked ? "nav_active" : "navbar"}
        >
          <li>
            <NavLink
              to="/HomeDashboard"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/SchoolDashboard"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              School
            </NavLink>
          </li>
        </ul>
      </StyledContainer>
    );
  }
}
export default LeftPanelDashboard;
