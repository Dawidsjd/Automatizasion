import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal";
import moment from "moment";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {
  RemindersContainer,
  StyledButton,
  RemindersContent,
  StyledHeader,
  StyledTitle,
  StyledModalBtn,
} from "./styles";
const RemindersList = () => {
  useEffect(() => {
    document.title = "Reminders";
  });

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
      startDate: startDate,
      endDate: endDate,
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
  };

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
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel={
            isEditing ? "Edit Reminder Modal" : "Add Reminder Modal"
          }
        >
          <h2>{isEditing ? "Edit" : "Add"}</h2>
          <form onSubmit={isEditing ? handleEditSubmit : handleSubmit}>
            <label>
              Title:
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <div>
              Start Date:
              <DatePicker
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
            </div>
            <div>
              End Date:
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="dd-MM-yyyy"
                minDate={startDate}
              />
            </div>
            <div>
              Start Time:
              <DatePicker
                selected={startTime}
                onChange={(time) => {
                  const now = new Date();
                  now.setSeconds(0, 0);
                  if (moment(startDate).isSame(now, "date") && time < now) {
                    return;
                  }
                  setStartTime(time);
                }}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="HH:mm"
                minTime={
                  moment(startDate).isSame(new Date(), "date")
                    ? moment().add(15, "minutes").format("HH:mm")
                    : "00:00"
                }
                maxTime={
                  moment(startDate).isSame(new Date(), "date")
                    ? "23:59"
                    : "23:59"
                }
              />
            </div>
            <div>
              End Time:
              <DatePicker
                selected={endTime}
                onChange={(time) => {
                  if (
                    moment(startDate).isSame(endDate, "day") &&
                    moment(time).isBefore(startTime)
                  ) {
                    setEndTime(startTime);
                  } else {
                    setEndTime(time);
                  }
                }}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="HH:mm"
                minTime={
                  moment(startDate).isSame(endDate, "day")
                    ? moment(startTime).format("HH:mm")
                    : "00:00"
                }
                maxTime={
                  moment(startDate).isSame(endDate, "day") ? "23:59" : "23:59"
                }
              />
            </div>
            <label>
              Description:
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <label>
              Category:
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">Select category</option>
                <option value="homework">Zadanie domowe</option>
                <option value="exam">Sprawdzian</option>
                <option value="project">Projekt</option>
                <option value="other">Inne</option>
              </select>
            </label>
            <button type="button" onClick={closeModal}>
              Close
            </button>
            <button type="submit">{isEditing ? "Save" : "Add Reminder"}</button>
          </form>
        </Modal>
        <div>
          <h3>Reminders:</h3>
          {[...remindersMap].map(([date, reminders], index) => (
            <div key={index}>
              <h3>{date}</h3>
              {reminders.map((reminder, idx) => (
                <div key={idx}>
                  <h4>{reminder.title}</h4>
                  <p>
                    {moment(reminder.startTime).format("HH:mm")}-
                    {moment(reminder.endTime).format("HH:mm")}
                  </p>
                  <p>Description: {reminder.description}</p>
                  <p>Category: {reminder.category}</p>
                  <button onClick={() => handleEdit(date, idx)}>Edit</button>
                  <button onClick={() => handleDelete(date, idx)}>
                    Delete
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </RemindersContent>
    </RemindersContainer>
  );
};

export default RemindersList;
