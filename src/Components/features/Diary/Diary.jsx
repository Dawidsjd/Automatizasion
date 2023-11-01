import React, { useState } from 'react';
import axios from 'axios';

const Diary = () => {
  const [indexNumber, setIndexNumber] = useState('');
  const [schoolSymbol, setSchoolSymbol] = useState('');
  const [password, setPassword] = useState('');
  const [lessons, setLessons] = useState([]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', {
        indexNumber,
        schoolSymbol,
        password,
      });

      console.log("lekcja: ", response.data[0].subject.code)
      console.log("sala: ", response.data[0].room.code)
      console.log("nauczyciel: ", response.data[0].teacherPrimary.displayName)
      console.log("czas: ", response.data[0].timeSlot.display)

      setLessons(response.data); // Zapisz lekcje w stanie komponentu
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  // Funkcja do grupowania lekcji według daty
  const groupLessonsByDate = (lessons) => {
    const groupedLessons = {};
    lessons.forEach(lesson => {
      const date = lesson.date.date;
      if (!groupedLessons[date]) {
        groupedLessons[date] = [];
      }
      groupedLessons[date].push(lesson);
    });
    return groupedLessons;
  }

  const groupedLessons = groupLessonsByDate(lessons);

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
      <div>
        <label>
          Index Number:
          <input
            type="text"
            value={indexNumber}
            onChange={(e) => setIndexNumber(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          School Symbol:
          <input
            type="text"
            value={schoolSymbol}
            onChange={(e) => setSchoolSymbol(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>

      <div>
        {Object.keys(groupedLessons).map((date, index) => (
          <div key={index}>
            <h2>{date}</h2>
            <table>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Room</th>
                  <th>Teacher</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {groupedLessons[date].map((lesson, index) => (
                  <tr key={index}>
                    <td>{lesson.subject.name}</td>
                    <td>{lesson.room.code}</td>
                    <td>{lesson.teacherPrimary.displayName}</td>
                    <td>{lesson.timeSlot.display}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diary;
