import { Router } from "express";

const rutas = Router()

rutas.get("/",(req,res)=>{res.render("home",{titulo:"Home"})})
rutas.get("/blog",(req,res)=>{res.render("Blog")})

export default rutas;