import React from "react";
import { StyledContainer, Title, Subtitle, Button } from "./styles";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";

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
          {/* Podłączyć tu link do wikipedi */}
          <Link to="">
            <Button>
              Search
              <EastIcon style={{ marginLeft: "5px" }} />
            </Button>
          </Link>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Wikipedia;
