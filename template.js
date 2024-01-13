const express = require('express');
const products = require('./products.json');
const app = express();
app.set('view engine','pug');
//app.set('views','templates');
app.get('/hello',(req,res)=>{
    res.render('index');
});
app.get('/products',(req,res)=>{
    res.render('products',{products});
});
app.get('/welcome',(req,res)=>{
    res.render('welcome',{title:"Hey",message:"Hello There..!"});
});
app.get('/home',(req,res)=>{
    res.render('home',{title:"Home Page"});
});
app.get('/about',(req,res)=>{
    res.render('about',{title:"About Page"});
});
app.listen(5000,()=>{
    console.log("Server Started");
});