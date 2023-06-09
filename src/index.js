import express from "express";
import rutas from "./routes/rutas.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const APP = express();
const PUERTO = process.env.PORT || 3000
let dirCode = dirname(fileURLToPath(import.meta.url))


// Indica conde se encuentra los html con framwore ejs  Nota : Recuerda que USE debe indicar la pacaidad
APP.set("views", join(dirCode, "views"))
APP.set("view engine", 'ejs')
// indica donde estan los elemtos estaticos
APP.use(express.static(join(dirCode, "public")))

APP.use(rutas)

APP.listen(PUERTO)
console.log("http//localhost:",PUERTO)






