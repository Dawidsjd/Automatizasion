import React, { useEffect } from "react";
import LeftPanelDashboard from "../../Components/features/LeftPanelDashboard/LeftPanelDashboard";
import { WidgetWrapper, StyledDashboard, Widgets } from "./styles";
import Welcome from "../../Components/widget/welcome/welcome";
import WeatherData from "../../Components/widget/Weather/WeatherData";
import CookingAssistant from "../../Components/widget/CookingAssistant/CookingAssistant";
import ToDo from "../../Components/widget/ToDo/ToDo";

const HomeDashboard = () => {
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <StyledDashboard>
      <LeftPanelDashboard />
      <Widgets>
        <WidgetWrapper>
          <Welcome />
        </WidgetWrapper>
        <WidgetWrapper>
          <WeatherData />
        </WidgetWrapper>
        <WidgetWrapper>
          <CookingAssistant />
        </WidgetWrapper>
        <WidgetWrapper>
          <ToDo />
        </WidgetWrapper>
      </Widgets>
    </StyledDashboard>
  );
};

export default HomeDashboard;
