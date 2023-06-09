create database sgm;
use sgm;
CREATE TABLE cuerpos_ejercito (
  id INT PRIMARY KEY,
  nombre VARCHAR(25),
  descripcion VARCHAR(100),
  fecha_creacion DATE
);
CREATE TABLE servicios (
  id INT PRIMARY KEY,
  nombre VARCHAR(25),
  descripcion VARCHAR(100),
  fecha_creacion DATE
);
CREATE TABLE cuarteles (
  id INT PRIMARY KEY,
  nombre VARCHAR(25),
  direccion VARCHAR(100),
  cpo VARCHAR(5),
  ciudad VARCHAR(25),
  capacidad INT,
  fecha_creacion DATE
);
CREATE TABLE Compania (
  id INT PRIMARY KEY,
  nombre VARCHAR(25),
  funcion VARCHAR(100),
  fecha_creacion DATE,
  estado VARCHAR(15),
  Id_cuartel INT,
  FOREIGN KEY (Id_cuartel) REFERENCES cuarteles(id)
);
CREATE TABLE Misiones (
  id INT PRIMARY KEY,
  nombre VARCHAR(25),
  descripcion VARCHAR(200),
  fecha_creacion DATE,
  fecha_inicio DATE,
  fecha_fin DATE,
  estado VARCHAR(15),
  objetivos VARCHAR(100)
);
CREATE TABLE soldados (
  matricula VARCHAR(7) PRIMARY KEY,
  corre_elect VARCHAR(30),
  nombre VARCHAR(20),
  apellidos_paterno VARCHAR(25),
  apellidos_materno VARCHAR(25),
  rango VARCHAR(20),
  CURP VARCHAR(18),
  edad INT,
  genero VARCHAR(1),
  fecha_nacimiento DATE,
  fecha_ingreso DATE,
  direccion VARCHAR(100),
  CPO VARCHAR(5),
  telefono VARCHAR(10),
  fotografia VARCHAR(255),
  id_cuerpo INT,
  id_compania INT,
  id_servicio INT,
  FOREIGN KEY (id_cuerpo) REFERENCES cuerpos_ejercito(id),
  FOREIGN KEY (id_compania) REFERENCES Compania(id),
  FOREIGN KEY (id_servicio) REFERENCES servicios(id)
);
CREATE TABLE Cuentas (
  id INT PRIMARY KEY,
  contraseña VARCHAR(8),
  matricula VARCHAR(7),
  FOREIGN KEY (matricula) REFERENCES soldados(matricula)
);

INSERT INTO cuerpos_ejercito (id, nombre, descripcion, fecha_creacion)
VALUES (1, 'Fuerzas Especiales', 'Cuerpo especializado en operaciones tácticas y estratégicas.', '2020-01-01');
INSERT INTO servicios (id, nombre, descripcion, fecha_creacion)
VALUES (1, 'Secretario Mayor', 'Encargado de coordinar las actividades del Ejercito', '2023-06-03');
INSERT INTO soldados (matricula, corre_elect, nombre, apellidos_paterno, apellidos_materno, rango, CURP, edad, genero, fecha_nacimiento, fecha_ingreso, direccion, CPO, telefono, fotografia, id_cuerpo, id_compania, id_servicio)
VALUES ('HGJKI45', 'soldado123@example.com', 'Juan', 'García', 'López', 'Capitan', 'HGJKIOL34HVKNJ1245', 35, 'H', '1989-05-10', '2018-01-15', 'Calle Principal 123', '94732', '2721525161',
 'https://cdn.discordapp.com/attachments/920049574729617528/1114789773987553391/85d496ee-911d-4c85-9248-f8be8ede6459.jpg', 1, null, 1);
INSERT INTO soldados (matricula, corre_elect, nombre, apellidos_paterno, apellidos_materno, rango, CURP, edad, genero, fecha_nacimiento, fecha_ingreso, direccion, CPO, telefono, fotografia, id_cuerpo, id_compania, id_servicio)
VALUES ('FORC027', 'cfloresramirez237@example.com', 'Cristian Fernando', 'Flores', 'Ramirez', 'Capitan', 'FORC030227HVTZ124F', 40, 'H', '1989-05-10', '2018-01-15', 'Calle Principal 123', '94732', '2721522323',
 'https://cdn.discordapp.com/attachments/914278136038981702/1022132438744440932/20220921_080913.jpg', 1, null, 1);
INSERT INTO Cuentas (id, contraseña, matricula)
VALUES (1, '12345678', 'HGJKI45');
INSERT INTO Cuentas (id, contraseña, matricula)
VALUES (2, '12345678', 'FORC027');

 


