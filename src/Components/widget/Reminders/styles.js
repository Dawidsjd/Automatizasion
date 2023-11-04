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

export const Reminder = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  background: globalTheme.palette.textcolorsecondary.main,
  borderRadius: "5px",
  marginTop: "5px",
}));

export const ReminderStatus = styled("div")(({ theme }) => ({
  width: "10px",
  height: "30px",
  borderRadius: "5px",
  margin: "10px",
}));

export const ReminderDescription = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
}));

export const ReminderTitle = styled("h3")(({ theme }) => ({
  color: "#262D79",
  lineHeight: "25px",
  margin: "0",
}));

export const ReminderSubtitle = styled("p")(({ theme }) => ({
  color: "#1E3D58",
  lineHeight: "20px",
  margin: "0",
}));

export const Button = styled("button")(({ theme }) => ({
  marginTop: "5px",
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
  width: "30%",
  height: "auto",
  pointerEvents: "none",
  userSelect: "none",
}));
