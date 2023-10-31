import React, { useState, useEffect } from 'react';
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
  StyledWrapperGeneral,
  StyledLoginIcon,
  StyledLoginBtn,
} from './styles';
import Logo from './../../../assets/logo.svg';
import PanelImage from './../../../assets/PanelImage.svg';
import AuthDetails from '../LogInBackEnd/AuthDetails';

import { BiLogOutCircle, BiLogInCircle } from 'react-icons/bi';
import Tooltip from '@mui/material/Tooltip';

import { auth } from '../../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const LeftPanelDashboard = () => {
  const [clicked, setClicked] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();
  const [tooltipText, setTooltipText] = useState('');

  const handleClick = () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
    setClicked(!clicked);
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  useEffect(() => {
    if (authUser) {
      setTooltipText('LogOut');
    } else {
      setTooltipText('LogIn');
    }
  }, [authUser]);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log(`sign out successful`);
      })
      .catch((error) => console.log(error));
  };

  const handleLogin = () => {
    navigate('/logIn');
  };

  return (
    <StyledContainer>
      <StyledLogoContainer>
        <StyledLogoImage src={Logo} />
        <StyledLogo>FlowView</StyledLogo>
      </StyledLogoContainer>
      <StyledNav>
        <StyledNavbar className={clicked ? 'nav_active' : 'navbar'}>
          <StyledWrapperGeneral>
            <span>General</span>
            <StyledItem>
              <NavLink
                to='/HomeDashboard'
                activeClassName='active'
                className={({ isActive }) =>
                  isActive ? 'link-active' : 'link'
                }
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
                className={({ isActive }) =>
                  isActive ? 'link-active' : 'link'
                }
              >
                <StyledIcon>
                  <BiSolidSchool style={{ width: '25px', height: '25px' }} />
                </StyledIcon>
                School
              </NavLink>
            </StyledItem>
          </StyledWrapperGeneral>

          <StyledWrapperGeneral>
            <span>Other</span>
            <StyledItem>
              <NavLink
                to='/Support'
                className={({ isActive }) =>
                  isActive ? 'link-active' : 'link'
                }
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
                className={({ isActive }) =>
                  isActive ? 'link-active' : 'link'
                }
              >
                <StyledIcon>
                  <FiSettings style={{ width: '25px', height: '25px' }} />
                </StyledIcon>
                Settings
              </NavLink>
            </StyledItem>
            <StyledItem>
              <StyledLoginBtn onClick={authUser ? userSignOut : handleLogin}>
                <StyledIcon>
                  {authUser ? (
                    <BiLogOutCircle style={{ width: '25px', height: '25px' }} />
                  ) : (
                    <BiLogInCircle style={{ width: '25px', height: '25px' }} />
                  )}
                </StyledIcon>
                {authUser ? 'Log Out' : 'Log In'}
              </StyledLoginBtn>
            </StyledItem>
          </StyledWrapperGeneral>
        </StyledNavbar>
      </StyledNav>
      <AuthDetails />
    </StyledContainer>
  );
};

export default LeftPanelDashboard;
