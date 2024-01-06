const url = require('url');
const str = 'https://www.example.com:8080/product/catalogue?orderId=1010&orderNo=ONDC777';

var myurl = url.parse(str, true);
var params = myurl.query;

function parseUrl() {
    return `Protocol: ${myurl.protocol} \r
    Host: ${myurl.host} \r
    Port: ${myurl.port} \r
    Path: ${myurl.path} \r
    Search: ${myurl.search} \r
    Param1: ${params.orderNo}`;
}

console.log(parseUrl());

//Event Loop
const url1 = "https://jsonplaceholder.typicode.com/users";

const mypromise1 = fetch(url1);

mypromise1
.then((resp)=>resp.json())
.then((json)=>{
  let data='';
  json.forEach(element => {
    data+=`<tr>
      <td>${element.id}</td>
      <td>${element.name}</td>
      <td>${element.email}</td>
      <td>${element.username}</td>
    </tr>`;
  });

  console.log(data);
})
.catch((err)=>console.log(err));