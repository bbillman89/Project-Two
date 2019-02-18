
 db = require("../models");


module.exports = function(app,db) {
  
  

  // app.get("api/users", function(req, res) {
  //   db.userLogin.findAll({
  //     userName: req.body.userName,
  //     password: req.body.password
  //   }).then(function(result) {
  //     res.json(result);
  //     console.log(`get user ${userLogin.userName},with id ${userLogin.password} `)
  //   });
  // });

  // Create a new example
  app.post("api/users", function(req, res) {
    
    db.userLogin.create({  
      userName: req.body.userName,
      password: req.body.password
    })
    .then(newUser => {
      res.json(newUser);
      console.log(newUser);
    });
      
    });
      
  
  
  // Delete an example by id
  app.delete("api/patient/:id", function(req, res) {
    db.patient.destroy({ where: { id: req.params.id } }).then(function(db) {
      res.json(db);
    });
  });
};
