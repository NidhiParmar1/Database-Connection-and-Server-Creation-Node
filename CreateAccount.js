const express =require('express');
const app= express();
app.listen(5000,()=>{
	console.log("Server Started at port no 5000");
})

const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/createAccount',(request, response)=>{
	
	response.render('Account'); //1) Location 2) Extension
})

var bodyparser=require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended:true
}))
const con=require('./DBConnection')
const mysql=require('mysql')

app.post('/createAccount',(request,response)=>{
  var name=request.body.Name;
  var email=request.body.EmailId;
  var password=request.body.Password;
  console.log(name);
  console.log(email);
  console.log(password);
 
var sql='insert into account(ename,eid,pasword)values(?,?,?)';
var data=[name,email,password]
var sql=mysql.format(sql,data);

con.query(sql,(err)=>{
if(err) throw err;
else
response.render('Form', {'msg':'Data Inserted Successfully'});
})
})
