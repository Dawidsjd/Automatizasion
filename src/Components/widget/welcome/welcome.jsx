import React from "react";
import {
  StyledContainer,
  StyledCalendar,
  StyledOverlap,
  StyledDate,
  StyledIcon,
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
      <div className="welcome">
        <div className="good-day-username">Good Day, &lt;username&gt;!</div>
        <div className="div">Have a nice day!</div>
      </div>
      <img
        className="undraw-fall-thyk"
        alt="Undraw fall thyk"
        src="undraw-fall-thyk-1.svg"
      />
    </StyledContainer>
  );
};

export default Welcome;
