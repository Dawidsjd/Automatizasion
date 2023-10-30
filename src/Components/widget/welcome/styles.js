import { styled } from "@mui/material/styles";
import globalTheme from "../../features/GlobalStyles/GlobalTheme";

export const StyledContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  background: globalTheme.palette.tiles.main,
  backdropFilter: "blur(6.2px)",
  paddingTop: "30px",
  paddingLeft: "30px",
  width: "800px",
  marginTop: "50px",
  marginLeft: "5%",
  textAlign: "left",
}));

export const StyledCalendar = styled("div")(({ theme }) => ({
  backgroundColor: globalTheme.palette.secondary.main,
  height: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  width: "170px",
  color: globalTheme.palette.textcolorprimary.main,
  fontSize: globalTheme.typography.semimediumfontsize.main,
}));

export const StyledDate = styled("div")(({ theme }) => ({
  marginLeft: "10px",
}));

export const StyledIcon = styled("i")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const StyledWelcome = styled("div")(({ theme }) => ({
  marginTop: "100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "left",
  flex: 1,
}));

export const StyledMessage = styled("div")(({ theme }) => ({
  fontSize: globalTheme.typography.mediumfontsize.main,
  fontWeight: "bold",
  color: globalTheme.palette.textcolorprimary.main,
  marginBottom: "0",
}));

export const StyledDescription = styled("p")(({ theme }) => ({
  fontSize: globalTheme.typography.semimediumfontsize.main,
  color: globalTheme.palette.textcolorprimary.main,
  marginBottom: "0",
  marginTop: "0",
}));

export const StyledImage = styled("img")(({ theme }) => ({
  width: "auto",
  height: "220px",
  userSelect: "none",
  pointerEvents: "none",
}));

export const StyledContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  marginRight: "25px",
  marginBottom: "25px",
}));
