var db = require("../models");

var path = require("path");

module.exports = function(app) {

  // Load index page
  app.get("/findAll", function(req, res) {
    db.Patient.findAll({}).then(function(dbPatients) {
      res.render("index1",  {
        msg: "Patient Information",
        patients: dbPatients
      });
    });
  });
      
  // Load example page and pass in an example by id
  app.get("/patient/:last_name", function(req, res) {
    
    db.Patient.findOne({ where: { last_name: req.params.last_name } }).then(function(dbPatients) {
      console.log(dbPatients);
    
      res.render("index1", {
        patients: dbPatients
      });
    });

  });
  app.get('/', function(req, res){
    res.render("/findAll");
});

  app.get("/test", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/test.html"));
  });
};
