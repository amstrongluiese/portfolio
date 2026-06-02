import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 5000);

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Express backend is running locally.' });
});

app.get('/api', (_req, res) => {
  res.json({ message: 'Portfolio API ready.' });
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
