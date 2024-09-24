const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.config');
const authRoutes = require('./routes/authRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const barberRoutes = require('./routes/barberRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');
const loggerMiddleware = require('./middlewares/loggerMiddleware'); // Adicione isso

require('dotenv').config();

const app = express();

// Conectar ao MongoDB
connectDB();

// Middleware para CORS
app.use(cors({
    origin: 'http://localhost:3000'
}));

// Middleware para JSON
app.use(express.json());

// Middleware de logging
app.use(loggerMiddleware); // Adicione isso

// Rotas
app.use('/auth', authRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/barbers', barberRoutes);
app.use('/expenses', expenseRoutes);
app.use('/services', serviceRoutes);
app.use('/payments', paymentRoutes);

// Middleware de tratamento de erros
app.use(errorMiddleware);

// Inicializar servidor
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
