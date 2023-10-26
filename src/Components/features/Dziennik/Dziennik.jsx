import React, { useState, useEffect } from 'react';

const Dziennik = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('/api/students') // Endpoint na serwerze zwracający dane studentów
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Błąd:', error));
  }, []);

  

  return (
    <div>
      <h1>Lista Studentów</h1>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <div>
              <strong>Imię:</strong> {student.pupil.firstName}
            </div>
            <div>
              <strong>Nazwisko:</strong> {student.pupil.surname}
            </div>
            <div>
              <strong>Szkoła:</strong> {student.school.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dziennik;
