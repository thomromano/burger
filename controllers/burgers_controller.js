// Inside the burgers_controller.js file, import the following:

// Express
// burger.js
var express = require("express");

// Create the router for the app, and export the router at the end of your file.

var router = express.Router();
var burger = require("../models/burger.js");


router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.all(function(burgerData) {
    res.render("index", { burger_data: burgerData });
  });
});


router.post("/burgers/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});


router.put("/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    
    console.log(result);
    
    res.sendStatus(200);
  });
});

module.exports = router;

