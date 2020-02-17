const express =require('express');
const app= express();
app.listen(5000,()=>{
	console.log("Server Started at port no 5000");
})

/*app.get('/hello',(request,response)=>{
	response.send("<h1>Hello Node/Express JS</h1>");
});*/

const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/',(request, response)=>{
	var d=new Date();
	response.render('Index',{'date': d}); //1) Location 2) Extension
})