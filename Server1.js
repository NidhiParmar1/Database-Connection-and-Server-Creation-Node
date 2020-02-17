const express =require('express');
const app= express();
app.listen(5000,()=>{
	console.log("Server Started at port no 5000");
})

const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/',(request, response)=>{
	
	response.render('Form'); //1) Location 2) Extension
})

var bodyparser=require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended:true
}))
const con=require('./DBConnection')
const mysql=require('mysql')

app.post('/',(request,response)=>{
  var empid=request.body.eid;
  var empname=request.body.Name;
  var empsalary=request.body.Salary;
    
var sql='insert into employee(eid,ename,salary)values(?,?,?)';
var data=[empid,empname,empsalary]
var sql=mysql.format(sql,data);
con.query(sql,(err)=>{
if(err) throw err;
else
response.render('Form', {'msg':'Data Inserted Successfully'});
})
})
