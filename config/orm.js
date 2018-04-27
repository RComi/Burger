// O.R.M. where the functions takes methods and
var connection = require("./connection.js");

var orm = {
  // select all method with a call back at the end
  selectAll: function(tableInput, cb) {
    //sql query to be executed to retrieve all the burgers from the db
    var queryString = "SELECT * FROM " + tableInput + ";";
    //connects to the db and executes the query based on passed values
    //if there is an error then it will error out else it will call back
    //the data
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // insert One burger method method
  insertOne: function(table, cols, vals, cb) {
    //sql query to be executed to insert a new burger into the db
    var queryString =
      "INSERT INTO " + table + "(" + cols + ") VALUES ('" + vals + "')";
    //connects to the db and executes the query based on passed values
    //if there is an error then it will error out else it will call back
    //the data
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  //updates an existing burger when it is devoured
  updateOne: function(table, val, cb) {
    //sql query to be executed to update an exisitng burger into the db
    var queryString = "UPDATE " + table + " SET devoured = 1 WHERE id = " + val;

    //connects to the db and executes the query based on passed values
    //if there is an error then it will error out else it will call back
    //the data
    connection.query(queryString, val, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;
