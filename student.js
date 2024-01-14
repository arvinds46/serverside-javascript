const express = require('express');
let students = [];
const app = express();
app.use(express.urlencoded({ extended: false }));
app.set('view engine','pug');
app.set('views','templates');
app.get('/',(req,res)=>{
    res.render('index');
}); 
app.get('/add',(req,res)=>{
    res.render('add');
}); 
app.post("/api/students",(req,res)=>{
    const {fname,lname,cgpa} = req.body;
    if (!fname || !lname || !cgpa) {
        return res.status(200).json({message:"All Fields are mandatory"});
    }
    students.push({id: Date.now(), fname, lname, cgpa});
    return res.status(200).json({message: "Student Management is Successful!"});
});
app.get("/api/students",(req,res)=>{
    return res.render('getAll',{students});
});
app.get("/api/students/:id",(req,res)=>{
    const id = req.params.id;
    const found = students.find((item) => item.id == id);
    if (found) {
        return res.status(200).json({message:"Student Found", student:found});
    }
    return res.status(404).json({message: "Student Not Found with Id " + id});
});
app.get("/api/student/topper",(req,res)=>{
    let topper = students[0];
    for (let i = 1; i < students.length; ++i) {
        if (students[i].cgpa > topper.cgpa) {
            topper = students[i];
        }
    }
    return res.render('topper',{topper}); 
});
app.listen(5000,()=>{
    console.log("Server Started");
});