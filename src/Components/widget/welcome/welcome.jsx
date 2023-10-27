import React from "react";
import {
  StyledContainer,
  StyledCalendar,
  StyledOverlap,
  StyledDate,
  StyledIcon,
  StyledWelcome,
  StyledMessage,
  StyledDescription,
  StyledImage,
} from "./styles";
import { BsFillCalendarEventFill } from "react-icons/bs";

const getCurrentDate = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  return `${month}. ${day}, ${year}`;
};
const Welcome = () => {
  return (
    <StyledContainer>
      <StyledCalendar>
        <StyledOverlap>
          <StyledDate>{getCurrentDate()}</StyledDate>
          <StyledIcon>
            <BsFillCalendarEventFill />
          </StyledIcon>
        </StyledOverlap>
      </StyledCalendar>
      <StyledWelcome>
        <StyledMessage>Good Day, &lt;username&gt;!</StyledMessage>
        <StyledDescription>Have a nice day!</StyledDescription>
      </StyledWelcome>
      <StyledImage />
    </StyledContainer>
  );
};

export default Welcome;
