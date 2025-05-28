import Agendamento from '../models/Agendamento.js';
export const criarAgendamento = async (req, res) => {
  const { servico, horario, imagemReferencia } = req.body;
  try {
    const novoAgendamento = await Agendamento.create({
      userId: req.userId,
      servico,
      horario,
      imagemReferencia,
      confirmado: false
    });
    res.status(201).json(novoAgendamento);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao agendar' });
  }
};