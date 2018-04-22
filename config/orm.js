var connection = require("../config/connection.js");

var orm = {
  // select all method with a call back at the end
  selectAll: function() {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString , function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  // insert One method 
  insertOne: function() {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  // update
  updateOne: function() {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
