const express = require('express');
const cors = require('cors');
const eventosRouter = require('./router/eventosRouter'); 
const rutinasRouter = require('./router/rutinasRouter'); 
const evaluacionesRouter = require('./router/evaluacionesRouter'); 
const usuarioRouter = require('./router/usuarioRouter');
const AdminRouter = require('./router/AdminRouter');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3060;

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Middleware para parseo de solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Rutas existentes para eventos
app.use('/', eventosRouter);

// Rutas existentes para rutinas
app.use('/', rutinasRouter);

// Nuevas rutas para evaluaciones
app.use('/', evaluacionesRouter);

app.use('/', usuarioRouter);

app.use('/', AdminRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});