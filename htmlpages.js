const express = require('express');

const app = express();

app.use("/expressapp", express.static("files")); //Middleware

app.get("/news",(req,res)=>{
    //Give Absolute Path
    res.sendFile(__dirname + "/files/news.html",(err)=>{
        if(err){
            console.log("Error while sending HTML response", err);
        } else {
            console.log("HTML Response sent");
        }
    });
});

app.listen(5000,()=>{
    console.log("Server Started");
});