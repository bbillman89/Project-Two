var db = require("../models");

module.exports = function(app) {
  
  db.userLogin.create({  
    userName: 'Loren',
    password: 'admin'
  })
  .then(newUser => {
    console.log(`New user ${userLogin.userName}, with id ${userLogin.password} has been created.`);
  });

  app.get("/patient", function(req, res) {
    db.patient.findAll({}).then(function(db) {
      res.json(db);
    });
  });

  // Create a new example
  app.post("/patient", function(req, res) {console.log(req);
    // db.patient.create(req.body).then(function(db) {
    //   res.json(db);
      res.send("test complete");
    });
  // });
  
  // Delete an example by id
  app.delete("/patient/:id", function(req, res) {
    db.patient.destroy({ where: { id: req.params.id } }).then(function(db) {
      res.json(db);
    });
  });
};
