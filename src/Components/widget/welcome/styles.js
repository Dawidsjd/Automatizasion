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
  left: "23px",
  position: "absolute",
  top: "20px",
  width: "172px",
}));

export const StyledOverlap = styled("div")(({ theme }) => ({
  backgroundColor: "#88a2c4",
  borderRadius: "10px",
  boxShadow: "0px 4px 20px 2px #00000040",
  height: "40px",
  position: "relative",
  width: "170px",
}));

export const StyledDate = styled("div")(({ theme }) => ({
  color: "#ffffff",
  fontWeight: 400,
  height: "30px",
  left: "33px",
  letterSpacing: 0,
  lineHeight: "normal",
  position: "absolute",
  textAlign: "center",
  top: "5px",
  width: "130px",
}));

export const StyledIcon = styled("i")(({ theme }) => ({
  color: "#fff",
  left: "10px",
  position: "absolute",
  top: "10px",
}));

// export const StyledContainer = styled("div")(({ theme }) => ({
// }));

// export const StyledContainer = styled("div")(({ theme }) => ({
// }));

// export const StyledContainer = styled("div")(({ theme }) => ({
// }));
