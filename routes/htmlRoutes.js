var db = require("../models");

var path = require("path");

module.exports = function(app) {

  // Load index page
  app.get("/findAll", function(req, res) {
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
      });
    });

  });

  app.get('/results', function(req, res){
    res.render("results");
});

  app.get('/login', function(req, res){
    res.render("login");
});
app.get('/dashboard', function(req, res){
  res.render("dashboard");
});



  app.get("/test", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/test.html"));
  });
};
