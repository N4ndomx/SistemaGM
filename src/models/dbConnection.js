// app/models/dbConnection.js
import mysql from 'mysql';
import { config } from "../config/database.js";

let connection = null;

class DBConnection {
  constructor() {
    if (!connection) {
      connection = mysql.createConnection(config);
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
