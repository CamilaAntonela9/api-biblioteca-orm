router.post("/", async (req, res) => {
  try {
    const { nombre, cantidad, precio, url } = req.body;
    // Esto asume que Producto está correctamente importado/requerido
    const producto = await Producto.create({ nombre, cantidad, precio, url }); 
    res.status(201).json(producto);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el producto" });
  }
});


// <!DOCTYPE html>
<html lang="en">
<head>
<title>Error</title>
</head>
<body>
<pre>Cannot POST /producto</pre>
</body>
</html>

// scrip correcto para crear un producto y que no salga error 404
