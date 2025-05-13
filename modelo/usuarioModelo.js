const dbService = require('./bd/Conexion');
const bcrypt = require('bcrypt');

class usuarioModelo {
  // funcion para crear nuevos clientes
  static async crearUsuario(doc, name, tel, email, contras) {
    const query = 'INSERT INTO usuarios (documento, nombres, telefono, correo, contrasena) VALUES (?, ?, ?, ?, ?)';

    try {
      // Generar el hash de la contraseña con bcrypt
      const salto = 10; // Nivel de seguridad de encriptación
      const contra = await bcrypt.hash(contras, salto);

      return await dbService.query(query, [doc, name, tel, email, contra]);
    } catch (err) {
      throw new Error(`Error al crear su nueva cuenta: ${err.message}`);
    }
  }//cerrar crear cliente
  
}

module.exports = usuarioModelo;