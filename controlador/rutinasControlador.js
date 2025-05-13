const Modelo = require('../modelo/rutinasModelo');

class rutinasControlador {
  // Obtener todas las rutinas
  static async todasRutinas(req, res) {
    try {
      const rutinas = await Modelo.todasRutinas();
      res.json(rutinas);
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al obtener las rutinas' });
    }
  }

  // Buscar rutina por ID
  static async buscarPorId(req, res) {
    const { id } = req.params;
    try {
      const rutina = await Modelo.buscarPorId(id);
      if (!rutina) {
        return res.status(404).json({ error: 'Rutina no encontrada' });
      }
      res.json(rutina);
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al obtener la rutina' });
    }
  }

  // Buscar rutinas por nombre
  static async buscarPorNombre(req, res) {
    const { nombre } = req.params;
    try {
      const rutinas = await Modelo.buscarPorNombre(nombre);
      if (!rutinas.length) {
        return res.status(404).json({ error: 'Rutina no encontrada' });
      }
      res.json(rutinas);
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al obtener la rutina' });
    }
  }

  // Crear una nueva rutina
  static async crearRutina(req, res) {
    const { nombre, descripcion, duracion, imagen } = req.body;
    try {
      const result = await Modelo.crearRutina(nombre, descripcion, duracion, imagen);
      res.status(201).json({ message: 'Rutina creada', idrutina: result.insertId });
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al crear la rutina' });
    }
  }

  // Modificar una rutina
  static async editarRutina(req, res) {
    const { id, nombre, descripcion, duracion, imagen } = req.body;
    try {
      const result = await Modelo.modificarRutina(id, nombre, descripcion, duracion, imagen);
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Rutina no encontrada' });
      }
      res.json({ message: 'Rutina actualizada' });
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al actualizar la rutina' });
    }
  }

  // Eliminar una rutina
  static async borrarRutina(req, res) {
    const { id } = req.params;
    try {
      const result = await Modelo.eliminarRutina(id);
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Rutina no encontrada' });
      }
      res.json({ message: 'Rutina eliminada' });
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al eliminar la rutina' });
    }
  }
}

module.exports = rutinasControlador;