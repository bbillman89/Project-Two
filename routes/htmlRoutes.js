var db = require("../models");
var patientsPics = require("../public/patientPics.js");

module.exports = function (app) {
  // Load index page
  app.get("/findAll", function (req, res) {
    db.Patient.findAll({}).then(function (dbPatients) {
      res.render("index1", {
        msg: "Patient Information",
        patients: dbPatients
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/patient/:last_name", function (req, res) {

    db.Patient.findOne({ where: { last_name: req.params.last_name } }).then(function (dbPatients) {
      console.log(dbPatients);

      res.render("index1", {
        patients: dbPatients
      });
    });
  });

  // app.get('/', function (req, res) {
  //   res.render("/findAll");
  // });

  app.get("/findall", function (req, res) {
    
     image = res.json(patientsPics[0].photo
    );res.render("index1", {
      patient: image
    });
    console.log("line 37" + image);
  });
  // app.get("/patientPics1", function (req, res) {
  //   console.log("dm1");
  //   patientsPics.findOne(function (data) {
  //     var photo = {
  //       patientsPics: data

  //     };
  //     console.log(photo);
  //     res.json("index1", photo);
  //   });
  // });

}

