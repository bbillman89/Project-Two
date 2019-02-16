var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/patient", function(req, res) {
    db.patient.findAll({}).then(function(db) {
      res.json(db);
    });
  });

  // Create a new example
  app.post("/patient", function(req, res) {
    db.patient.create(req.body).then(function(db) {
      res.json(db);
    });
  });

  // Delete an example by id
  app.delete("/patient/:id", function(req, res) {
    db.patient.destroy({ where: { id: req.params.id } }).then(function(db) {
      res.json(db);
    });
  });
};
