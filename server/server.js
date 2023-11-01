// server.js

const express = require('express');
const setupVulcan = require('./vulcanApiExample');

const app = express();

const startServer = async () => {
  app.use(express.json());

  app.post('/api/login', async (req, res) => {
    const { indexNumber, schoolSymbol, password } = req.body;

    const client = await setupVulcan(indexNumber, schoolSymbol, password);

    // Pobierz lekcje
    const lessons = await client.getLessons('2023-10-30', '2023-10-31');
    console.log('lessons: ', lessons);

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
