import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";
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
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          <h1>Log In</h1>
          <UserDataWrapper>
            <SocialLogIn>
              <StyledButtons>
                <button onClick={signInWithGoogle}>Log In with Google</button>
                <button onClick={signInWithFacebook}>Log In with Facebook</button>
                <button onClick={signInWithGitHub}>Log In with GitHub</button>
              </StyledButtons>
            </SocialLogIn>
            <StyledSeparate></StyledSeparate>
            <StyledDefaultLogIn>
              <SingleInput>
                <p>Username or email</p>
                <input type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
              </SingleInput>
              <SingleInput>
                <p>Password</p>
                <input type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
              </SingleInput>
              <button onClick={signIn}>Log In</button>
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
