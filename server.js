var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;


var index = require('./routes/index');

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

//Set Static folder
app.use(express.static(path.join(__dirname, 'client')));

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//Routes
app.use('/', index);
app.listen(port, function(){
   console.log('listening on port ' + port); 
});