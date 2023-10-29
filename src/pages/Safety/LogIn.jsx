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
import { useNavigate } from 'react-router-dom';
import { IoReturnUpBackOutline } from 'react-icons/io5';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/HomeDashboard');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === 'auth/wrong-password') {
          setError('Nieprawidłowe hasło.');
        } else if (errorCode === 'auth/user-not-found') {
          setError('Użytkownik o podanym adresie email nie istnieje.');
        } else {
          console.error(errorMessage);
          setError('Wystąpił nieznany błąd.');
        }
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
          <h1>Log In</h1>
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
                  <IoReturnUpBackOutline size={23} />{' '}
                  <p>Back to home Dashboard</p>
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
              <button onClick={signIn}>Log In</button>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <StyledLinkForgotPassword to='/register'>
                Forgot password?
              </StyledLinkForgotPassword>
            </StyledDefaultLogIn>
          </UserDataWrapper>
          <StyledLinkRegister to='/register'>
            Need an account? Sign up now!
          </StyledLinkRegister>
        </StyledLogInContent>
      </StyledLogInWrapper>
    </StyledLogInContainer>
  );
};

export default LogIn;
