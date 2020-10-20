const express = require("express");
const ejs = require('ejs');
const path = require('path');
const bodyParser = require("body-parser");
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload')

var app = express();

// middlware config 

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view enging','ejs');
app.set('viewe',path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'/public')));
app.use(fileUpload());

const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
	res.render('index.ejs')
})



app.listen(PORT,()=>{
    console.log(`Listening to PORT ${PORT}`);
});

