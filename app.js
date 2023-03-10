const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const app = express();
const port = process.env.PORT || 3000;

const dbUrl = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a la base de datos'))
  .catch(err => console.error('Error al conectarse a la base de datos:', err));



// Importar rutas
const solicitudesRouter = require('./routes/solicitudesRoutes');
const pedidosRouter = require('./routes/pedidosRoutes');
const disputasRouter = require('./routes/disputasRoutes');

// Configurar middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(mongoSanitize());
app.use(xss());
app.use(rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Demasiadas solicitudes desde esta dirección IP, por favor intente de nuevo en una hora.'
}));
app.use(hpp());

// Configurar rutas
app.use('/api/v1/solicitudes', solicitudesRouter);
app.use('/api/v1/pedidos', pedidosRouter);
app.use('/api/v1/disputas', disputasRouter);

// Manejar rutas no encontradas
app.use((req, res, next) => {
  const error = new Error('No se encontró la ruta solicitada');
  error.status = 404;
  next(error);
});

// Manejar errores
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const status = err.status ? 'error' : 'fail';

  res.status(statusCode).json({
    status,
    message: err.message
  });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`API escuchando en el puerto ${port}`);
});
