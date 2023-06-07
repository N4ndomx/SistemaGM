// const home= require('../views/home');
import dbConnection from '../models/dbConnection.js';
import loginModel from '../models/loginModel.js';

export default class loginViewController {
  model = new loginModel(new dbConnection());
  constructor() {
    // Constructor del controlador
  }

  async index(req, res) {
    res.render('login');
  }

  async login(req, res) {
    this.model.getUserByUsername('Juan')

  }
};
// export const index = async (req, res) => {
//   res.render('home');
// };