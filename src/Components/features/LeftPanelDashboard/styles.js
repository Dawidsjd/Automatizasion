import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import globalTheme from "../GlobalStyles/GlobalTheme";

export const StyledContainer = styled("div")(({ theme }) => ({
  height: "100vh",
  maxWidth: "17%",
  background: globalTheme.palette.primary.main,
  borderRadius: "0 35px 35px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  justifyContent: "space-between",
}));

export const StyledLogoContainer = styled("div")(({ theme }) => ({
  background: globalTheme.palette.primary.dark,
  margin: "20px 0",
  height: "60px",
  width: "85%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
}));

export const StyledLogo = styled("p")(({ theme }) => ({
  color: globalTheme.palette.textcolorsecondary.main,
  fontWeight: "bolder",
  fontSize: globalTheme.typography.semimediumfontsize.main,
  margin: "0",
}));

export const StyledNav = styled("nav")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  flex: 0.8,
}));

export const StyledLinks = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  marginTop: "100px",
}));

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  marginTop: "25px",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "none",
  },
  color: globalTheme.palette.textcolorsecondary.main,
  fontSize: globalTheme.typography.semismallfontsize.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledAuthorization = styled("div")(({ theme }) => ({
  position: "relative",
  bottom: "5%",
}));

export const StyledLoginBtn = styled("button")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  margin: "0 auto",
  background: "none",
  color: globalTheme.palette.textcolorsecondary.main,
  fontWeight: "bold",
  cursor: "pointer",
}));

export const StyledSeparator = styled("hr")(({ theme }) => ({
  marginTop: "20px",
  width: "100%",
  marginLeft: "0",
  height: "1px",
  border: "none",
  background: "#000",
}));

export const StyledUserStatus = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "auto",
  width: "140%",
  bottom: "0",
  marginLeft: "0px",
}));

export const StyledUserAvatar = styled("img")(({ theme }) => ({
  background: "#1e3d58", //tymczasowe
  width: "45px",
  height: "45px",
  borderRadius: "75px",
  position: "absolute",
  left: "5%",
}));

export const StyledStatus = styled("div")(({ theme }) => ({
  borderRadius: "10px",
  height: "15px",
  width: "15px",
  left: "15%",
  position: "absolute",
  top: "95px",
}));

export const StyledUserName = styled("p")(({ theme }) => ({
  textAlign: "left",
  marginLeft: "20%",
  marginTop: "0",
  color: globalTheme.palette.textcolorsecondary.main,
  fontWeight: "bold",
  fontSize: globalTheme.typography.semismallfontsize.main,
}));

export const StyledStatusName = styled("p")(({ theme }) => ({
  textAlign: "left",
  marginLeft: "20%",
  marginTop: "-20px", // Adjusted the margin-top to create a 5px spacing
  color: globalTheme.palette.textcolorsecondary.main,
  fontSize: globalTheme.typography.semismallfontsize.main,
}));

export const StyledIcon = styled("i")(({ theme }) => ({
  marginRight: "0",
}));

export const StyledWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  justifyContent: "space-between",
}));

export const StyledSubpages = styled("div")(({ theme }) => ({
  bottom: "0",
}));
