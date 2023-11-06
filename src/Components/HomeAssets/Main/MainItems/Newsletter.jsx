import React, { useState } from 'react';
import {
  StyledNewsLetterWrapper,
  StyledNewsletterContent,
  ContentBox,
  StyledErrorSpan,
  StyledCorrectSpan,
} from '../styles';

const Newsletter = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubscribe = () => {
    if (email === '' || !email.includes('@')) {
      setError('Invalid email address');
      return;
    }

    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  return (
    <StyledNewsLetterWrapper>
      <StyledNewsletterContent>
        <ContentBox>
          <h2>Subscribe to Newsletter</h2>
          <p>to stay informed about new features and additions</p>
          <input
            type='text'
            placeholder='Your email'
            value={email}
            onChange={handleEmailChange}
          />
          <button onClick={handleSubscribe}>subscribe</button>
          {error && <StyledErrorSpan>{error}</StyledErrorSpan>}
          {isSubscribed && (
            <StyledCorrectSpan>Subscribed to newsletter</StyledCorrectSpan>
          )}
        </ContentBox>
      </StyledNewsletterContent>
    </StyledNewsLetterWrapper>
  );
};

export default Newsletter;
