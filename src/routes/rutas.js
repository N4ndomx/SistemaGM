import { Router } from "express";
import { index } from '../controllers/loginControllers.js';

const rutas = Router();

// Inicio de secion del sistema 
rutas.get('/', (req, res) => { index(req, res) });

// rutas.get("/",(req,res)=>{res.render("home")}) // Inicio de secion del sistema 
// rutas.get("/registro-admin",(req,res)=>{res.render("Blog")})
// rutas.get("/asig-mision",(req,res)=>{res.render("Blog")})
// rutas.get("/perfil",(req,res)=>{res.render("Blog")})
// rutas.get("/estadisticas",(req,res)=>{res.render("Blog")})
// rutas.get("/home",(req,res)=>{res.render("Blog")})
// // rutas.get("/blog",(req,res)=>{res.render("Blog")})

export default rutas;