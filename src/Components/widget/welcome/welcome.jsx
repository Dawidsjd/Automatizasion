import React, { useState, useEffect } from 'react';
import {
  StyledContainer,
  StyledCalendar,
  StyledDate,
  StyledIcon,
  StyledWelcome,
  StyledMessage,
  StyledDescription,
  StyledImage,
  StyledContent,
} from './styles';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import HelloImg from './../../../assets/HelloImg.svg';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebase';

const getCurrentDate = () => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  return `${month}. ${day}, ${year}`;
};

const Welcome = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsername(user.displayName || user.reloadUserInfo.screenName);
      } else {
        setUsername(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <StyledContainer>
      <StyledCalendar>
        <StyledIcon>
          <BsFillCalendarEventFill />
        </StyledIcon>
        <StyledDate>{getCurrentDate()}</StyledDate>
      </StyledCalendar>
      <StyledContent>
        <StyledWelcome>
          <StyledMessage>
            {username ? `Good Day, ${username}!` : 'Good Day!'}
          </StyledMessage>
          <StyledDescription>Have a nice day!</StyledDescription>
        </StyledWelcome>
        <StyledImage src={HelloImg} />
      </StyledContent>
    </StyledContainer>
  );
};

export default Welcome;
