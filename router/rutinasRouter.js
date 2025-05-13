const express = require('express');
const usuarioControlador = require('../controlador/rutinasControlador');
const rutinas = require('../controlador/rutinasControlador');
const router = express.Router();

router.get('/rutinas', rutinas.todasRutinas);
router.get('/id/:id', rutinas.buscarPorId);
router.get('/nombre/:nombre', rutinas.buscarPorNombre);
router.post('/crear', rutinas.crearRutina);
router.put('/editar', rutinas.editarRutina);
router.delete('/borrar/:id', rutinas.borrarRutina);

module.exports = router;

