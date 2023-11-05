import React from 'react';
import {
  StyledContainer,
  Title,
  Subtitle,
  Button,
  IconContainer,
  IconFood,
  IconFork,
  StyledDiv,
} from './styles';
import Fork from '../../../assets/Fork.svg';
import FoodIcon from '../../../assets/FoodIcon.svg';
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom';

const CookingAssistant = () => {
  return (
    <StyledContainer>
      <StyledDiv
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <Title>Cooking Assistant</Title>
          <Subtitle>Your reliable culinary guide!</Subtitle>
          <Link to='/HomeDashboard/CookingAssistant'>
            <Button>
              Let's start
              <EastIcon style={{ marginLeft: '5px' }} />
            </Button>
          </Link>
        </div>
        <IconContainer>
          <IconFood draggable='false' src={FoodIcon} alt='Food Icon' />
          <IconFork draggable='false' src={Fork} alt='Fork' />
        </IconContainer>
      </StyledDiv>
    </StyledContainer>
  );
};

export default CookingAssistant;
