const express= require('express');
const app = express();
app.listen(5000, ()=>
	{ 
		console.log("server strated at Port No.5000");
})

const path=require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var d= new Date();
app.get('/createConnection', (request, response)=>
{
	response.render('Form', {date: d} );
})

const bodyparser= require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended:true
}))

app.use(express.static(path.join( __dirname, 'views')));

app.post('/createConnection', (request,response)=>
{
	var empId= request.body.eid;
	var Name= request.body.Name;
	var empSalary= request.body.Salary;
	console.log('empId');
console.log('Name');
console.log('empSalary');
})

app.get('/',(request,response)=>{
	response.render('TryLogin')
})


