import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Importar rutas
import authRoutes from './routes/auth.routes';
import productRoutes from './routes/producto.routes';

// Configuración inicial
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Conexión a la base de datos
const MONGO_URI = process.env.MONGO_URI || '';
mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ Conectado a la base de datos MongoDB'))
    .catch((err) => console.error('❌ Error de conexión a MongoDB:', err));

// Middlewares básicos
app.use(cors());
app.use(express.json());

// Rutas de la API
app.use('/api/auth', authRoutes);
app.use('/api/productos', productRoutes);

// Ruta de ejemplo
app.get('/api', (req, res) => {
  res.send('¡API de MercadoLocal funcionando! 🚀');
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});