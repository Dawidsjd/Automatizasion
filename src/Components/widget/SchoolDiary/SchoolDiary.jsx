import React from "react";
import { StyledContainer, Title, Subtitle, Button, Icon } from "./styles";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import SchoolImage from "../../../assets/SchoolImage.svg";

const SchoolDiary = () => {
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
          <Title>School Diary</Title>
          <Subtitle>Stay Organized: Your Essential School Companion</Subtitle>
          {/* Podłączyć tu link do dziennika */}
          <Link to="">
            <Button>
              Come in
              <EastIcon style={{ marginLeft: "5px" }} />
            </Button>
          </Link>
        </div>
        <Icon src={SchoolImage} alt="School Image" />
      </div>
    </StyledContainer>
  );
};

export default SchoolDiary;
