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

export const NotesContent = styled("div")(({ theme }) => ({
  background:
    "linear-gradient(40deg, rgba(247,236,154,1) 0%, rgba(246,234,141,1) 10%, rgba(245,233,138,1) 49%, rgba(248,237,157,1) 94%, rgba(245,233,138,1) 100%)",
  width: "100%",
  margin: "20px 0",
  borderRadius: "10px",
  boxShadow: "-4px 9px 4px 0px rgba(0, 0, 0, 0.25)",
}));

export const NotesText = styled("p")(({ theme }) => ({
  fontFamily: "Kalam, cursive",
  padding: "20px",
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
