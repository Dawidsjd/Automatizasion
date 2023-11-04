import React from "react";
import {
  StyledContainer,
  Title,
  Button,
  Icon,
  Reminder,
  ReminderStatus,
  ReminderDescription,
  ReminderTitle,
  ReminderSubtitle,
} from "./styles";
import { Link } from "react-router-dom";
import ReminderIcon from "../../../assets/ReminderIcon.svg";
import { BiShow } from "react-icons/bi";
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
        <div style={{ width: "60%" }}>
          <Title>Reminders</Title>
          {/* tu trzeba będzie zrobić tak żeby pobierało z bazy tytuł i opis i w zależności jaka kategoria przypomnienia to reminderstatus inny kolor */}
          <Reminder>
            <ReminderStatus style={{ background: "red" }} />
            <ReminderDescription>
              <ReminderTitle>History Test</ReminderTitle>
              <ReminderSubtitle>Today, 11:40</ReminderSubtitle>
            </ReminderDescription>
          </Reminder>
          <Reminder>
            <ReminderStatus style={{ background: "blue" }} />
            <ReminderDescription>
              <ReminderTitle>Homework from chemistry</ReminderTitle>
              <ReminderSubtitle>Tommorow, 14:00 </ReminderSubtitle>
            </ReminderDescription>
          </Reminder>
          <Reminder>
            <ReminderStatus style={{ background: "orange" }} />
            <ReminderDescription>
              <ReminderTitle>Computer science project</ReminderTitle>
              <ReminderSubtitle>26th November</ReminderSubtitle>
            </ReminderDescription>
          </Reminder>
          <Link to="/SchoolDashboard/Reminder">
            <Button>
              Show more
              <BiShow style={{ marginLeft: "5px" }} />
            </Button>
          </Link>
        </div>
        <Icon draggable="false" src={ReminderIcon} alt="reminder icon" />
      </div>
    </StyledContainer>
  );
};

export default Reminders;
