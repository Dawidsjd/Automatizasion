import React from "react";
import LeftPanelDashboard from "../../Components/features/LeftPanelDashboard/LeftPanelDashboard";
import { StyledContainer, StyledDashboard } from "./styles";

const HomeDashboard = () => {
  return (
    <StyledContainer>
      <StyledDashboard>
        <LeftPanelDashboard />
        <div>HomeDashboard</div>
      </StyledDashboard>
    </StyledContainer>
  );
};

export default HomeDashboard;
