import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './src/config/db.js';
import authRoutes from './src/routes/authRoutes.js';
import servicoRoutes from './src/routes/servicoRoutes.js';
import agendamentoRoutes from './src/routes/agendamentoRoutes.js';
import uploadRoutes from './src/routes/uploadRoutes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/servicos', servicoRoutes);
app.use('/api/agendamentos', agendamentoRoutes);
app.use('/api/uploads', uploadRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 5000}`);
});
