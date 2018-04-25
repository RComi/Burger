// database connection information
var mysql = require("mysql");

var connection = mysql.createConnection({
  port:  3350,
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db"
});

//states if error in connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
//export set to be used in other files
module.exports = connection;
