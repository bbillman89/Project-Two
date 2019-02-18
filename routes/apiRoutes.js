
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
      
  
  /*db.userLogin.create({  
    userName: 'Loren',
    password: 'admin'
  })
  .then(newUser => {
    console.log(`New user ${userLogin.userName}, with id ${userLogin.password} has been created.`);
  });
  */


  app.get("/api/patient", function(req, res) {
    console.log(db.Patient);
    db.Patient.findAll({}).then(function(db) {
      res.json(db);
    });
  });
  app.get("/api/login", function(req, res) {
    console.log(db.userLogin);
    db.userLogin.findAll({}).then(function(db) {
      res.json(db);
    });
  });

  // Create a new example
  app.post("/api/patient", function(req, res) {
    //console.log(req.body);
    db.Patient.create({
      patient_id: req.body.patient_id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      address: req.body.address,
      sex: req.body.sex,
      birth: req.body.birth,
      phone: req.body.phone
    }).then(function(db) {
        res.json(db);
        //res.send("test complete");
        
    });
  });
  
  // Delete an example by id
  app.delete("api/patient/:id", function(req, res) {
    db.patient.destroy({ where: { id: req.params.id } }).then(function(db) {
      res.json(db);
    });
  });
};
