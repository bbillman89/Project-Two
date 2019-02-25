
var db = require("../models");


module.exports = function (app, ) {

  app.post("/api/login", function (req, res) {
    db.userLogin.create({
      userName: req.body.userName,
      password: req.body.password
    })
      .then(newUser => {
        res.json(newUser);
      });
  });

  app.get("/api/login", function (req, res) {
    db.userLogin.findAll({}).then(db => {
      res.json(db);
    });
  });

  app.get("/api/patient", function (req, res) {
    db.Patient.findAll({}).then(patients => {
      res.json(patients);
    });
  });
  app.get("/api/patient/:id", function (req, res) {
    db.Patient.findOne({ where: { id: req.params.id } }).then(findPatient => {
      res.json(findPatient);
    });
  });
  //added
  app.get("/api/antigen", function (req, res) {
    db.antigen.findAll({}).then(antigens => {
      // console.log("dm" + antigens);
      res.json(antigens);
    });
  });
  //added 
  app.get("/api/antigen/:patient_id", function (req, res) {
    db.antigen.findOne({ where: { patient_id: req.params.patient_id } }).then(findAntigen => {
      // console.log("dm" + findAntigen);
      res.json(findAntigen);
    });
  });
  //added
  app.get("/api/dilution", function (req, res) {
    db.dilution.findAll({}).then(dilutions => {
      console.log("dm" + dilutions);
      res.json(dilutions);
    });
  });
  //added
  app.get("/api/dilution/:patient_id", function (req, res) {
    db.dilution.findOne({ where: { patient_id: req.params.patient_id } }).then(findDilution => {
      // console.log("dm" + findDilution);
      res.json(findDilution);
    });
  });

  app.post("/api/patient", function (req, res) {
    db.Patient.create({
      patient_id: req.body.patient_id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      address: req.body.address,
      sex: req.body.sex,
      birth: req.body.birth,
      phone: req.body.phone
    }).then(newPatients => {
      res.json(newPatients);

    });
  });

  app.delete("/api/patient/:patient_id", function (req, res) {
    db.Patient.destroy({ where: { patient_id: req.params.patient_id } }).then(deletePatient => {
      res.json(deletePatient);
    });
  });

  app.delete("/api/antigen", function (req, res) {
    var lastEntry = "";
    db.antigen.max("createdAt").then(max => {
      lastEntry = max;
      return lastEntry;
    }).then(entry => {
      db.antigen.destroy({ where: { createdAt: entry } }).then(deleteAntigen => {
        res.json(deleteAntigen);
      });
    });
  })

  app.delete("/api/dilution", function (req, res) {
    var lastEntry = "";
    db.dilution.max("createdAt").then(max => {
      lastEntry = max;
      return lastEntry;
    }).then(entry => {
      db.dilution.destroy({ where: { createdAt: entry } }).then(deleteDilution => {
        res.json(deleteDilution);
      });
    });
  })

  // PUT route for updating patient information. We can get the updated  data from req.body
  app.put("/api/patient/:patient_id", function(req, res) {
    db.Patient.update({
    
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      address: req.body.address,
      sex: req.body.sex,
      birth: req.body.birth,
      phone: req.body.phone
    }, {
      where: {
        patient_id: req.body.patient_id
      }
    }).then(updatePatient => {
      res.json(updatePatient);
        // console.log(updatePatient);
    });
  });
  
};
