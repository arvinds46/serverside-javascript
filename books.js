const http = require('http');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    user:"arvind",
    password:'MOZUMANS46',
    database:'replit'
});

connection.connect((err) => {
    if(err) {
        console.log(err);
    } else {
       // console.log("Connected");
    }
});

const fetchData=(res)=>{
    const sql = "select * from books";
    connection.query(sql,(err,data)=>{
        if(err) {
            console.log(err);return;
        }
        res.end(JSON.stringify(data));
    });
}

const viewData=(res, id)=>{
    const sql = "select * from books where id = ?";
    const values = [id];
    connection.query(sql,values, (err,data)=>{
        if(err) {
            console.log(err);return;
        }
        res.end(JSON.stringify(data));
    });
}

const updateData = (res, genre, id)=>{
    const sql = "update books set genre =? where id = ?";
    const values = [genre,id];
    connection.query(sql,values,(err,result)=>{
        if(err) {
            console.log(err);
            return;
        }
        res.end(`${result.affectedRows} Row Updated`);
    });
}

let books = [];

http.createServer((req,res)=>{    
    if (req.url=='/books' && req.method==='POST') {
        try {
            let body = '';
            req.on('data',(chunk)=>{
                body+=chunk.toString();
            });
            req.on('end',async ()=>{
                let book=await JSON.parse(body);
                books.push(book);
                res.end('Book inserted Successfully');
            });
        } catch (error) {
            res.end("Error while Inserting");
        }
    }
    if(req.url=='/books' && req.method==='GET') {
        res.writeHead(200, {'content-type':'text/json'});
        fetchData(res);
    }
    if (req.url.match(/\/books\/([0-9]+)/) && req.method=='GET') {
        res.writeHead(200, {'content-type':'text/json'});
        const id = req.url.split("/")[2];
        viewData(res,id);
    }
    if (req.url.match(/\/books\/([0-9]+)/) && req.method=='DELETE') {
        try {
            const id = req.url.split("/")[2];
            books= books.filter((item)=>item.id!=id)
            res.end("Book Deleted Successfully");
        } catch (error) {
            res.end("Error Occured..");
        }
    }
    if (req.url.match(/\/books\/([0-9]+)/) && req.method=='PUT') {
        try {
            const id = req.url.split("/")[2];
            const bookIndex = books.findIndex((item) => item.id == id);  
            let data = '';
            req.on('data',(chunk)=>{
                data += chunk.toString();
            });
            req.on('end',()=>{
                let book=JSON.parse(data);
                updateData(res, book.genre, id);
                //res.end('Book updated Successfully');
            });
        } catch (error) {
            res.end("Error Occured..");
        }
    }
}).listen(5000,()=>{
    console.log("Server Started");
})