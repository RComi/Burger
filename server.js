//express and body-parser setup required
var express = require("express");
var bodyParser = require("body-parser");

//create port for localhost
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

// Serve static content for the app from the "public" directory in the application directory.
// Gives the ability to utilize files within public
app.use(express.static("public"));

// imported routes for server access
var routes = require("./controllers/burgersController.js");


app.use("/", routes);

//listening port
app.listen(PORT);
console.log("listening on port: " + PORT);
