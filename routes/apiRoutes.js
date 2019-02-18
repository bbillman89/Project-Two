
 db = require("../models");


module.exports = function(app,db) {
  
  

  app.get("api/users", function(req, res) {
    db.userLogin.findAll({
      userName: req.body.userName,
      password: req.body.password
    }).then(function(result) {
      res.json(result);
      console.log(`get user ${userLogin.userName},with id ${userLogin.password} `)
    });
  });

  // Create a new example
  app.post("api/users", function(req, res) {
    // db.patient.create(req.body).then(function(db) {
    //   res.json(db);
    db.userLogin.create({  
      userName: 'dmmclaughlin',
      password: 'mypassword'
    })
    .then(function(db) {
      res.json(db);
      console.log(db.userLogin);
      
    });
      
    });
  // });
  
  // Delete an example by id
  app.delete("/patient/:id", function(req, res) {
    db.patient.destroy({ where: { id: req.params.id } }).then(function(db) {
      res.json(db);
    });
  });
};
