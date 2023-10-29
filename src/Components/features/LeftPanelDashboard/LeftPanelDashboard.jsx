import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiTwotoneHome } from 'react-icons/ai';
import { BiSolidSchool, BiSupport } from 'react-icons/bi';
import { IoReturnUpBack } from 'react-icons/io5';
import { FiSettings } from 'react-icons/fi';
import {
  StyledContainer,
  StyledLogoContainer,
  StyledLogo,
  StyledLogoImage,
  StyledNav,
  StyledNavbar,
  StyledItem,
  StyledIcon,
  StyledPanel,
} from './styles';
import './styles.css';
import Logo from './../../../assets/Logo.svg';
import PanelImage from './../../../assets/PanelImage.svg';
import AuthDetails from '../LogInBackEnd/AuthDetails';
const LeftPanelDashboard = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
    setClicked(!clicked);
  };

  return (
    <StyledContainer>
      <StyledLogoContainer>
        <StyledLogoImage src={Logo} />
        <StyledLogo>FlowView</StyledLogo>
      </StyledLogoContainer>
      <StyledNav>
        <StyledNavbar className={clicked ? 'nav_active' : 'navbar'}>
          <StyledItem>
            <NavLink
              to='/HomeDashboard'
              activeClassName='active'
              className={({ isActive }) => (isActive ? 'link-active' : 'link')}
            >
              <StyledIcon>
                <AiTwotoneHome style={{ width: '25px', height: '25px' }} />
              </StyledIcon>{' '}
              Home
            </NavLink>
          </StyledItem>
          <StyledItem>
            <NavLink
              to='/SchoolDashboard'
              activeClassName='active'
              className={({ isActive }) => (isActive ? 'link-active' : 'link')}
            >
              <StyledIcon>
                <BiSolidSchool style={{ width: '25px', height: '25px' }} />
              </StyledIcon>
              School
            </NavLink>
          </StyledItem>
          <StyledItem>
            <NavLink
              to='/'
              activeClassName='active'
              className={({ isActive }) => (isActive ? 'link-active' : 'link')}
            >
              <StyledIcon>
                <IoReturnUpBack style={{ width: '25px', height: '25px' }} />
              </StyledIcon>
              Main Page
            </NavLink>
          </StyledItem>
          <StyledItem>
            <NavLink
              to='/Support'
              className={({ isActive }) => (isActive ? 'link-active' : 'link')}
            >
              <StyledIcon>
                <BiSupport style={{ width: '25px', height: '25px' }} />
              </StyledIcon>
              Support
            </NavLink>
          </StyledItem>
          <StyledItem>
            <NavLink
              to='/Settings'
              className={({ isActive }) => (isActive ? 'link-active' : 'link')}
            >
              <StyledIcon>
                <FiSettings style={{ width: '25px', height: '25px' }} />
              </StyledIcon>
              Settings
            </NavLink>
          </StyledItem>
        </StyledNavbar>
      </StyledNav>
      <StyledPanel src={PanelImage} />
      <AuthDetails />
    </StyledContainer>
  );
};

export default LeftPanelDashboard;
