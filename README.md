# MIXCÓATL (SGM)

Este es un prototipo de un Sistema de Gestión del Personal Militar

[ **Documentacion del Proyecto** ](https://uvmx-my.sharepoint.com/:f:/g/personal/zs21004511_estudiantes_uv_mx/Et4f5RTl9SVLhhsZ-1VycF8B7lm4YVw9dZhywrxL8e_oVQ?e=VYDfuI)

EL sistema cuenta con dos tipos de Usuario pero este prototipo solo representa la visión del usuario Superior "Capitan"

## Dependencias

Necesita las siguientes aplicaciones para un despliegue local 

- [Nodejs](https://nodejs.org/es) v18.15.0
- [Mysql](https://dev.mysql.com/downloads/installer/) v8.0.33

Opcionalmente puede instalar

- MySQL Workbench 8.0.33

> Elegir el instalador segun la arquitectura de la computadora donde se realizara el despliege 

## Creación de la base de datos

Para crear la base de datos y algunos insert para el sistema ,deberá ejecutar el código sql que encontrara en la carpeta **src/config/bd.sql** como usuario **root** en mysql.

La eleccion de la herramienda para ejecutar el codigo sql en mysql queda a su consideracion (Shell o Workbench)

```bash
src/config/bd.sql
```

> Revise que no tenga otra base de datos llamada: **sgm** ;esto puede causar problemas con la ejecución del código en **bd.sql**

## Conexión a la base de Datos

Para terminar la configuración , es necesario revisar el archivo encontrado en **src/config/database.js** donde encontrara el siguiente código

```javascript
export const config = {
  host: "localhost",
  user: "root",
  password: "root", // Deberá cambiar por la contraseña que usa para root en mysql
  database: "sgm",
  port: 3306, // Solo cambiar en caso de haber configurado otro puerto en mysql
};
```

Guarde los cambios y procedemos con el ultimo paso

## Descarga de librerías y Despliegue

Use el gestor de paquetes **npm** (dentro del directorio donde se clono el repositorio) para instalar las librerías necesarias.

Utilice el siguiente comando

```bash
npm install
```

Con todas las libreriaas descargadas ,podra ejecutar el siguiente comando para iniciar el proyecto en su sistema

```bash
npm start
```

Si todo salió bien debería ver los siguientes mensajes en su linea de comandos

```bash
Sistema desplegado en:
http//localhost:3000

Conexión exitosa a la base de datos.
```

## Notas

Revise los inserts realizados en el archivo **bd.sql** para poder iniciar sesión en el sistema

