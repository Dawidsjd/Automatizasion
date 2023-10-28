import { styled } from "@mui/material/styles";
import globalTheme from "../../Components/features/GlobalStyles/GlobalTheme";
import dashboardBackground from "./../../assets/dashboardBackground.svg";

export const StyledDashboard = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100vh",
  background: `url(${dashboardBackground})`,
  backgroundSize: "cover",
  position: "relative",
  display: "flex",
}));

export const Widgets = styled("div")(({ theme }) => ({
  border: "1px solid red",
  width: "85%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
  padding: "20px",
}));

export const CookingAssistantWrapper = styled("div")(({ theme }) => ({
  alignSelf: "flex-start", // Ustawiamy align-self na flex-start
}));
