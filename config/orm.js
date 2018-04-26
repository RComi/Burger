// O.R.M. where the functions takes methods and
var connection = require("./connection.js");

var orm = {
  // select all method with a call back at the end
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // insert One method
  insertOne: function(table, cols, vals, cb) {
    var queryString =
      "INSERT INTO " + table + "(" + cols + ") VALUES ('" + vals + "')";
    console.log(vals);
    connection.query(queryString, [vals], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;
