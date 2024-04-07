const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const catalogoRoute = require("./routes/catalogo")

const app = express();
const port = process.env.PORT || 2000;

//middleware
app.use(express.json())
app.use("/api", catalogoRoute)

//route
app.get("/", (req, res) => {
    res.send("Bienvenido a mi API");
})

//mongoose connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Conexion a mongo Atlas"))
.catch((error) => console.error(error));

app.listen(port, () => console.log("Servidor en la puerta", port));