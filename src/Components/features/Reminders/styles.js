import { styled } from "@mui/material/styles";
import globalTheme from "../../features/GlobalStyles/GlobalTheme";

export const RemindersContainer = styled("div")(({ theme }) => ({
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

export const RemindersContent = styled("div")(({ theme }) => ({
  background: globalTheme.palette.tetriary.main,
  width: "80%",
  height: "80%",
  borderRadius: "20px",
}));

export const StyledHeader = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const StyledTitle = styled("p")(({ theme }) => ({
  fontSize: globalTheme.typography.semibigfontsize.main,
  fontWeight: "bold",
  color: globalTheme.palette.textcolorprimary.main,
  justifyContent: "flex-start",
  marginTop: "20px",
  marginLeft: "20px",
}));

export const StyledModalBtn = styled("button")(({ theme }) => ({
  justifyContent: "flex-end",
  marginTop: "20px",
  marginRight: "20px",
  fontSize: globalTheme.typography.semimediumfontsize.main,
  background: globalTheme.palette.primary.main,
  color: globalTheme.palette.textcolorprimary.main,
  padding: "0 15px",
  height: "35px",
  borderRadius: "15px",
  alignItems: "center",
  cursor: "pointer",
  "&: hover": {
    background: "#306CA8",
  },
}));

// export const RemindersContainer = styled("div")(({ theme }) => ({}));

// export const RemindersContainer = styled("div")(({ theme }) => ({}));

// export const RemindersContainer = styled("div")(({ theme }) => ({}));

// export const RemindersContainer = styled("div")(({ theme }) => ({}));

// export const RemindersContainer = styled("div")(({ theme }) => ({}));
