import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CadastroPage from './pages/CadastroPage';
import ServicosPage from './pages/ServicosPage';
import AgendamentoPage from './pages/AgendamentoPage';
import ConfirmacaoPage from './pages/ConfirmacaoPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastro" element={<CadastroPage />} />
      <Route path="/servicos" element={<ServicosPage />} />
      <Route path="/agendamento" element={<AgendamentoPage />} />
      <Route path="/confirmacao" element={<ConfirmacaoPage />} />
    </Routes>
  );
}

export default App;