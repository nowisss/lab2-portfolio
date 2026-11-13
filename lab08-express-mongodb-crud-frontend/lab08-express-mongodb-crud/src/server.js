import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import projectsRouter from './routes/projects.js';

const app = express();
app.use(cors());
app.use(express.json({ limit: '100kb' }));
app.get('/api/health', (req, res) => res.json({ status: 'ok', database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected' }));
app.use('/api/projects', projectsRouter);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) return next();
  res.sendFile(path.join(distPath, 'index.html'), error => { if (error) next(); });
});

const port = process.env.PORT || 4000;
if (!process.env.MONGODB_URI) {
  console.error('Укажите MONGODB_URI в .env');
  process.exit(1);
}
try {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('MongoDB: подключена');
  app.listen(port, () => console.log(`API и сайт: http://localhost:${port}`));
} catch (error) {
  console.error('Не удалось подключиться к MongoDB:', error.message);
  process.exit(1);
}
