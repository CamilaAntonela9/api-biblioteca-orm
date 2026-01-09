const express = require('express');
const app = express();

const { sequelize } = require('./models/database');
const producto = require("./routes/producto");

const PORT = process.env.PORT || 3000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use('/producto', producto);


const start = async () => {
    try {
        await sequelize.authenticate();
        console.log("Conexion establecida con exito");
        app.listen(PORT, () => {
            console.log(`Escuchando el puerto ${PORT}`);
        });
    } catch (error) {
        console.log("No se pudo conectar a la base de datos: ", error);
    }
}

start();