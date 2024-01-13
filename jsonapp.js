const express = require('express');
const products = require('./products.json');
const app = express();

app.get("/api/products",(req,res)=>{
    return res.status(200).json({message:"All Products", catalogue:products});
});

app.get("/api/products/:id",(req,res)=>{
    const id = req.params.id;
    const found = products.find((item) => item.id == id);
    if (found) {
        return res.status(200).json({message:"Catalogue Found", catalogue:found});
    }
    return res.status(404).json({message: "Catalogue Not Found with Product " + id});
});

app.listen(5000,()=>{
    console.log("Server Started");
});