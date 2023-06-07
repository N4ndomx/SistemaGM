
class loginModel {
  async getUserByUsername(connection, username) {
    // Utilizar la instancia de conexión para realizar consultas
    const query = 'SELECT * FROM users WHERE username = ?';
    const result = await connection.query(query, [username]);
    return result;
  }
  
  // Otros métodos del modelo...
}

export default loginModel;
