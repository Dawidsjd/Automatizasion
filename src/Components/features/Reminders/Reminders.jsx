import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal";
import moment from "moment";
import { Link } from "react-router-dom";
import {
  AiFillCloseCircle,
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiFillEdit,
  AiFillDelete,
} from "react-icons/ai";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {
  RemindersContainer,
  StyledButton,
  RemindersContent,
  StyledHeader,
  StyledTitle,
  StyledModalBtn,
  StyledModal,
  StyledModalContent,
  CloseButton,
  Form,
  FormGroup,
  FormTitle,
  StyledInputTitle,
  StyledSelect,
  StyledDate,
  StyledTime,
  StyledDatePicker,
  StyledInputDesc,
  SubmitBtn,
  ReminerdsList,
  TodayReminders,
  UpcomingReminders,
  UpcomingList,
  ReminderSectionName,
  Reminder,
  EditBtn,
  DeleteBtn,
  ReminderTitle,
  ReminderDate,
  ReminderTime,
  ReminderDescription,
  ReminderCategory,
  CategoryName,
  CategoryStatus,
} from "./styles";
import { db } from "../../../firebase";
import { onValue, ref, set } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const RemindersList = () => {
  useEffect(() => {
    document.title = "Reminders";
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editReminder, setEditReminder] = useState(null);
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [remindersMap, setRemindersMap] = useState(new Map());
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setUser(user);
        getRemindersFromFirebase(user.uid); // Pobierz przypomnienia dla obecnie zalogowanego użytkownika
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const saveRemindersToFirebase = (userId, reminders) => {
    set(ref(db, `reminders/${userId}`), reminders);
  };

  const saveEditedRemindersToFirebase = (userId, reminders) => {
    set(ref(db, `reminders/${userId}`), reminders);
  };

  const getRemindersFromFirebase = (userId) => {
    onValue(ref(db, `reminders/${userId}`), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setRemindersMap(new Map(data));
      }
    });
  };

  const deleteReminderFromFirebase = (userId, reminders) => {
    set(ref(db, `reminders/${userId}`), reminders);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const afterOpenModal = () => {};

  const openEditModal = (reminder) => {
    setModalIsOpen(true);
    setIsEditing(true);
    setEditReminder(reminder);
    setTitle(reminder.title);
    setStartDate(reminder.startDate);
    setEndDate(reminder.endDate);
    setStartTime(reminder.startTime);
    setEndTime(reminder.endTime);
    setDescription(reminder.description);
    setCategory(reminder.category);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setIsEditing(false);
    setEditReminder(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReminder = {
      title: title,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      startTime: startTime,
      endTime: endTime,
      description: description,
      category: category,
    };

    const date = moment(startDate).format("Do MMMM");

    const reminders = remindersMap.get(date) || [];
    reminders.push(newReminder);
    remindersMap.set(date, reminders);
    setRemindersMap(new Map(remindersMap));

    closeModal();
    setTitle("");
    setStartDate(new Date());
    setEndDate(new Date());
    setStartTime(new Date());
    setEndTime(new Date());
    setDescription("");
    setCategory("");

    if (user) {
      const userId = user.uid;
      saveRemindersToFirebase(userId, Array.from(remindersMap.entries()));
    }
  };

  const handleEdit = (date, index) => {
    const reminders = remindersMap.get(date);
    const reminderToEdit = reminders[index];
    openEditModal(reminderToEdit);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    const editedReminder = {
      title: title,
      startDate: startDate,
      endDate: endDate,
      startTime: startTime,
      endTime: endTime,
      description: description,
      category: category,
    };

    const reminders = remindersMap.get(
      moment(editReminder.startDate).format("Do MMMM")
    );

    const index = reminders.findIndex(
      (reminder) => reminder.title === editReminder.title
    );
    reminders[index] = editedReminder;
    setRemindersMap(new Map(remindersMap));

    closeModal();
    setTitle("");
    setStartDate(new Date());
    setEndDate(new Date());
    setStartTime(new Date());
    setEndTime(new Date());
    setDescription("");
    setCategory("");

    if (user) {
      const userId = user.uid;
      saveEditedRemindersToFirebase(userId, Array.from(remindersMap.entries()));
    }
  };

  const handleDelete = (date, index) => {
    const updatedReminders = remindersMap
      .get(date)
      .filter((_, idx) => idx !== index);
    if (updatedReminders.length === 0) {
      remindersMap.delete(date);
    } else {
      remindersMap.set(date, updatedReminders);
    }
    setRemindersMap(new Map(remindersMap));

    if (user) {
      const userId = user.uid;
      deleteReminderFromFirebase(userId, Array.from(remindersMap.entries()));
    }
  };

  const todayDate = moment(new Date()).format("Do MMMM");
  const todayReminders = remindersMap.get(todayDate) || [];
  const upcomingReminders = [...remindersMap].filter(([date, _]) =>
    moment(date, "Do MMMM").isAfter(moment(), "day")
  );

  return (
    <RemindersContainer>
      <Link to="/SchoolDashboard">
        <StyledButton>
          <KeyboardBackspaceIcon />
        </StyledButton>
      </Link>
      <RemindersContent>
        <StyledHeader>
          <StyledTitle>Reminders</StyledTitle>
          <StyledModalBtn onClick={openModal}>Add</StyledModalBtn>
        </StyledHeader>
        <StyledModal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel={
            isEditing ? "Edit Reminder Modal" : "Add Reminder Modal"
          }
        >
          <StyledModalContent>
            <CloseButton type="button" onClick={closeModal}>
              <AiFillCloseCircle />
            </CloseButton>
            <Form onSubmit={isEditing ? handleEditSubmit : handleSubmit}>
              <FormGroup>
                <FormTitle>Title</FormTitle>
                <StyledInputTitle
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Reminder title"
                />
              </FormGroup>
              <FormGroup>
                <FormTitle>Category</FormTitle>
                <StyledSelect
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Select category</option>
                  <option value="homework" style={{ color: "blue" }}>
                    Homework
                  </option>
                  <option value="test" style={{ color: "red" }}>
                    Test
                  </option>
                  <option value="project" style={{ color: "orange" }}>
                    Project
                  </option>
                  <option value="other" style={{ color: "green" }}>
                    Other
                  </option>
                </StyledSelect>
              </FormGroup>
              <FormGroup>
                <FormTitle>
                  Set Date <AiOutlineCalendar />
                </FormTitle>
                <StyledDate>
                  <StyledDatePicker
                    selected={startDate}
                    onChange={(date) => {
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      if (date < today) {
                        return;
                      }
                      setStartDate(date);
                    }}
                    dateFormat="dd-MM-yyyy"
                    minDate={new Date()}
                  />
                  <StyledDatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="dd-MM-yyyy"
                    minDate={startDate}
                  />
                </StyledDate>
              </FormGroup>
              <FormGroup>
                <FormTitle>
                  Set Time <AiOutlineClockCircle />
                </FormTitle>
                <StyledTime>
                  <StyledDatePicker
                    selected={startTime}
                    onChange={(time) => setStartTime(time)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={10}
                    timeCaption="Time"
                    dateFormat="HH:mm"
                  />
                  <StyledDatePicker
                    selected={endTime}
                    onChange={(time) => setEndTime(time)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={10}
                    timeCaption="Time"
                    dateFormat="HH:mm"
                  />
                </StyledTime>
              </FormGroup>
              <FormGroup>
                <FormTitle>Description</FormTitle>
                <StyledInputDesc
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="(e.g. Test from unit 6) "
                />
              </FormGroup>
              <SubmitBtn type="submit">{isEditing ? "Save" : "Add"}</SubmitBtn>
            </Form>
          </StyledModalContent>
        </StyledModal>
        <ReminerdsList>
          <TodayReminders>
            <ReminderSectionName>Today</ReminderSectionName>
            {[...remindersMap].map(([date, reminders], index) => {
              if (moment(date, "Do MMMM").isSame(new Date(), "day")) {
                return (
                  <Reminder key={index}>
                    {moment(date, "Do MMMM").isSame(
                      new Date(),
                      "day"
                    ) ? null : (
                      <h3>{date}</h3>
                    )}
                    {reminders.map((reminder, idx) => {
                      if (
                        moment(reminder.startDate).isSame(new Date(), "day")
                      ) {
                        let categoryStatusColor;
                        switch (reminder.category) {
                          case "homework":
                            categoryStatusColor = "blue";
                            break;
                          case "test":
                            categoryStatusColor = "red";
                            break;
                          case "project":
                            categoryStatusColor = "orange";
                            break;
                          case "other":
                            categoryStatusColor = "green";
                            break;
                          default:
                            categoryStatusColor = "black";
                        }

                        return (
                          <div key={idx} style={{ position: "relative" }}>
                            <DeleteBtn onClick={() => handleDelete(date, idx)}>
                              <AiFillDelete />
                            </DeleteBtn>
                            <ReminderTitle>{reminder.title}</ReminderTitle>
                            <ReminderTime>
                              {moment(reminder.startTime).format("HH:mm")}-
                              {moment(reminder.endTime).format("HH:mm")}
                            </ReminderTime>
                            <ReminderDescription>
                              {reminder.description}
                            </ReminderDescription>
                            <ReminderCategory>
                              <CategoryStatus
                                style={{ backgroundColor: categoryStatusColor }}
                              />
                              <CategoryName>{reminder.category}</CategoryName>
                            </ReminderCategory>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </Reminder>
                );
              }
              return null;
            })}
          </TodayReminders>
          <UpcomingReminders>
            <ReminderSectionName>Upcoming</ReminderSectionName>
            <UpcomingList>
              {[...remindersMap].map(([date, reminders], index) => {
                if (!moment(date, "Do MMMM").isSame(new Date(), "day")) {
                  return (
                    <Reminder key={index}>
                      <ReminderDate>{date}</ReminderDate>
                      {reminders.map((reminder, idx) => {
                        let categoryStatusColor;
                        switch (reminder.category) {
                          case "homework":
                            categoryStatusColor = "blue";
                            break;
                          case "test":
                            categoryStatusColor = "red";
                            break;
                          case "project":
                            categoryStatusColor = "orange";
                            break;
                          case "other":
                            categoryStatusColor = "green";
                            break;
                          default:
                            categoryStatusColor = "black";
                        }
                        return (
                          <div key={idx} style={{ position: "relative" }}>
                            <DeleteBtn onClick={() => handleDelete(date, idx)}>
                              <AiFillDelete />
                            </DeleteBtn>
                            <ReminderTitle>{reminder.title}</ReminderTitle>
                            <ReminderTime>
                              {moment(reminder.startTime).format("HH:mm")}-
                              {moment(reminder.endTime).format("HH:mm")}
                            </ReminderTime>
                            <ReminderDescription>
                              {reminder.description}
                            </ReminderDescription>
                            <ReminderCategory>
                              <CategoryStatus
                                style={{ backgroundColor: categoryStatusColor }}
                              />
                              <CategoryName>{reminder.category}</CategoryName>
                            </ReminderCategory>
                          </div>
                        );
                      })}
                    </Reminder>
                  );
                }
                return null;
              })}
            </UpcomingList>
          </UpcomingReminders>
        </ReminerdsList>
      </RemindersContent>
    </RemindersContainer>
  );
};

export default RemindersList;
