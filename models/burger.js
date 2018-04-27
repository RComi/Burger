var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burger", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(vals, cb) {
    orm.insertOne("burger", "burger_name", vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(val, cb) {
    orm.updateOne("burger", val, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
