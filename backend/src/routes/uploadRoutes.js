import express from 'express';
import multer from 'multer';
import path from 'path';
import { verificarToken } from '../middlewares/authMiddleware.js';
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'src/uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

router.post('/', verificarToken, upload.single('imagem'), (req, res) => {
  res.status(200).json({ imagem: req.file.filename });
});

export default router;
