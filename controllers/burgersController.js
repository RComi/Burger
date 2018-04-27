//require express and router
var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

//gets method the default page and load the initial data from the db
router.get("/", function(req, res) {
  var burgerInfo = {
    burger: []
  };
  //function to get all the burgers from the database and
  //pass the burger information to the index page and then
  //loads the index page once the query is executed
  burger.selectAll(function(data) {
    for (var i = 0; i < data.length; i++) {
      burgerInfo.burger.push(data[i]);
    }
    res.render("index", burgerInfo);
  });
});

//post method to add a new burger to the database and reloads the page
router.post("/api/burger", function(req, res) {
  //function to insert the burger into the db provided the name
  //and will reload the page once the query is executed
  burger.insertOne([req.body.name], function(result) {
    res.redirect("/");
  });
});

//put method to update a burger based on the id in the database and passes a success status code
router.put("/api/burger/:id", function(req, res) {
  //function to update the burger given the id and the id exists in the db
  //and will pass back a success status code once the query is successfully executed
  //if it the id does not exist then changedRow will be 0 and it will give a 404 not found
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
