import { Router } from "express";
import dbConnection from '../models/dbConnection.js';
import loginViewController from '../controllers/loginViewControllers.js';
import usuarioDatosController from "../controllers/usuarioDatosControllers.js";
const loginControl = new loginViewController();
const usuarioDatosControl = new usuarioDatosController();
const rutas = Router();

// Inicio de secion del sistema 
rutas.get('/', (req, res) => { loginControl.index(req, res) });
rutas.get('/datos/:matricula', (req, res) => { usuarioDatosControl.datosSoldado(req, res) });

// Ruta para el endpoint de inicio de sesión
rutas.get('/login/:matricula/:contra', (req, res) => {loginControl.validacionlogin(req, res)});
// rutas.get("/",(req,res)=>{res.render("home")}) // Inicio de secion del sistema 
// rutas.get("/registro-admin",(req,res)=>{res.render("Blog")})
// rutas.get("/asig-mision",(req,res)=>{res.render("Blog")})
// rutas.get("/perfil",(req,res)=>{res.render("Blog")})
// rutas.get("/estadisticas",(req,res)=>{res.render("Blog")})
// rutas.get("/home",(req,res)=>{res.render("Blog")})
// // rutas.get("/blog",(req,res)=>{res.render("Blog")})

export default rutas;