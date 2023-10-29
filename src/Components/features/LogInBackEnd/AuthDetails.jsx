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
  StyledLoginBtn,
  StyledLoginIcon,
} from "./../LeftPanelDashboard/styles";
import { BiLogOutCircle, BiLogInCircle } from "react-icons/bi";
import Tooltip from "@mui/material/Tooltip";

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

  const [tooltipText, setTooltipText] = useState("");

  useEffect(() => {
    if (authUser) {
      setTooltipText("LogOut");
    } else {
      setTooltipText("LogIn");
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
          <StyledLoginBtn onClick={userSignOut} />
        </>
      ) : (
        <>
          <StyledUserAvatar />
          <StyledProfile>
            <StyledUserName>Anonymus</StyledUserName>
            <StyledStatusName>Status: offline</StyledStatusName>
          </StyledProfile>
          <StyledLoginBtn onClick={handleLogin} />
        </>
      )}
      <Tooltip title={tooltipText}>
        <StyledLoginBtn onClick={authUser ? userSignOut : handleLogin}>
          <StyledLoginIcon>
            {authUser ? <BiLogOutCircle /> : <BiLogInCircle />}
          </StyledLoginIcon>
        </StyledLoginBtn>
      </Tooltip>
    </StyledAuthorization>
  );
};

export default AuthDetails;
