import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function CadastroPage() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleCadastro = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', { nome, email, senha });
      alert('Cadastro feito com sucesso');
      navigate('/login');
    } catch (err) {
      alert('Erro no cadastro');
    }
  };

  return (
    <div className="container">
      <h2>Cadastro</h2>
      <form onSubmit={handleCadastro}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
      <p onClick={() => navigate('/login')}>Já tem conta? Faça login</p>
    </div>
  );
}