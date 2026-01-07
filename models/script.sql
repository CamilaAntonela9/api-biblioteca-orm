 CREATE DATABASE IF NOT EXISTS examen;
    USE examen;
    CREATE TABLE IF NOT EXISTS Productos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        cantidad INT NOT NULL,
        precio DECIMAL(10, 2) NOT NULL,
        url VARCHAR(255)
    );

// para ejecutar en posgres

create database examen;
\c examen;
create table if not exists Productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    cantidad INT NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    url VARCHAR(255)
);


//script para post en postam 

{
    "nombre": "Producto Ejemplo",
    "cantidad": 10,
    "precio": 99.99,
    "url": "http://example.com/producto.jpg"
}
    