import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal";
import moment from "moment";

const RemindersList = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [reminders, setReminders] = useState([]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const afterOpenModal = () => {};

  const closeModal = () => {
    setModalIsOpen(false);
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
    setReminders([...reminders, newReminder]);
    closeModal();
    setTitle("");
    setStartDate(new Date());
    setEndDate(new Date());
    setStartTime(new Date());
    setEndTime(new Date());
    setDescription("");
    setCategory("");
  };

  return (
    <div>
      <h2>Reminders List</h2>
      <button onClick={openModal}>Add Reminder</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Add Reminder Modal"
      >
        <h2>Add Reminder</h2>
        <form onSubmit={handleSubmit}>
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
              onChange={(date) => setStartDate(date)}
              dateFormat="dd-MM-yyyy"
            />
          </div>
          <div>
            End Date:
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="dd-MM-yyyy"
            />
          </div>
          <div>
            Start Time:
            <DatePicker
              selected={startTime}
              onChange={(time) => setStartTime(time)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="HH:mm"
            />
          </div>
          <div>
            End Time:
            <DatePicker
              selected={endTime}
              onChange={(time) => setEndTime(time)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="HH:mm"
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
            >
              <option value="homework">Zadanie domowe</option>
              <option value="exam">Sprawdzian</option>
              <option value="project">Projekt</option>
              <option value="other">Inne</option>
            </select>
          </label>
          <button type="submit">Add Reminder</button>
        </form>
      </Modal>{" "}
      <div>
        <h3>Reminders:</h3>
        {reminders.map((reminder, index) => (
          <div key={index}>
            <h4>{reminder.title}</h4>
            <p>
              Od: {moment(reminder.startTime).format("DD MMM YYYY HH:mm")} do{" "}
              {moment(reminder.endTime).format("DD MMM YYYY HH:mm")}
            </p>
            <p>Description: {reminder.description}</p>
            <p>Category: {reminder.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RemindersList;
