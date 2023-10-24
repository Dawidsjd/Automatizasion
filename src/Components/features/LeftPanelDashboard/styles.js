import { styled } from "@mui/material/styles";
import globalTheme from "../GlobalStyles/GlobalTheme";

export const StyledContainer = styled("div")(({ theme }) => ({
  height: "900px",
  width: "270px",
  background: globalTheme.palette.primary.main,
  borderRadius: "0 35px 35px 0",
}));

export const StyledLogoContainer = styled("div")(({ theme }) => ({
  background: globalTheme.palette.primary.dark,
  marginTop: "40px",
  height: "60px",
}));

export const StyledLogo = styled("nav")(({ theme }) => ({}));

export const StyledNav = styled("nav")(({ theme }) => ({}));
