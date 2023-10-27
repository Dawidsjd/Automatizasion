import { styled } from "@mui/material/styles";
import globalTheme from "../../features/GlobalStyles/GlobalTheme";

export const StyledContainer = styled("div")(({ theme }) => ({
  webkitBackdropFilter: "blur(20px) brightness(100%)",
  backdropFilter: "blur(20px) brightness(100%)",
  backgroundColor: "#02122394",
  borderRadius: "20px",
  height: "230px",
  position: "relative",
  width: "730px",
}));

export const StyledCalendar = styled("div")(({ theme }) => ({
  height: "40px",
  left: "25px",
  position: "absolute",
  top: "20px",
  width: "170px",
}));

export const StyledOverlap = styled("div")(({ theme }) => ({
  backgroundColor: globalTheme.palette.tiles.main,
  borderRadius: "10px",
  boxShadow: "0px 4px 20px 2px #00000040",
  height: "40px",
  position: "relative",
  width: "170px",
}));

export const StyledDate = styled("div")(({ theme }) => ({
  color: globalTheme.palette.textcolorprimary.main,
  fontWeight: 400,
  height: "30px",
  left: "30px",
  letterSpacing: 0,
  lineHeight: "normal",
  position: "absolute",
  textAlign: "center",
  top: "10px",
  width: "130px",
}));

export const StyledIcon = styled("i")(({ theme }) => ({
  fontSize: "20px",
  color: globalTheme.palette.textcolorprimary.main,
  left: "10px",
  position: "absolute",
  top: "10px",
}));

export const StyledWelcome = styled("div")(({ theme }) => ({
  height: "40px",
  left: "25px",
  position: "absolute",
  top: "160px",
  width: "240px",
}));

export const StyledMessage = styled("div")(({ theme }) => ({
  color: globalTheme.palette.textcolorprimary.main,
  fontSize: "20px",
  fontWeight: 700,
  height: "20px",
  left: 0,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "absolute",
  top: 0,
  whiteSpace: "nowrap",
  width: "230px",
}));

export const StyledDescription = styled("div")(({ theme }) => ({
  color: globalTheme.palette.textcolorprimary.main,
  fontSize: "16px",
  fontWeight: 400,
  height: "20px",
  left: 0,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "absolute",
  top: "20px",
  width: "230px",
}));

export const StyledImage = styled("img")(({ theme }) => ({
  height: "230px",
  left: "365px",
  position: "absolute",
  top: "0",
  width: "280px",
}));
