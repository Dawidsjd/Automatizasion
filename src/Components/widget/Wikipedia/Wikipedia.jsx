import React from "react";
import { StyledContainer, Title, Subtitle, Button, Icon } from "./styles";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import Knowledge from "../../../assets/Knowledge.svg";

const Wikipedia = () => {
  return (
    <StyledContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Title>Wikipedia</Title>
          <Subtitle>
            Explore the World of Knowledge: Instant Access to Wikipedia's Vast
            Encyclopedia
          </Subtitle>
          <Link to="/SchoolDashboard/Wikipedia">
            <Button>
              Search
              <EastIcon style={{ marginLeft: "5px" }} />
            </Button>
          </Link>
        </div>
        <Icon draggable="false" src={Knowledge} alt="Knowledge Image" />
      </div>
    </StyledContainer>
  );
};

export default Wikipedia;
