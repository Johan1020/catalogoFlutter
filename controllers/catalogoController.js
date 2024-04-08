// catalogoController.js

const Catalogo = require('../models/catalogo');

exports.borrarProductoPorNombre = async (req, res) => {
  try {
    const nombre = req.params.nombre;
    await Catalogo.findOneAndDelete({ nombre: nombre });
    res.status(200).send('Producto eliminado correctamente');
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
    res.status(500).send('Error interno del servidor');
  }
};

router.put('/:nombre', async (req, res) => {
  try {
    const { nombre } = req.params;
    const { nuevoPrecio, nuevaImagen } = req.body;
    // Actualiza el producto en la base de datos
    await Catalogo.updateOne({ nombre: nombre }, { precio: nuevoPrecio, imagen: nuevaImagen });
    res.status(200).send('Producto actualizado correctamente');
  } catch (error) {
    console.error('Error al actualizar el producto:', error);
    res.status(500).send('Error interno del servidor');
  }
});


