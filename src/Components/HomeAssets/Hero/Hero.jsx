import React from 'react';
import {
  StyledHeroWrapper,
  StyledButtons,
  StyledHeroContent,
  StyledLink,
  StyledButton,
  StyledHeroBox,
  StyledImages,
  StyledImageWave,
} from './styles';
import nerd from '../../../assets/nerd.svg';
import travels from '../../../assets/travelers.svg';
import wave from '../../../assets/wave.svg';

const Hero = () => {
  return (
    <StyledHeroWrapper>
      <StyledHeroBox>
        <StyledImages>
          <img src={nerd} alt='Nerd' />
          <img src={travels} alt='Travelers' />
        </StyledImages>

        <StyledHeroContent>
          <h1>Imagine a place...</h1>
          <h3>
            ...Where Technology Meets Community. Create, Learn and Community
            Automate Home and School! Together, we inspire innovation and
            develop skills to create a smart, automated environment around us.
          </h3>
          <StyledButtons>
            <StyledLink to='/HomeDashboard'>Aplication</StyledLink>
            <StyledButton>Learn more</StyledButton>
          </StyledButtons>
        </StyledHeroContent>

        <StyledImageWave>
          <img src={wave} />
        </StyledImageWave>
      </StyledHeroBox>
    </StyledHeroWrapper>
  );
};

export default Hero;
