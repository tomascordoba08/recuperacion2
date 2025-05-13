const modelo = require('../modelo/eventosModelo');

class eventosControlador {
  // Obtener todos los usuarios
  static async todoEventos(req, res) {
    try {
      const users = await modelo.todoevento();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al obtener los eventos' });
    }
  }

  // Buscar usuario por ID
  static async buscarPorId(req, res) {
    const { id } = req.params;
    try {
      const user = await modelo.buscarPorId(id);
      if (!user) {
        return res.status(404).json({ error: 'evento no encontrado' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al obtener el usuario' });
    }
  }


  // Buscar usuario por nombre
  static async buscarPorNombres(req, res) {
    const { nom } = req.params;
    try {
      const users = await modelo.buscarPorNombres(nom);
      if (!users.length) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al obtener el Usuario' });
    }
  }


  // Crear un nuevo usuario
  static async crearEventos(req, res) {
    const {id, descrip, fecha, estado } = req.body;
    try {
      const result = await modelo.crearEventos(id, descrip, fecha, estado);
      res.status(201).json({ message: 'evento creado', idevento: result.insertId });
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al crear el evento ' });
    }
  }

  // Modificar un usuario
  static async editarEventos(req, res) {
    const {id , descrip, fecha, estado } = req.body;
    try {
      const result = await modelo.modificarUsuario(id, descrip, fecha, estado);
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.json({ message: 'Usuario actualizado' });
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al actualizar el Usuario' });
    }
  }

  // Eliminar un usuario
  static async borrarUsuario(req, res) {
    const { id } = req.params;
    try {
      const result = await modelo.eliminarEventos(id);
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.json({ message: 'Usuario eliminado' });
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al eliminar el Usuario' });
    }
  }
}

module.exports = eventosControlador;