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
  width: "650px",
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
