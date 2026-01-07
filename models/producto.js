const { sequelize, DataTypes } = require('./database');
const Producto = sequelize.define('Producto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    //para precio 
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'productos',
    timestamps: false
});

module.exports = Producto;


