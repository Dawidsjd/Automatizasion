import React, { useEffect } from "react";
import LeftPanelDashboard from "../../Components/features/LeftPanelDashboard/LeftPanelDashboard";
import { StyledDashboard } from "./styles";

const HomeDashboard = () => {
  useEffect(() => {
    document.title = "School";
  });
  return (
    <StyledDashboard>
      <LeftPanelDashboard />
    </StyledDashboard>
  );
};

export default HomeDashboard;
