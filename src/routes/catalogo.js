const express = require("express");
const Catalogo = require("../models/catalogo"); // Importa el modelo correcto

const router = express.Router();

// Crear un nuevo elemento en el catálogo
router.post("/catalogo", (req, res) => {
    // Crea una nueva instancia del modelo Catalogo utilizando el constructor
    const nuevoProducto = new Catalogo({
        nombre: req.body.nombre,
        precio: req.body.precio,
        imagen: req.body.imagen
    });

    // Guarda el nuevo producto en la base de datos
    nuevoProducto.save()
        .then(data => res.json(data)) // Devuelve los datos del producto creado
        .catch(error => res.status(500).json({ message: error.message })); // Maneja errores
});

//get all catalogo
router.get("/catalogo", (req, res) => {
    Catalogo // Aquí se utiliza el modelo Catalogo en lugar del esquema catalogoShema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
});

//get catalogo
router.get("/catalogo/:id", (req, res) => {
    const { id } = req.params;
    Catalogo // Aquí se utiliza el modelo Catalogo en lugar del esquema catalogoShema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
});

//update a catalogo
router.put("/catalogo/:id", (req, res) => {
    const { id } = req.params;
    const { nombre ,precio, imagen } = req.body
    Catalogo // Aquí se utiliza el modelo Catalogo en lugar del esquema catalogoShema
    .updateOne({ _id: id}, {$set: {nombre, precio, imagen}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
});

// Eliminar un elemento del catálogo por su ID
router.delete("/catalogo/:id", (req, res) => {
    const id = req.params.id;
    Catalogo.findByIdAndDelete(id) // Utiliza findByIdAndDelete() para encontrar y eliminar el documento por su ID
        .then(data => {
            if (!data) {
                return res.status(404).json({ message: "Elemento no encontrado" });
            }
            res.json(data); // Devuelve los datos del elemento que se eliminó
        })
        .catch(error => res.status(500).json({ message: error.message })); // Devuelve el mensaje de error correctamente
});




module.exports = router;
