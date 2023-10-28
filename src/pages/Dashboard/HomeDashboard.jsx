import React, { useEffect } from 'react';
import LeftPanelDashboard from '../../Components/features/LeftPanelDashboard/LeftPanelDashboard';
import { CookingAssistantWrapper, StyledDashboard, Widgets } from './styles';
import Welcome from '../../Components/widget/welcome/welcome';
import WeatherData from '../../Components/widget/Weather/WeatherData';
import CookingAssistant from '../../Components/widget/Cooking Assistant/CookingAssistant';
import ToDoList from '../../Components/widget/ToDoList/ToDoList';

const HomeDashboard = () => {
  useEffect(() => {
    document.title = 'Home';
  });
  return (
    <StyledDashboard>
      <LeftPanelDashboard />
        <Widgets>
          {/* <Welcome /> Do naprawy ᓚᘏᗢ */}
            {/* <WeatherData /> Do naprawy ᓚᘏᗢ */}
            <CookingAssistantWrapper>
              <CookingAssistant />
            </CookingAssistantWrapper>
            <CookingAssistantWrapper>
               <CookingAssistant />           {/* TEST GRIDA, DLATEGO JEST TA DUPLIKACJA KOMPONENTÓW */}
            </CookingAssistantWrapper>
            <CookingAssistantWrapper>
              <CookingAssistant />
            </CookingAssistantWrapper>
            <CookingAssistantWrapper>
              <CookingAssistant />
            </CookingAssistantWrapper>
          {/* <ToDoList /> */}
        </Widgets>
    </StyledDashboard>
  );
};

export default HomeDashboard;
