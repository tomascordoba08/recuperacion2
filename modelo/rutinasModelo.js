const dbService = require('./bd/Conexion');

class rutinasModelo {
  static async todasRutinas(pagina = 1) {
    const limite = 50;
    const offset = (pagina - 1) * limite;
    const query = `SELECT * FROM rutinas ORDER BY id ASC LIMIT ${limite} OFFSET ${offset}`;
    try {
      return await dbService.query(query);
    } catch (err) {
      throw err;
    }
  }

  static async buscarPorId(id) {
    const query = 'SELECT * FROM rutinas WHERE id = ?';
    try {
      const [user] = await dbService.query(query, [id]);
      return user || null;
    } catch (err) {
      throw err;
    }
  }

  static async buscarPorNombre(nombre) {
    const query = 'SELECT * FROM rutinas WHERE nombre LIKE ?';
    try {
      return await dbService.query(query, [`%${nombre}%`]);
    } catch (err) {
      throw err;
    }
  }

  static async crearRutina(nombre, descripcion, duracion, imagen) {
    const query = 'INSERT INTO rutinas (nombre, descripcion, duracion, imagen) VALUES (?, ?, ?, ?)';
    try {
      return await dbService.query(query, [nombre, descripcion, duracion, imagen]);
    } catch (err) {
      throw err;
    }
  }

  static async modificarRutina(id, nombre, descripcion, duracion, imagen) {
    const query = 'UPDATE rutinas SET nombre = ?, descripcion = ?, duracion = ?, imagen = ? WHERE id = ?';
    try {
      return await dbService.query(query, [nombre, descripcion, duracion, imagen, id]);
    } catch (err) {
      throw err;
    }
  }

  static async eliminarRutina(id) {
    const query = 'DELETE FROM rutinas WHERE id = ?';
    try {
      return await dbService.query(query, [id]);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = rutinasModelo;