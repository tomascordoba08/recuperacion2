const express = require('express');
const usuarioControlador = require('../controlador/usuarioControlador');
const router = express.Router();

router.post('/usuarios', usuarioControlador.crearUsuario);

module.exports = router;