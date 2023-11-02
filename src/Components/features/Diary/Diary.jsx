import React, { useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Container,
  FormContainer,
  SubmitButton,
  SliderContainer,
} from './styles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Diary = () => {
  const [indexNumber, setIndexNumber] = useState('');
  const [schoolSymbol, setSchoolSymbol] = useState('');
  const [password, setPassword] = useState('');
  const [lessons, setLessons] = useState([]);
  const [formVisible, setFormVisible] = useState(true);

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

      setLessons(response.data);
      setFormVisible(false);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

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

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={Container}>
      {formVisible && (
        <div style={FormContainer}>
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
            <button type="submit" style={SubmitButton}>Submit</button>
          </form>
        </div>
      )}

      <div style={SliderContainer}>
        <Slider {...sliderSettings}>
          {Object.keys(groupedLessons).map((date, index) => (
            <div key={index} style={{ minWidth: '300px', margin: '10px' }}>
              <h2>{date}</h2>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Subject</TableCell>
                      <TableCell align="right">Room</TableCell>
                      <TableCell align="right">Teacher</TableCell>
                      <TableCell align="right">Time</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {groupedLessons[date].map((lesson, index) => (
                      <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell>{lesson.subject.name}</TableCell>
                        <TableCell align="right">{lesson.room.code}</TableCell>
                        <TableCell align="right">{lesson.teacherPrimary.displayName}</TableCell>
                        <TableCell align="right">{lesson.timeSlot.display}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Diary;
