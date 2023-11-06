import React, { useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Container,
  StyledButton,
  FormContainer,
  StyledForm,
  Info,
  FormTitle,
  StyledInput,
  SubmitButton,
  StyledModal,
  CloseButton,
  ContainerSlider,
  StyledSlider,
  StyledDate,
  Table,
  TableHeader,
  TableRow,
  TableBody,
  TableData,
  LessonPlan,
} from "./styles";
import Modal from "@mui/material/Modal";
import { AiFillQuestionCircle, AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Diary = () => {
  const [indexNumber, setIndexNumber] = useState("");
  const [schoolSymbol, setSchoolSymbol] = useState("");
  const [password, setPassword] = useState("");
  const [lessons, setLessons] = useState([]);
  const [formVisible, setFormVisible] = useState(true);
  const [infoModalOpen, setInfoModalOpen] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        indexNumber,
        schoolSymbol,
        password,
      });

      console.log("lekcja: ", response.data[0].subject.code);
      console.log("sala: ", response.data[0].room.code);
      console.log("nauczyciel: ", response.data[0].teacherPrimary.displayName);
      console.log("czas: ", response.data[0].timeSlot.display);

      setLessons(response.data);
      setFormVisible(false);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const groupLessonsByDate = (lessons) => {
    const groupedLessons = {};
    lessons.forEach((lesson) => {
      const date = lesson.date.date;
      if (!groupedLessons[date]) {
        groupedLessons[date] = [];
      }
      groupedLessons[date].push(lesson);
    });
    return groupedLessons;
  };

  const groupedLessons = groupLessonsByDate(lessons);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const openInfoModal = () => {
    setInfoModalOpen(true);
  };

  const closeInfoModal = () => {
    setInfoModalOpen(false);
  };

  return (
    <Container>
      <Link to="/SchoolDashboard">
        <StyledButton>
          <KeyboardBackspaceIcon />
        </StyledButton>
      </Link>
      {formVisible && (
        <FormContainer>
          <StyledForm>
            <form onSubmit={handleFormSubmit}>
              <Info>
                <AiFillQuestionCircle onClick={openInfoModal} />
              </Info>
              <div>
                <FormTitle>Token</FormTitle>
                <StyledInput
                  type="text"
                  value={indexNumber}
                  onChange={(e) => setIndexNumber(e.target.value)}
                />
              </div>
              <div>
                <FormTitle>School Symbol</FormTitle>
                <StyledInput
                  type="text"
                  value={schoolSymbol}
                  onChange={(e) => setSchoolSymbol(e.target.value)}
                />
              </div>
              <div>
                <FormTitle>PIN</FormTitle>
                <StyledInput
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <SubmitButton type="submit">Submit</SubmitButton>
            </form>
          </StyledForm>
          <Modal open={infoModalOpen} onClose={closeInfoModal}>
            <StyledModal>
              <CloseButton type="button" onClick={closeInfoModal}>
                <AiFillCloseCircle />
              </CloseButton>
              <h2>Instructions</h2>
              <p>Here are the instructions for using this diary:</p>
              <p>
                1. Log in to the Vulcan school diary at{" "}
                <a
                  href="https://uonetplus.vulcan.net.pl/minrol"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://uonetplus.vulcan.net.pl/minrol
                </a>{" "}
                or in the "Dzienniczek Vulcan" application.
              </p>
              <p>2. Go to the Mobile access tab and generate an access code.</p>
              <p>
                3. Enter your token, school symbol, and pin in the form above.
              </p>
              <p>
                4. Click the "Submit" button to log in and retrieve your
                lessons.
              </p>
              <p>
                5. Your lessons will be displayed in the slider grouped by date.
              </p>
            </StyledModal>
          </Modal>
        </FormContainer>
      )}

{lessons.length > 0 && (
        <ContainerSlider>
        <StyledSlider {...sliderSettings}>
          {Object.keys(groupedLessons).map((date, index) => (
            <div key={index}>
              <StyledDate>{date}</StyledDate>
              <LessonPlan>
                <Table>
                  <TableRow>
                    <TableHeader>Subject</TableHeader>
                    <TableHeader>Room</TableHeader>
                    <TableHeader>Teacher</TableHeader>
                    <TableHeader>Time</TableHeader>
                  </TableRow>
                  <TableBody>
                    {groupedLessons[date].map((lesson, index) => (
                      <TableRow key={index}>
                        <TableData>{lesson.subject.name}</TableData>
                        <TableData>{lesson.room.code}</TableData>
                        <TableData>
                          {lesson.teacherPrimary.displayName}
                        </TableData>
                        <TableData>{lesson.timeSlot.display}</TableData>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </LessonPlan>
            </div>
          ))}
        </StyledSlider>
      </ContainerSlider>
      )}
    </Container>
  );
};

export default Diary;
