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
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setUser(user);
        getRemindersFromFirebase(user.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  const getRemindersFromFirebase = (userId) => {
    onValue(ref(db, `reminders/${userId}`), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        const remindersMap = new Map(data);
        const allReminders = [];
        for (let [_, reminders] of remindersMap) {
          allReminders.push(...reminders);
        }
        const sortedReminders = allReminders.sort(
          (a, b) => new Date(a.startDate) - new Date(b.startDate)
        );
        setReminders(sortedReminders.slice(0, 3));
      }
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${date
      .toDateString()
      .slice(0, 16)} ${date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
    return formattedDate;
  };

  const renderReminder = () => {
    let renderedList = [];
    for (let i = 0; i < 3; i++) {
      if (i < reminders.length) {
        let reminderStatusColor;
        if (reminders[i].category === "test") {
          reminderStatusColor = "red";
        } else if (reminders[i].category === "other") {
          reminderStatusColor = "green";
        } else if (reminders[i].category === "project") {
          reminderStatusColor = "orange";
        } else if (reminders[i].category === "homework") {
          reminderStatusColor = "blue";
        } else {
          reminderStatusColor = "black";
        }
        const startDate = formatDate(reminders[i].startDate);
        const endDate = formatDate(reminders[i].endDate);

        renderedList.push(
          <div key={i}>
            <Reminder>
              <ReminderStatus style={{ background: reminderStatusColor }} />
              <ReminderDescription>
                <ReminderTitle>{reminders[i].title}</ReminderTitle>
                <ReminderSubtitle>
                  {startDate} - {endDate}
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
          {renderReminder()}
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
