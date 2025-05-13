const express = require('express');
const UsuarioControlador = require('../controlador/eventosControlador');
const evento = require('../controlador/eventosControlador');
const router = express.Router();

router.get('/eventos', evento.todoEventos);
router.get('/id/:id', evento.buscarPorId);
router.get('/nombre/:nom', evento.buscarPorNombres);
router.post('/creareventos', evento.crearEventos);
router.put('/editaEventos', evento.editarEventos);
router.delete('/usuarios/:id', evento.borrarUsuario);

module.exports = router; 