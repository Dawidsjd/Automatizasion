import React from 'react';
import {
  StyledLogInContainer,
  StyledLogInWrapper,
  StyledLogInContent,
  UserDataWrapper,
  SocialLogIn,
  StyledDefaultLogIn,
  SingleInput,
  StyledSeparate,
  StyledButtons,
  StyledLinkRegister,
} from './styles';
import LineLogIn from '../../assets/LineLogIn.svg';

const LogIn = () => {
  
  return (
    <StyledLogInContainer>
      <StyledLogInWrapper>
        <StyledLogInContent>
          <h1>Log In</h1>
          <UserDataWrapper>
            <SocialLogIn>
              <StyledButtons>
                <button>Log In with Google</button>
                <button>Log In with Facebook</button>
                <button>Log In with GitHub</button>
              </StyledButtons>
            </SocialLogIn>
            <StyledSeparate></StyledSeparate>
            <StyledDefaultLogIn>
              <SingleInput>
                <p>Username or email</p>
                <input type='text' />
              </SingleInput>
              <SingleInput>
                <p>Password</p>
                <input type='password' />
              </SingleInput>
              <button>Log In</button>
              <StyledLinkRegister to='/register'>
                Forgot password?
              </StyledLinkRegister>
            </StyledDefaultLogIn>
          </UserDataWrapper>
        </StyledLogInContent>
      </StyledLogInWrapper>
    </StyledLogInContainer>
  );
};

export default LogIn;
