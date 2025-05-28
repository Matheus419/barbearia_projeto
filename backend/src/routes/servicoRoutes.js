import express from 'express';
const router = express.Router();

const servicos = ['Corte', 'Barba', 'Combo Corte + Barba'];
router.get('/', (req, res) => res.json(servicos));

export default router;