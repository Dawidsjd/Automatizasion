import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  StyledContainer,
  StyledLogoContainer,
  StyledLogo,
  StyledNav,
} from "./styles";
import "./styles.css";
import { AiTwotoneHome } from "react-icons/ai";
import { FaSchool } from "react-icons/fa";

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
                  <AiTwotoneHome />
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
                  <FaSchool />
                </i>
                School
              </NavLink>
            </li>
          </ul>
        </StyledNav>
      </StyledContainer>
    );
  }
}
export default LeftPanelDashboard;
