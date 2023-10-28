import React, { useEffect } from "react";
import LeftPanelDashboard from "../../Components/features/LeftPanelDashboard/LeftPanelDashboard";
import { StyledDashboard, Widgets } from "./styles";
import Welcome from "../../Components/widget/welcome/welcome";
import WeatherData from "../../Components/widget/Weather/WeatherData";
import CookingAssistant from "../../Components/widget/Cooking Assistant/cookingAssistant";
import ToDoList from "../../Components/widget/ToDoList/ToDoList";

const HomeDashboard = () => {
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <StyledDashboard>
      <LeftPanelDashboard />
      <Widgets>
        <Welcome />
        <WeatherData />
        <CookingAssistant />
        <ToDoList />
      </Widgets>
    </StyledDashboard>
  );
};

export default HomeDashboard;
