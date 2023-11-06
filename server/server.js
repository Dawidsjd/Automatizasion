// server.js

const express = require('express');
const cors = require('cors');
const setupVulcan = require('./vulcanApiExample');

const app = express();

app.use(cors({
  origin: "https://flowvue.vercel.app",
}));

const startServer = async () => {
  app.use(express.json());

  app.post('/api/login', async (req, res) => {
    const { indexNumber, schoolSymbol, password } = req.body;

    try {
      const client = await setupVulcan(indexNumber, schoolSymbol, password);

      // Pobierz lekcje od najbliższego poniedziałku do najbliższego piątku
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 - niedziela, 1 - poniedziałek, ..., 6 - sobota
    const mondayOffset = dayOfWeek === 0 ? 1 : 8 - dayOfWeek;
    const fridayOffset = dayOfWeek === 0 ? 5 : 5 - dayOfWeek;

    const nextMonday = new Date(today);
    nextMonday.setDate(today.getDate() + mondayOffset);

    const nextFriday = new Date(today);
    nextFriday.setDate(today.getDate() + fridayOffset);

    if (nextFriday <= nextMonday) {
      nextFriday.setDate(nextFriday.getDate() + 7); // Jeśli piątek ma datę wcześniejszą niż poniedziałek, dodaj tydzień
    }

    const formattedMonday = nextMonday.toISOString().split('T')[0];
    const formattedFriday = nextFriday.toISOString().split('T')[0];

      // Pobierz lekcje
      const lessons = await client.getLessons(formattedMonday, formattedFriday);
      console.log('lessons: ', lessons);

      res.json(lessons);
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  });

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer().catch((error) => {
  console.error('Error starting the server:', error);
});
