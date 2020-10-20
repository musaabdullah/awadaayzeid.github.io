const express = require("express");
const ejs = require('ejs');
const path = require('path');

const logger = require('morgan');


var app = express();

// middlware config 

app.use(logger('dev'));


app.set('view enging','ejs');
app.set('viewe',path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'/public')));


const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
	res.render('index.ejs')
})



app.listen(PORT,()=>{
    console.log(`Listening to PORT ${PORT}`);
});

