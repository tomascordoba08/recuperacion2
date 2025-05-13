const express = require('express');
const evaluacionesControlador = require('../controlador/evaluacionesControlador');
const evaluaciones = require('../controlador/evaluacionesControlador');
const router = express.Router();

router.get('/evaluaciones', evaluaciones.todasEvaluaciones);
router.get('/id/:id', evaluaciones.buscarPorId);
router.get('/nombre/:nombre', evaluaciones.buscarPorNombre);
router.post('/crear', evaluaciones.crearEvaluacion);
router.put('/editar', evaluaciones.editarEvaluacion);
router.delete('/borrar/:id', evaluaciones.borrarEvaluacion);

module.exports = router;