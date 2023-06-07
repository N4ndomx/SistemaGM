
class loginModel {

  constructor(connection) {
    this.conx = connection;
  }
  async getUserByUsername(username) {
    // Utilizar la instancia de conexión para realizar consultas
    const query = 'SELECT * FROM soldados WHERE nombre = ?';
    const result = await this.conx.query(query, [username]);
    console.log(result)
    // return result;
  }

  // Otros métodos del modelo...
}

export default loginModel;
