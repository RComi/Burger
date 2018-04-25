// O.R.M. where the functions takes methods and 
var connection = require("../config/connection.js");

var orm = {
  // select all method with a call back at the end
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput;

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  // insert One method 
  insertOne: function(table, column, burgerEnter, cb) {
    var queryString = "INSERT INTO" + table + " ";
    connection.query(queryString, value, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  // update row to place into the table and columns
  updateInfo: function() {
    var queryString = "UPDATE" + table + "SET";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

// delete row to in the table and columns
  deleteInfo: function() {
    var queryString = "UPDATE" + table + "SET";
    connection.query(queryString, function(err, result) {
     if (err) throw err;
     cb(result);
    });
  }
};

module.exports = orm;
