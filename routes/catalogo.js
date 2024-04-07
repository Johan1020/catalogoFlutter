const express = require("express");
const catalogoShema = require("../models/catalogo");

const router = express.Router();

// create catalogo
router.post("/catalogo",(req,res)=>{
    const catalogo = catalogoShema(req.body);
    catalogo
    .save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});


// get all catalogo
router.get("/catalogo",(req,res)=>{
    catalogoShema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});


// get a user
router.get("/catalogo/:id",(req,res)=>{
    const {id} = req.params;
    catalogoShema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});


// delete a catalogo
router.delete("/catalogo/:id",(req,res)=>{
    const {id} = req.params;
    catalogoShema
    .deleteOne({_id:id})
    .then((data)=> res.json(data))
    .catch((error)=>res.json({message:error}));
});

// update catalogo
router.put("/catalogo/:id",(req,res)=>{

    const {id} = req.params;
    const {nombre,precio,imagen} = req.body;
    catalogoShema
    .updateOne({_id:id},{$set:{nombre,precio,imagen}})
    .then((data)=> res.json(data))
    .catch((error) => res.json({message:error}))
});

module.exports=router;