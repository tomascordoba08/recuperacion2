const modelo = require('../modelo/evaluacionesModelo');

class evaluacionesControlador {
  // Obtener todas las evaluaciones
  static async todasEvaluaciones(req, res) {
    try {
      const evaluaciones = await modelo.todasEvaluaciones();
      res.json(evaluaciones);
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al obtener las evaluaciones' });
    }
  }

  // Buscar evaluación por ID
  static async buscarPorId(req, res) {
    const { id } = req.params;
    try {
      const evaluacion = await modelo.buscarPorId(id);
      if (!evaluacion) {
        return res.status(404).json({ error: 'Evaluación no encontrada' });
      }
      res.json(evaluacion);
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al obtener la evaluación' });
    }
  }

  // Buscar evaluaciones por nombre
  static async buscarPorNombre(req, res) {
    const { nombre } = req.params;
    try {
      const evaluaciones = await modelo.buscarPorNombre(nombre);
      if (!evaluaciones.length) {
        return res.status(404).json({ error: 'Evaluación no encontrada' });
      }
      res.json(evaluaciones);
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al obtener la evaluación' });
    }
  }

  // Crear una nueva evaluación
  static async crearEvaluacion(req, res) {
    const { nombre, descripcion } = req.body;
    try {
      const result = await modelo.crearEvaluacion(nombre, descripcion);
      res.status(201).json({ message: 'Evaluación creada', idevaluacion: result.insertId });
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al crear la evaluación' });
    }
  }

  // Modificar una evaluación
  static async editarEvaluacion(req, res) {
    const { id, nombre, descripcion } = req.body;
    try {
      const result = await modelo.modificarEvaluacion(id, nombre, descripcion);
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Evaluación no encontrada' });
      }
      res.json({ message: 'Evaluación actualizada' });
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al actualizar la evaluación' });
    }
  }

  // Eliminar una evaluación
  static async borrarEvaluacion(req, res) {
    const { id } = req.params;
    try {
      const result = await modelo.eliminarEvaluacion(id);
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Evaluación no encontrada' });
      }
      res.json({ message: 'Evaluación eliminada' });
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al eliminar la evaluación' });
    }
  }
}

module.exports = evaluacionesControlador;