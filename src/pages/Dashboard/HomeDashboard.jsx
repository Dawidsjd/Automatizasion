import React from "react";
import LeftPanelDashboard from "../../Components/features/LeftPanelDashboard/LeftPanelDashboard";
import { StyledContainer, StyledDashboard } from "./styles";
import Welcome from "../../Components/widget/welcome/welcome";

const HomeDashboard = () => {
  return (
    <StyledContainer>
      <StyledDashboard>
        <LeftPanelDashboard />
        <Welcome />
      </StyledDashboard>
    </StyledContainer>
  );
};

export default HomeDashboard;
