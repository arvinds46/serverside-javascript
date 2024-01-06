const jsonObj = {id:1,name:"Alex",email:"alex@gmail.com"};
console.log(jsonObj);
//Local Storage
const jsonStr = JSON.stringify(jsonObj);
console.log(jsonStr);

const myJsonStr = '{"pid":1,"pname":"Pencil","price":46}';
console.log(myJsonStr);
console.log(JSON.parse(myJsonStr));