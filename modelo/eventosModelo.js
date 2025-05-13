const dbService = require('./bd/Conexion');

class eventosModelo {
    static async todoevento(pagina = 1) {
      //pagina = 1;
      const limite = 50;  // Número máximo de productos por página
      const offset = (pagina - 1) * limite;  // Calculamos el offset para la paginación
      //const query = 'SELECT * FROM eventos ORDER BY idEventos ASC';
      const query =` SELECT * FROM eventos ORDER BY idEventos ASC LIMIT ${limite} OFFSET ${offset}`;
      try {
        return await dbService.query(query);
      } catch (err) {
        throw err;
      }
    }

    static async buscarPorId(id) {
      const query = 'SELECT * FROM eventos WHERE idEventos = ?';
      try {
        const [user] = await dbService.query(query, [id]);
        return user || null; // ← Asegurar que devuelva null si no hay producto
      } catch (err) {
        throw err;
      }
    }

    static async buscarPorNombre(nombre) {
      const query = 'SELECT * FROM eventos WHERE Nombres LIKE ?';
      try {
        return await dbService.query(query, [`%${producto}%`]);
      } catch (err) {
        throw err;
      }
    }

    static async crearEventos(id, descrip, fecha, estado) {
      const query = 'INSERT INTO eventos (idEventos, descripsion, fecha, estado) VALUES (?, ?, ?, ?)';
      try {
        return await dbService.query(query, [idEventos] ,[descrip], [fecha] ,[estado]);
      } catch (err) {
        throw err;
      }
    }

    static async modificarEventos(id, descrip, fecha, estado) {
      const query = 'UPDATE eventos SET identificacion = ? ,  descripsion = ? , fecha = ?n, estado = ? WHERE idEventos = ?';
      try {
        return await dbService.query(query, [articulo, id]);
      } catch (err) {
        throw err;
      }
    }

    static async eliminarProducto(id) {
      const query = 'DELETE FROM eventos WHERE idEventos = ?';
      try {
        return await dbService.query(query, [id]);
      } catch (err) {
        throw err;
       }
      }
    }

    module.exports = eventosModelo;