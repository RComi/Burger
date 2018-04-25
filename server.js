var express = require ('express');
var bodyParser = require ('body-parser');

var app = express();

app.use(express.static.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));











//listening port 
var PORT = process.env.PORT || 3350;
    app.listen(PORT);
    console.log("listening on port: " + PORT);