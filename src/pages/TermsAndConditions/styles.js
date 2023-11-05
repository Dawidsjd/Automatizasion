import { styled } from "@mui/material/styles";
import globalTheme from "../../Components/features/GlobalStyles/GlobalTheme";

export const TermsContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: globalTheme.palette.secondary.main,
}));

export const StyledButton = styled("button")(({ theme }) => ({
  position: "absolute",
  top: "10px",
  left: "10px",
  background: globalTheme.palette.primary.main,
  color: globalTheme.palette.textcolorprimary.main,
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  fontSize: globalTheme.typography.mediumfontsize.main,
  padding: "10px 30px",
  "&: hover": {
    background: "#306CA8",
  },
}));

export const TermsContent = styled("div")(({ theme }) => ({
  background: globalTheme.palette.tetriary.main,
  width: "80%",
  height: "90%",
  borderRadius: "20px",
  overflowY: "auto",
  padding: "20px",
}));

export const Title = styled("h2")(({ theme }) => ({
  color: globalTheme.palette.textcolorprimary.main,
  textAlign: "center",
}));

export const Subtitle = styled("p")(({ theme }) => ({
  fontSize: globalTheme.typography.semimediumfontsize.main,
  fontWeight: "bold",
}));

export const Description = styled("div")(({ theme }) => ({}));

export const Links = styled("ul")(({ theme }) => ({}));

export const SingleElement = styled("li")(({ theme }) => ({}));

export const SingleLink = styled("a")(({ theme }) => ({
  textDecoration: "none",
  color: globalTheme.palette.primary.main,
  fontSize: globalTheme.typography.smallfontsize.main,
  fontWeight: "bold",
  "&:hover": {
    color: globalTheme.palette.textcolorprimary.main,
  },
}));
