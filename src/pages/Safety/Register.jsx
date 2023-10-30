import React, { useState } from 'react';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';
import { auth } from '../../firebase';
import {
  StyledLogInContainer,
  StyledLogInWrapper,
  StyledLogInContent,
  UserDataWrapper,
  SocialLogIn,
  StyledDefaultLogIn,
  SingleInput,
  StyledSeparate,
  StyledSeparateMobile,
  StyledButtons,
  StyledLinkForgotPassword,
  StyledLinkRegister,
  StyledFcGoogle,
  StyledBsFacebook,
  StyledBsGithub,
  StyledLinkPrevent,
} from './styles';
import LineLogIn from '../../assets/LineLogIn.svg';
import { useNavigate } from 'react-router-dom';
import { IoReturnUpBackOutline } from 'react-icons/io5';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/HomeDashboard');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate('/HomeDashboard');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signInWithGitHub = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate('/HomeDashboard');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate('/HomeDashboard');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <StyledLogInContainer>
      <StyledLogInWrapper>
        <StyledLogInContent>
          <h1>Register</h1>
          <UserDataWrapper>
            <SocialLogIn>
              <StyledButtons>
                <button onClick={signInWithGoogle}>
                  <StyledFcGoogle /> Log In with Google
                </button>
                <button onClick={signInWithFacebook}>
                  <StyledBsFacebook /> Log In with Facebook
                </button>
                <button onClick={signInWithGitHub}>
                  <StyledBsGithub /> Log In with GitHub
                </button>
                <StyledLinkPrevent to='/homeDashboard'>
                  <IoReturnUpBackOutline size={23} />
                  <p>Back to home Dashboard</p>
                </StyledLinkPrevent>
                <StyledLinkPrevent to='/login'>
                  <IoReturnUpBackOutline size={23} />
                  <p>Back to log in</p>
                </StyledLinkPrevent>
              </StyledButtons>
            </SocialLogIn>

            <StyledSeparate></StyledSeparate>
            <StyledSeparateMobile></StyledSeparateMobile>

            <StyledDefaultLogIn>
              <SingleInput>
                <p>Username or email</p>
                <input
                  type='text'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </SingleInput>
              <SingleInput>
                <p>Password</p>
                <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </SingleInput>
              <SingleInput>
                <p>Repeat password</p>
                <input type='password' />
              </SingleInput>
              <button onClick={signIn}>Register</button>
            </StyledDefaultLogIn>
          </UserDataWrapper>
        </StyledLogInContent>
      </StyledLogInWrapper>
    </StyledLogInContainer>
  );
};

export default Register;
