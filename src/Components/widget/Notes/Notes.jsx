import React from "react";
import {
  StyledContainer,
  Title,
  NotesContent,
  NotesText,
  Button,
} from "./styles";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";

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
        <div style={{ width: "100%" }}>
          <Title>Notes</Title>
          {/* tu żeby wczytywało jakiś tekst z notesu */}
          <NotesContent>
            <NotesText>user first note</NotesText>
          </NotesContent>
          <Link to="/SchoolDashboard/Notes">
            <Button>
              Edit
              <AiFillEdit style={{ marginLeft: "5px" }} />
            </Button>
          </Link>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Notes;
