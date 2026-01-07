const sequelize = require('./models/database'); 

require ('./models/producto');
require ('./models/relaciones');

const iniciar = async () => {
    try{
        await sequelize.authenticate();
        console.log("Base de datos conectada");
        await sequelize.sync({ alter: true }); 
        console.log("Tablas creadas");
        process.exit(0);
    } catch (error){
        console.error("Error al sincronizar la base de datos:", error);
        process.exit(1); 
    }
};

iniciar();