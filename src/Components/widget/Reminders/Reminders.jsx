import React, { useState, useEffect } from "react";
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
import { db } from "../../../firebase";
import { onValue, ref } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Reminders = () => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        const userId = user.uid;
        getReminder(userId);
      }
    });

    return () => unsubscribe();
  }, []);

  const getReminder = (userId) => {
    onValue(ref(db, `reminders/${userId}`), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setReminders(Object.values(data));
      }
    });
  };

  const renderReminder = () => {
    let renderedList = [];
    for (let i = 0; i < 3; i++) {
      if (i < reminders.length) {
        renderedList.push(
          <div key={i}>
            <Reminder>
              <ReminderStatus style={{ background: "red" }} />
              <ReminderDescription>
                <ReminderTitle>{reminders[i].title}</ReminderTitle>
                <ReminderSubtitle>
                  {reminders[i].startDate} {reminders[i].endDate}{" "}
                  {reminders[i].startTime} {reminders[i].endTime}
                </ReminderSubtitle>
              </ReminderDescription>
            </Reminder>
          </div>
        );
      } else {
        renderedList.push(
          <div key={i}>
            <Reminder>
              <ReminderStatus style={{ background: "black" }} />
              <ReminderDescription>
                <ReminderTitle>title</ReminderTitle>
                <ReminderSubtitle>...</ReminderSubtitle>
              </ReminderDescription>
            </Reminder>
          </div>
        );
      }
    }
    return renderedList;
  };

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
          {renderReminder()} {/* Call the renderReminder function */}
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
