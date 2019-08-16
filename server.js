var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var friendsList = require("./app/data/friends")

var app = express();
var PORT = process.env.PORT || 8080; 

// parse application
app.use(bodyParser.urlencoded({ extended: true }));
 
// parse application/json
app.use(bodyParser.json());
// app.use(bodyParser.raw());
// app.use(bodyParser.text());

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});