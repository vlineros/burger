var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var handleBarObject = {
      burgers: data
    };
    console.log(handleBarObject);
    res.render("index", handleBarObject);
  });
});

// need to add new burger_name to table burgers (all other columns auto-populate)

router.post("/api/burgers", function(req, res) {
  burger.insertOne([req.body.burgerName], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// need to update devoured column in table burgers

router.put("/api/burgers/:id", function(req, res) {
  burger.updateOne(req.params.id, true, function() {
    res.status(200).end();
  });
});

module.exports = router;
