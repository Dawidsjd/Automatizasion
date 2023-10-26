import React, { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  StyledAuthorization,
  StyledLoginBtn,
  StyledSeparator,
  StyledUserStatus,
  StyledUserAvatar,
  StyledStatus,
  StyledUserName,
  StyledStatusName,
} from "./../LeftPanelDashboard/styles";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

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

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log(`sign out successful`);
      })
      .catch((error) => console.log(error));
  };

  const handleLogin = () => {
    navigate("/logIn");
  };

  return (
    <StyledAuthorization>
      {authUser ? (
        <>
          <StyledLoginBtn onClick={userSignOut}>Log Out</StyledLoginBtn>
          <StyledSeparator />
          <StyledUserStatus>
            <StyledUserAvatar
              src={authUser.photoURL}
              alt={authUser.displayName}
            />
            <StyledStatus style={{ background: "#36d41c" }} />
            <StyledUserName>{`Signed In as ${authUser.displayName}`}</StyledUserName>
            <StyledStatusName>Status: active</StyledStatusName>
          </StyledUserStatus>
        </>
      ) : (
        <>
          <StyledLoginBtn onClick={handleLogin}>Log In</StyledLoginBtn>
          <StyledSeparator />
          <StyledUserStatus>
            <StyledUserAvatar />
            <StyledStatus style={{ background: "#D62424" }} />
            <StyledUserName>Anonymus</StyledUserName>
            <StyledStatusName>Status: offline</StyledStatusName>
          </StyledUserStatus>
        </>
      )}
    </StyledAuthorization>
  );
};

export default AuthDetails;
