//require orm to get function for database queries
var orm = require("../config/orm.js");
//set up methods that can be used by burger
var burger = {
  //gets all the rows of burgers from the db
  selectAll: function(cb) {
    orm.selectAll("burger", function(res) {
      cb(res);
    });
  },
  //inserts a new burger to the database
  //vals is the burger name that the user will input, this is provideded
  //by the order function in the scripts section of index.handlebars
  insertOne: function(vals, cb) {
    orm.insertOne("burger", "burger_name", vals, function(res) {
      cb(res);
    });
  },
  //updates an exisiting burger in the database to change its devour value
  //val is the id of the burger to be updated, this is provided by the devour 
  //button val in the index.handlebars
  updateOne: function(val, cb) {
    orm.updateOne("burger", val, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
