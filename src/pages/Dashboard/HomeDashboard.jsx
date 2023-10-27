import React from "react";
import LeftPanelDashboard from "../../Components/features/LeftPanelDashboard/LeftPanelDashboard";
import { StyledDashboard, Widgets } from "./styles";
import Welcome from "../../Components/widget/welcome/welcome";
import WeatherData from "../../Components/widget/Weather/WeatherData";

const HomeDashboard = () => {
  return (
    <StyledDashboard>
      <LeftPanelDashboard />
      <Widgets>
        {/* <Welcome /> */}
        {/* <WeatherData /> */}
      </Widgets>
    </StyledDashboard>
  );
};

export default HomeDashboard;
