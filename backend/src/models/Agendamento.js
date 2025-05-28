import mongoose from 'mongoose';
const agendamentoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  servico: String,
  horario: String,
  imagemReferencia: String,
  confirmado: Boolean
});
export default mongoose.model('Agendamento', agendamentoSchema);
