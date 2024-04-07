const mongoose = require("mongoose")

const catalogoShema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    imagen: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("catalogo", catalogoShema)