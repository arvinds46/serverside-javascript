const http = require('http');
const products = require('./products.json');
let users = [];

http.createServer((req,res)=>{    
    if(req.url=='/api/users' && req.method==='GET') {
        res.writeHead(200, {'content-type':'text/json'});
        res.end(JSON.stringify(users));
    }
    if (req.url=='/api/users' && req.method==='POST') {
        try {
            let body = '';
            req.on('data',(chunk)=>{
                body+=chunk.toString();
            })
            req.on('end',async ()=>{
                let user=await JSON.parse(body);
                users.push(user);
                res.end('User Registered Successfully');
            })
        } catch (error) {
            res.end("Error while Registering");
        }
    }
    if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method=='GET') {
        try {
            const id = req.url.split("/")[3];
            const found = users.find((item) => item.id == id);
            if (found != undefined)
                res.end(JSON.stringify(found));
            else
                res.end("No User Available")
        } catch (error) {
            res.end("Error Occured..")
        }
    }
    if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method=='DELETE') {
        try {
            const id = req.url.split("/")[3];
            users= users.filter((item)=>item.id!=id)
            res.end("User Deleted Successfully")
        } catch (error) {
            res.end("Error Occured..")
        }
    }
    if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method=='PUT') {
        //Update Logic
    }
}).listen(5000,()=>{
    console.log("Server Started");
})