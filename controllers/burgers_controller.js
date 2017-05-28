var express = require("express");
var router = express.Router();
var Burger = require("../models/burger.js");
var db = require("../models");

router.get("/", function(req, res) {
  var hbsObject = {undevouredBurgers:[], devouredBurgers:[]};
  db.Burger.findAll({where: {devoured: false}})
  .then(function(data1) {
    hbsObject.undevouredBurgers = data1;
    db.Burger.findAll({where: {devoured: true}})
    .then(function(data2) {
      hbsObject.devouredBurgers = data2;
      res.render("index", hbsObject);
    });
  });
});

//add new burger using post
router.post("/add", function(req, res) {
  db.Burger.create({burger_name: req.body.burgerName})
  .then(function() {
    res.redirect("/");
  });
});

//devour burger using put
router.put("/update/:id", function(req, res) {
  db.Burger.update(
    {
      devoured: true
    }, {
    where: {
      id: req.params.id
    }
  }).then(function(){
      res.redirect("/");
  });
});

//delete burger using delete method
router.delete("/delete/:id", function(req, res) {
  db.Burger.destroy({
    where: {
      id: req.params.id
    }
  }).then(function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
