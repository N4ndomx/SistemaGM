
class loginModel {

  constructor(connec) {
    this.connection = connec;
  }
  async validacionlogin(req, res){
    const  username = req.params.matricula;
    const  password  =  req.params.contra;
    // Consulta parametrizada para verificar los datos de usuario y contraseña
    const query = 'SELECT * FROM cuentas WHERE matricula = ? AND contraseña = ?';
  
    this.connection.query(query, [username, password], (error, results) => {
      if (error) {
        console.error('Error al realizar la consulta:', error);
        return res.status(500).json({ message: 'Error al realizar la consulta' });
      }
  
      if (results.length === 1) {
        // Los datos de usuario y contraseña son correctos
        return res.json({ message: 'Inicio de sesión exitoso' });
      } else {
        // Los datos de usuario y contraseña son incorrectos
        return res.status(401).json({ message: 'Credenciales inválidas' });
      }
    });
  }
}

export default loginModel;
