import express from 'express';
import { criarAgendamento } from '../controllers/agendamentoController.js';
import { verificarToken } from '../middlewares/authMiddleware.js';
const router = express.Router();
router.post('/', verificarToken, criarAgendamento);
export default router;