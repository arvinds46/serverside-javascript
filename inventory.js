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

const insertData = (productname,price,qty)=>{
    const sql = "insert into product (productname,price,qty) values (?,?,?)";
    const values = [productname,price,qty];
    connection.query(sql,values,(err,result)=>{
        if(err) {
            console.log(err);
            return;
        }
        console.log(`${result.affectedRows} Row Inserted, Inserted Id: ${result.insertId}`);
    });
}

/*insertData('LENOVO',3000.00,10);
insertData('HP',2500.00,24);
insertData('ACER',3000.00,33);
insertData('DELL',2400.00,46);*/
const viewData=(productname)=>{
    const sql = "select * from product where productname = ?";
    const values = [productname];
    connection.query(sql,values, (err,data)=>{
        if(err) {
            console.log(err);return;
        }
        data.forEach((item)=>{
            console.log(`------------ID${item.id}------------`);
            console.log(`Product Name: ${item.productname}`);
            console.log(`Price: ${item.price}`);
            console.log(`Quantity: ${item.qty}`);
        });
    });
}

viewData('DELL');

const updateData = (productname,price,qty)=>{
    const sql = "update product set price =?,qty=? where productname = ?";
    const values = [price,qty,productname];
    connection.query(sql,values,(err,result)=>{
        if(err) {
            console.log(err);
            return;
        }
        console.log(`${result.affectedRows} Row Updated`);
    });
}

//updateData('DELL',3000.00,50);

const fetchData=()=>{
    const sql = "select * from product";
    connection.query(sql,(err,data)=>{
        if(err) {
            console.log(err);return;
        }

        data.forEach((item)=>{
            console.log(`------------ID${item.id}------------`);
            console.log(`Product Name: ${item.productname}`);
            console.log(`Price: ${item.price}`);
            console.log(`Quantity: ${item.qty}`);
        });
    });
}

fetchData();