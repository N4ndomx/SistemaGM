class usuarioDatosModel {

    constructor(connec) {
      this.connection = connec;
    }
    
    async getUserByMatricula(req, res ) {
      
        // Consulta parametrizada para verificar los datos de usuario y contraseña
        const query = 'SELECT * FROM soldados WHERE matricula = ? ';
      
        this.connection.query(query, [req.params.matricula], (error, results) => {
          if (error) {
            console.error('Error al realizar la consulta:', error);
            return res.status(500).json({ error: 'Error al realizar la consulta' });
          }
      
          if (results.length === 1) {
            // Los datos de usuario y contraseña son correctos
            // console.log(results)
            // return res.json({ message: 'Inicio de sesión exitoso' });
            return res.json(results[0])
          } else {
            // Los datos de usuario y contraseña son incorrectos
            return res.status(401).json({ error: 'Credenciales inválidas' });
          }
      
        });
      }
  }
  
  export default usuarioDatosModel;
  