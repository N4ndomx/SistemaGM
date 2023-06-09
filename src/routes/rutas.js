import { Router } from "express";
import dbConnection from '../models/dbConnection.js';
import loginViewController from '../controllers/loginViewControllers.js';
import usuarioDatosController from "../controllers/usuarioDatosControllers.js";
const loginControl = new loginViewController();
const usuarioDatosControl = new usuarioDatosController();
const rutas = Router();

// Inicio de secion del sistema 
rutas.get('/', (req, res) => { loginControl.index(req, res) });

// Conexion con el BD
rutas.get('/datos/:matricula', (req, res) => { usuarioDatosControl.datosSoldado(req, res) });
rutas.get('/login/:matricula/:contra', (req, res) => {loginControl.validacionlogin(req, res)});

// rutas.get("/",(req,res)=>{res.render("home")}) // Inicio de secion del sistema 
rutas.get("/registro-admin",(req,res)=>{res.render("registrarAdmin")})
rutas.get("/misiones",(req,res)=>{res.render("asignarMision")})
rutas.get("/perfil",(req,res)=>{res.render("perfilCapitan")})
// rutas.get("/estadisticas",(req,res)=>{res.render("Blog")})
rutas.get("/home",(req,res)=>{res.render("home")})
// // rutas.get("/blog",(req,res)=>{res.render("Blog")})

export default rutas;