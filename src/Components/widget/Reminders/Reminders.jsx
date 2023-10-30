import React from "react";
import { StyledContainer, Title } from "./styles";
const Reminders = () => {
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
          <Title>Reminders</Title>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Reminders;
