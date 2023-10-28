import React, { useEffect } from "react";
import LeftPanelDashboard from "../Components/features/LeftPanelDashboard/LeftPanelDashboard";

const Settings = () => {
  useEffect(() => {
    document.title = "Settings";
  });
  return (
    <>
      <LeftPanelDashboard />
      <p>Settings</p>
    </>
  );
};

export default Settings;
