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
  burger.insertOne([req.body.vals], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// router.put("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update(
//     {
//       sleepy: req.body.sleepy
//     },
//     condition,
//     function(result) {
//       if (result.changedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     }
//   );
// });

// Export routes for server.js to use.
module.exports = router;
