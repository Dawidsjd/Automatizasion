import React from "react";
import LeftPanelDashboard from "../../Components/features/LeftPanelDashboard/LeftPanelDashboard";
import { StyledContainer, StyledDashboard, Widgets } from "./styles";
import Welcome from "../../Components/widget/welcome/welcome";

const HomeDashboard = () => {
  return (
    <StyledContainer>
      <StyledDashboard>
        <LeftPanelDashboard />
        <Widgets>
          <Welcome />
        </Widgets>
      </StyledDashboard>
    </StyledContainer>
  );
};

export default HomeDashboard;
