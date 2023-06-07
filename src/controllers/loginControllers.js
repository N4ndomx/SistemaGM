// const home= require('../views/home');
import dbConnection from '../models/dbConnection.js';
import loginModel from '../models/loginModel.js';

class loginController {
  constructor() {
    // Constructor del controlador
  }

  index(req, res) {
    res.render('home');
  }


  async dashboard(req, res) {
    // Renderizar la vista del dashboard
    res.render('dashboard', { user: req.session.user });
  }
};
export const index = async (req, res) => {
  res.render('home');
};