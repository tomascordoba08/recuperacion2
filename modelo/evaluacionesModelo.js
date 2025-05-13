const dbService = require('./bd/Conexion');

class evaluacionesModelo {
  static async todasEvaluaciones(pagina = 1) {
    const limite = 50;
    const offset = (pagina - 1) * limite;
    const query = `SELECT * FROM evaluaciones ORDER BY id ASC LIMIT ${limite} OFFSET ${offset}`;
    try {
      return await dbService.query(query);
    } catch (err) {
      throw err;
    }
  }

  static async buscarPorId(id) {
    const query = 'SELECT * FROM evaluaciones WHERE id = ?';
    try {
      const [user] = await dbService.query(query, [id]);
      return user || null;
    } catch (err) {
      throw err;
    }
  }

  static async buscarPorNombre(nombre) {
    const query = 'SELECT * FROM evaluaciones WHERE nombre LIKE ?';
    try {
      return await dbService.query(query, [`%${nombre}%`]);
    } catch (err) {
      throw err;
    }
  }

  static async crearEvaluacion(nombre, descripcion) {
    const query = 'INSERT INTO evaluaciones (nombre, descripcion) VALUES (?, ?)';
    try {
      return await dbService.query(query, [nombre, descripcion]);
    } catch (err) {
      throw err;
    }
  }

  static async modificarEvaluacion(id, nombre, descripcion) {
    const query = 'UPDATE evaluaciones SET nombre = ?, descripcion = ? WHERE id = ?';
    try {
      return await dbService.query(query, [nombre, descripcion, id]);
    } catch (err) {
      throw err;
    }
  }

  static async eliminarEvaluacion(id) {
    const query = 'DELETE FROM evaluaciones WHERE id = ?';
    try {
      return await dbService.query(query, [id]);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = evaluacionesModelo;