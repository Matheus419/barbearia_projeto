import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const register = async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const senhaCriptografada = await bcrypt.hash(senha, 10);
    const novoUser = await User.create({ nome, email, senha: senhaCriptografada });
    res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao registrar usuário' });
  }
};

export const login = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

    const senhaValida = await bcrypt.compare(senha, user.senha);
    if (!senhaValida) return res.status(401).json({ error: 'Senha inválida' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Erro no login' });
  }
};