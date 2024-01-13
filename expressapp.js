const express = require('express');

const app = express();
app.use(express.json()); //JSON Parser //Middleware
app.get("/",(req,res)=>{
    res.status(200).send("Get Request Received");
});
app.post("/",(req,res)=>{
    console.log(req.body);
    res.status(200).send("Post Request Received");
});
app.get("/:id",(req,res)=>{
    const id = req.params.id;
    res.status(200).send("Get By ID Request Received " + id);
});
app.put("/:id",(req,res)=>{
    console.log(req.body);
    const id = req.params.id;
    res.status(200).send("Put By ID Request Received " + id);
});
app.delete("/:id",(req,res)=>{
    const id = req.params.id;
    res.status(200).send("Delete By ID Request Received " + id);
});
/*app.use("/",(req,res)=>{
   // res.status(200).send("Hello World..!");
    res.status(400).json({message:"Error while accessing the Path"});
});*/

app.listen(5000,()=>{
    console.log("Server Listening on PORT 5000");
});