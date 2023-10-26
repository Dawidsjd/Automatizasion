import { styled } from "@mui/material/styles";
import globalTheme from "../GlobalStyles/GlobalTheme";

export const StyledContainer = styled("div")(({ theme }) => ({
  height: "900px",
  width: "270px",
  background: globalTheme.palette.primary.main,
  borderRadius: "0 35px 35px 0",
  position: "absolute",
}));

export const StyledLogoContainer = styled("div")(({ theme }) => ({
  background: globalTheme.palette.primary.dark,
  marginTop: "40px",
  height: "60px",
  width: "85%",
  position: "relative",
  borderRadius: "0 10px 10px 0",
}));

export const StyledLogo = styled("p")(({ theme }) => ({
  position: "relative",
  textAlign: "center",
  top: "30%",
  color: globalTheme.palette.textcolorsecondary.main,
  fontWeight: "bolder",
  fontSize: globalTheme.typography.semimediumfontsize.main,
}));

export const StyledNav = styled("nav")(({ theme }) => ({
  position: "relative",
  top: "15%",
  right: "10%",
}));
