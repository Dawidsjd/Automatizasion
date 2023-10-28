import React from 'react';
import { StyledContainer, Title, Subtitle, Button, Icon } from './styles';
import FoodIcon from '../../../assets/FoodIcon.svg';
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom'; // Dodaj import Link

const CookingAssistant = () => {
  return (
    <StyledContainer>
      <div
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
        <div style={{ marginLeft: '10px' }}>
          <Icon src={FoodIcon} alt='Food Icon' />
        </div>
      </div>
    </StyledContainer>
  );
};

export default CookingAssistant;
