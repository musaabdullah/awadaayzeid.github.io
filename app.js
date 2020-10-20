const express = require("express");
const ejs = require('ejs');
const path = require('path');
const bodyParser = require("body-parser");
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload')

const dbConfig = require('./config.js');
const router = require('./routes/pages.routes');
const post = require('./routes/post.routes.js');
const news = require('./routes/news.routes.js')
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


mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
  
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.use(news);
app.use(post);
app.use('/',router);




app.listen(PORT,()=>{
    console.log(`Listening to PORT ${PORT}`);
});

