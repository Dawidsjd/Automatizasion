import React from "react";
import Navbar from "./../Components/HomeAssets/Navbar/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <ul>
          <li>
            <Link to="/HomeDashboard">Przejdź do aplikacji</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
