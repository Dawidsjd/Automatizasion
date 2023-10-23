import React from "react";
import { Link } from "react-router-dom";

const LeftPanelDashboard = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/HomeDashboard">Home</Link>
        </li>
        <li>
          <Link to="/SchoolDashboard">School</Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftPanelDashboard;
