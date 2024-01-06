const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res) => {
    res.writeHead(200, {'content-type':'text/html'});
    const url = req.url;
    if (url === '/home') {
        res.end("<h1>Welcome From Home Page</h1>");
    } else if (url === '/about') {
        sendResponseFromFile('./pages/about.html', res);
    } else if (url === '/contact') {
        sendResponseFromFile('./pages/contact.html', res);
    } else {
        sendResponseFromFile('./pages/index.html', res);
    }
});

const sendResponseFromFile = (file,res) => {
    fs.readFile(file, (err, data)=>{
        if(err){
            res.end("Error occured " + err);
        }
        res.end(data);
    });
}
server.listen(5000,() => {
    console.log("Server is listening on Port 5000");
});

//check http://localhost:5000