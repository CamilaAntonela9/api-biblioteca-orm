//routes para producto
const express = require("express");
const router = express.Router();
const Producto = require("../models/producto");

//post para crear producto
router.post("/", async (req, res) => {
    try {
        const { nombre, cantidad, precio, url } = req.body;
        const producto = await Producto.create({ nombre, cantidad, precio, url });
        res.status(201).json(producto);
    } catch (error) {
        console.error("Error detallado al crear producto:", error.message); 
        res.status(500).json({ error: "Error al crear el producto" });
    }
});


//get para obtener todos los productos
router.get("/", async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los productos" });
    }
});

//get para obtener un producto por id
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findByPk(id);
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el producto" });
    }
});

// delete para eliminar un producto por id
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findByPk(id);
        await producto.destroy();
        res.status(200).json({ "mensaje": `El producto ${id} ha sido eliminado correctamente` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



