import React, { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  StyledAuthorization,
  StyledUserAvatar,
  StyledProfile,
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
          <StyledUserAvatar
            src={authUser.photoURL}
            alt={authUser.displayName}
          />
          <StyledProfile>
            <StyledUserName>{`${
              authUser.displayName || authUser.reloadUserInfo.screenName
            }`}</StyledUserName>
            <StyledStatusName>Status: active</StyledStatusName>
          </StyledProfile>
        </>
      ) : (
        <>
          <StyledUserAvatar />
          <StyledProfile>
            <StyledUserName>Anonymus</StyledUserName>
            <StyledStatusName>Status: offline</StyledStatusName>
          </StyledProfile>
        </>
      )}
    </StyledAuthorization>
  );
};

export default AuthDetails;
