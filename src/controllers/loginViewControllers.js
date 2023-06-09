// const home= require('../views/home');
import dbConnection from '../models/dbConnection.js';
import loginModel from '../models/login.Model.js';

export default class loginViewController {
  model = new loginModel(new dbConnection());
  constructor() {
    // Constructor del controlador
  }

  async index(req, res) {
    res.render('login');
  }
  async validacionlogin(req, res){
    await this.model.validacionlogin(req, res)

  }

};
// export const index = async (req, res) => {
//   res.render('home');
// };