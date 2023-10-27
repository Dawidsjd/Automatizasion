const express = require('express');
const app = express();
const { Keystore, AccountTools, VulcanHebe, registerAccount } = require('vulcan-api-js');
const fs = require('fs');

// Dodaj endpoint, który zwraca dane studentów
app.get('/api/students', (req, res) => {
  // Tutaj umieść kod do pobierania danych studentów
  // Na przykład, możesz wczytać dane z pliku dane_studentow.json

  const studentsData = require('./dane_studentow.json');
  res.json(studentsData);
});


// Nasłuchiwanie na porcie 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
