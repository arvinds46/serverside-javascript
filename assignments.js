const http = require('http');
//const assignments = require('./assignments.json');
const fs = require('fs')
http.createServer((req,res) => {
    res.writeHead(200, {'content-type':'text/html'});
    if (req.url == '/assignments') {
        let htmlResp = '';
        fs.readFile('./assignments.json', 'utf8', (err, data) => {
            if (err) {
                console.log(`Error reading file: ${err}`)
            } else {
                
                const assignments = JSON.parse(data);
                console.log(assignments);
                assignments.forEach(p => {
                    htmlResp += `<h1>${p.id}: ${p.title}</h1>
                                    <h3>Description: ${p.description}</h3>
                                    <h3>Due Date: ${p.dueDate}</h3>
                                    <hr />`;
                });
                res.end(htmlResp);
            }
        });
    } 
}).listen(5000,() => {
    console.log("Server started");
});