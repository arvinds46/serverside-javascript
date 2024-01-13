const http = require('http');
let tasks = [];

http.createServer((req,res)=>{    
    if (req.url=='/tasks' && req.method==='POST') {
        try {
            let body = '';
            req.on('data',(chunk)=>{
                body+=chunk.toString();
            });
            req.on('end',async ()=>{
                let task=await JSON.parse(body);
                task.id = Date.now();
                task.status = "Pending";
                tasks.push(task);
                res.end('Task inserted Successfully');
            });
        } catch (error) {
            res.end("Error while Inserting");
        }
    }
    if(req.url=='/tasks' && req.method==='GET') {
        res.writeHead(200, {'content-type':'text/json'});
        res.end(JSON.stringify(tasks));
    }
    if (req.url.match(/\/tasks\/([0-9]+)/) && req.method=='GET') {
        try {
            const id = req.url.split("/")[2];
            const found = tasks.find((item) => item.id == id);
            if (found != undefined)
                res.end(JSON.stringify(found));
            else
                res.end("No Task Available");
        } catch (error) {
            res.end("Error Occured..");
        }
    }
    if (req.url.match(/\/tasks\/([0-9]+)/) && req.method=='DELETE') {
        try {
            const id = req.url.split("/")[2];
            tasks= tasks.filter((item)=>item.id!=id)
            res.end("Task Deleted Successfully");
        } catch (error) {
            res.end("Error Occured..");
        }
    }
    if (req.url.match(/\/tasks\/([0-9]+)/) && req.method=='PUT') {
        try {
            const id = req.url.split("/")[2];
            const taskIndex = tasks.findIndex((item) => item.id == id);  
            let data = '';
            req.on('data',(chunk)=>{
                data += chunk.toString();
            });
            req.on('end',()=>{
                let task=JSON.parse(data);
                tasks[taskIndex].status = task.status;
                //tasks.push(task);
                res.end('Task updated Successfully');
            });
        } catch (error) {
            res.end("Error Occured..");
        }
    }
}).listen(5000,()=>{
    console.log("Server Started");
})