import React from "react";
import {
  StyledContainer,
  Title,
  StyledLink,
  Icon,
  CheckList,
  CheckStatus,
  ListContent,
  Line,
} from "./styles";
import Notes from "../../../assets/Notes.svg";
import EastIcon from "@mui/icons-material/East";

const ToDo = () => {
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
          <Title>To-do list</Title>
          <CheckList>
            <CheckStatus />
            <ListContent>To do something 1</ListContent>
          </CheckList>
          <Line />
          <CheckList>
            <CheckStatus />
            <ListContent>To do something 2</ListContent>
          </CheckList>
          <Line />
          <CheckList>
            <CheckStatus />
            <ListContent>To do something 3</ListContent>
          </CheckList>
          <Line />
          <StyledLink to="/HomeDashboard/ToDoList">
            Check list
            <EastIcon style={{ marginLeft: "5px" }} />
          </StyledLink>
        </div>
        <Icon src={Notes} alt="Notes Icon" />
      </div>
    </StyledContainer>
  );
};

export default ToDo;
