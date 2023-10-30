import React from "react";
import { StyledContainer, Title } from "./styles";

const Notes = () => {
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
          <Title>Notes</Title>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Notes;
