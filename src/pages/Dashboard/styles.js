import { styled } from "@mui/material/styles";
import globalTheme from "../../Components/features/GlobalStyles/GlobalTheme";
import dashboardBackground from "./../../assets/dashboardBackground.svg";

export const StyledDashboard = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100vh",
  background: `url(${dashboardBackground})`,
  backgroundSize: "cover",
  position: "relative",
}));

export const Widgets = styled("div")(({ theme }) => ({
  //tymczasowe
  // marginLeft: "17%",
  // paddingTop: "5%",
}));
