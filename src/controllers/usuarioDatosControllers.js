import dbConnection from '../models/dbConnection.js';
import usuarioDatosMode from '../models/usuarioDatos.Model.js';

export default class usuarioDatosController {
  model = new usuarioDatosMode(new dbConnection());
  constructor() {
    // Constructor del controlador
  }

  async index(req, res) {
    res.render('perfil');
  }

  async datosSoldado(req, res) {
   await this.model.getUserByMatricula(req, res)

  }
};
// export const index = async (req, res) => {
//   res.render('home');
// };