const http = require('http');
const products = require('./products.json');

const server = http.createServer((req,res) => {
    res.writeHead(200, {'content-type':'text/html'});
    if (req.url == '/products') {
        let htmlResp = '';
        for (let p of products) {
            htmlResp += `<h1>${p.id}: ${p.name}</h1>
                        <h3>Price: ${p.price}</h3>
                        <h3>Rating: ${p.rating}</h3>
                        <hr />`;
        }
        res.end(htmlResp);
    } else if (req.url == '/products/1') {
        const p = products[0];
        res.end(`<h1>${p.id}: ${p.name}</h1>
        <h3>Price: ${p.price}</h3>
        <h3>Rating: ${p.rating}</h3>
        <hr />`);
    }
});

server.listen(5000,(err) => {
    if(err) {
        console.log("Error while starting server");
    } else {
        console.log("Server started on Port 5000");
    }
})

//check http://localhost:5000