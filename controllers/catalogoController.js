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


