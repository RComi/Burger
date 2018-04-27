var express = require("express");
var router = express.Router();
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  var burgerInfo = {
    burger: []
  };
  burger.selectAll(function(data) {
    for (var i = 0; i < data.length; i++) {
      burgerInfo.burger.push(data[i]);
    }
    res.render("index", burgerInfo);
  });
});

router.post("/api/burger", function(req, res) {
  console.log(req.body.name);
  console.log(req);
  burger.insertOne([req.body.name], function(result) {
    res.redirect("/");
  });
});

router.put("/api/burger/:id", function(req, res) {
  console.log(req.body.id);
  burger.updateOne(req.body.id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
