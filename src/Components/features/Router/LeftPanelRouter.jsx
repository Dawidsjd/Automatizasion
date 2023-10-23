import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeftPanelDashboard from "../LeftPanelDashboard/LeftPanelDashboard";
import HomeDashboard from "./../../../pages/HomeDashboard";
import SchoolDashboard from "./../../../pages/SchoolDashboard";

const LeftPanelRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <LeftPanelDashboard />
        <Routes>
          <Route exact path="/HomeDashboard" element={<HomeDashboard />} />
          <Route exact path="/SchoolDashboard" element={<SchoolDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default LeftPanelRouter;
