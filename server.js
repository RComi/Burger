var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3350;

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// json parse
app.use(bodyParser.json());

// Handlebars setup required
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// imported routes for server access
var routes = require("./controllers/burgersController.js");

app.use("/", routes);

//listening port
app.listen(PORT);
console.log("listening on port: " + PORT);
