import { styled } from "@mui/material/styles";
import globalTheme from "../../features/GlobalStyles/GlobalTheme";

export const StyledContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  background: globalTheme.palette.tiles.light,
  backdropFilter: "blur(6.2px)",
  minHeight: "300px",
  marginTop: "2%",
  marginLeft: "5%",
  padding: "20px",
  textAlign: "left",
}));

export const Title = styled("div")(({ theme }) => ({
  fontSize: globalTheme.typography.semibigfontsize.main,
  fontWeight: "bold",
  color: globalTheme.palette.textcolorprimary.main,
  marginBottom: "10px",
}));

export const Subtitle = styled("div")(({ theme }) => ({
  fontSize: globalTheme.typography.semimediumfontsize.main,
  color: globalTheme.palette.textcolorprimary.main,
  marginBottom: "20px",
}));

export const Button = styled("button")(({ theme }) => ({
  padding: "12px 24px",
  fontSize: "1.2em",
  fontWeight: "bold",
  background: globalTheme.palette.primary.main,
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  display: "flex",
}));

export const Icon = styled("img")(({ theme }) => ({
  width: "35%",
  height: "auto",
  pointerEvents: "none",
  userSelect: "none",
}));
