const http = require('http');

const server = http.createServer((req,res) => {
    res.writeHead(200, {'content-type':'text/html'});
    res.write("<h1>Welcome From Server</h1>");
    res.end();
});

server.listen(5000,(err) => {
    if(err) {
        console.log("Error while starting server");
    } else {
        console.log("Server started on Port 5000");
    }
})

//check http://localhost:5000