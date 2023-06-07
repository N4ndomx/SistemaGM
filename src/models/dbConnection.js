// app/models/dbConnection.js
import  mysql  from 'mysql';
// const config = require('../config/database');

let connection = null;

class DBConnection {
  constructor() {
    if (!connection) {
      connection = mysql.createConnection(config.dbConfig);
      connection.connect((err) => {
        if (err) {
          console.error('Error al conectar a la base de datos:', err);
        } else {
          console.log('Conexión exitosa a la base de datos.');
        }
      });
    }
    return connection;
  }
}

export default DBConnection;
