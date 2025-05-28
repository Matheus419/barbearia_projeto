import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function AgendamentoPage() {
  const [horario, setHorario] = useState('');
  const [imagem, setImagem] = useState(null);
  const navigate = useNavigate();

  const handleAgendar = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) return alert('Usuário não autenticado');

    try {
      // upload da imagem
      let imagemReferencia = '';
      if (imagem) {
        const formData = new FormData();
        formData.append('imagem', imagem);
        const res = await api.post('/uploads', formData, {
          headers: { Authorization: `Bearer ${token}` }
        });
        imagemReferencia = res.data.imagem;
      }

      const res = await api.post('/agendamentos', {
        servico: localStorage.getItem('servicoSelecionado'),
        horario,
        imagemReferencia,
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      localStorage.setItem('agendamentoId', res.data._id);
      navigate('/confirmacao');
    } catch (err) {
      alert('Erro ao agendar');
    }
  };

  return (
    <div className="container">
      <h2>Agendamento</h2>
      <form onSubmit={handleAgendar}>
        <input
          type="text"
          placeholder="Horário desejado (ex: 14:00)"
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
        />
        <input type="file" onChange={(e) => setImagem(e.target.files[0])} />
        <button type="submit">Confirmar Agendamento</button>
      </form>
    </div>
  );
}