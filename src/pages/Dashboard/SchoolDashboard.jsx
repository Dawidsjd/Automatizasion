import React from "react";
import LeftPanelDashboard from "../../Components/features/LeftPanelDashboard/LeftPanelDashboard";
import { StyledDashboard } from "./styles";

const HomeDashboard = () => {
  return (
    <StyledDashboard>
      <LeftPanelDashboard />
      <div>HomeDashboard</div>
    </StyledDashboard>
  );
};

export default HomeDashboard;
