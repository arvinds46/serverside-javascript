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
        console.log("Connected");
    }
});

const insertData = (emp_no,first_name,last_name,sex)=>{
    const sql = "insert into employees (emp_no,first_name,last_name,sex) values (?,?,?,?)";
    const values = [emp_no,first_name,last_name,sex];
    connection.query(sql,values,(err,result)=>{
        if(err) {
            console.log(err);
            return;
        }
        console.log(`${result.affectedRows} Row Inserted, Inserted Id: ${result.insertId}`);
    });
}

//insertData('10051','Arvind','B S','M');

const fetchData=()=>{
    const sql = "select * from employees";
    connection.query(sql,(err,data)=>{
        if(err) {
            console.log(err);return;
        }

        data.forEach((item)=>{
            console.log(`------------EmpNo${item.emp_no}------------`);
            console.log(`Name: ${item.first_name} ${item.last_name}`);
            console.log(`Sex: ${item.sex}`);
        });
    });
}

//fetchData();

const updateData = (emp_no,first_name,last_name,sex)=>{
    const sql = "update employees set first_name =?,last_name=?,sex=? where emp_no = ?";
    const values = [first_name,last_name,sex,emp_no];
    connection.query(sql,values,(err,result)=>{
        if(err) {
            console.log(err);
            return;
        }
        console.log(`${result.affectedRows} Row Updated`);
    });
}

updateData('10051', 'Arvind','B Shivaram','M');

