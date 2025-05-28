import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function ServicosPage() {
  const [servicos, setServicos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/servicos')
      .then((res) => setServicos(res.data))
      .catch(() => alert('Erro ao carregar serviços'));
  }, []);

  const selecionarServico = (servico) => {
    localStorage.setItem('servicoSelecionado', servico);
    navigate('/agendamento');
  };

  return (
    <div className="container">
      <h2>Escolha um Serviço</h2>
      <ul>
        {servicos.map((s, i) => (
          <li key={i} onClick={() => selecionarServico(s)}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
