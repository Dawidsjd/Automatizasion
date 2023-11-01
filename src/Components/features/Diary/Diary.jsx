// LoginForm.jsx

import React, { useState } from 'react';
import axios from 'axios';

const Diary = () => {
  const [indexNumber, setIndexNumber] = useState('');
  const [schoolSymbol, setSchoolSymbol] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', {
        indexNumber,
        schoolSymbol,
        password,
      });

      console.log(response);
      
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
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
  );
};

export default Diary;
