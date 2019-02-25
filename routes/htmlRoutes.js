var db = require("../models");

var path = require("path");

module.exports = function (app) {

  //Load login page
  app.get("/", function (req, res) {
    res.render("login")
  })

/*
  app.get("/results", function(req, res){
    res.render("results")
  })
  */

  // Load index page
  app.get("/dashboard", function(req, res) {
    db.Patient.findAll({}).then(function(dbPatients) {
      res.render("index", {
         patients: dbPatients
       })
     });
  });
  

  app.get("/dashboard/:last_name", function(req, res) {
    db.Patient.findOne({ where: { last_name: req.params.last_name } }).then(function(dbPatients) {
      // console.log(dbPatients);
      res.render("index", {
        patients: dbPatients
      })
    });
  });
  
  

    app.get("/results", function(req, res){
      db.Patient.findAll({}).then(function(dbPatients) {
        res.render("results", {
          patients: dbPatients
        })
      });
  });
  app.get("/aResults", function (req, res) {
    db.antigen.findAll({}).then(function (dbAntigen) {
      // console.log("dmm" + dbAntigen);
      res.render("results", {
        antigens: dbAntigen
      })
    });
  });
  app.get("/dResults", function (req, res) {
    db.dilution.findAll({}).then(function (dbDilution) {
      // console.log("dmm" + dbDilution);
      res.render("results", {
        dilutions: dbDilution
      })
    });
  });

  app.get("/results/:last_name", function(req, res) {
    db.Patient.findOne({ where: { last_name: req.params.last_name  } }).then(function(dbPatients) {
      // console.log(dbPatients);
      res.render("results", {
        patients: dbPatients
      })
    });
  });
  

  app.get("/aResults/:patient_id", function(req, res) {
    db.antigen.findOne({ where: { patient_id: req.params.patient_id } }).then(function(dbAntigen) {
      console.log("dmm" + dbAntigen);
      res.render("results", {
        antigens: dbAntigen
      })
    });
  });
  app.get("/dResults/:patient_id", function(req, res) {
    db.dilution.findOne({ where: { patient_id: req.params.patient_id } }).then(function(dbDilution) {
      console.log("dmm" + dbDilution);
      res.render("results", {
        dilutions: dbDilution
      })
    });
  });

  app.get("/results", function (req, res) {
    res.render("results")
  })

  app.get('/dashboard', function(req, res){
    res.render("index");
  });



  //   app.get("/test", function(req, res) {
  //     res.sendFile(path.join(__dirname, "../public/test.html"));
  //   });
  // //join antigens to patient
  //   app.get("/authors", function(req, res) {
  //     res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  //   });
};
