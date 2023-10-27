const express = require('express');
const setupVulcan = require('./vulcanApiExample');

const app = express();

const startServer = async () => {
  const client = await setupVulcan();

  app.get('/api/students', async (req, res) => {
    // Access client here
    // const students = await client.getStudents();
    // console.log('students: ', students);

    const lessons = await client.getLessons();
    console.log('lessons: ', lessons);

    // const studentsData = require('./dane_studentow.json');
    res.json(lessons);
  });

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer().catch((error) => {
  console.error('Error starting the server:', error);
});
