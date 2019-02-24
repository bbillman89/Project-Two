var db = require("../models");

var path = require("path");

module.exports = function(app) {

  //Load login page
  app.get("/", function(req, res){
    res.render("login")
  })

  

  // Load index page
  // app.get("/findAll", function(req, res) {
  //   db.Patient.findAll({}).then(function(dbPatients) {
  //     res.render("index1", {
       
  //       patients: dbPatients
  //     })
  //   });
  // });
      
  
  app.get("/dashboard/:last_name", function(req, res) {
    db.Patient.findOne({ where: { last_name: req.params.last_name } }).then(function(dbPatients) {
      // console.log(dbPatients);
      res.render("index1", {
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
app.get("/result/:patient_id", function(req, res) {
  db.Patient.findOne({ where: { patient_id: req.params.patient_id  } }).then(function(dbPatients) {
    // console.log(dbPatients);
    res.render("results", {
      patients: dbPatients
    })
  });
});
app.get("/testResult", function(req, res){
  db.antigen.findAll({}).then(function(dbAntigen) {
    // console.log("dmm" + dbAtigen);
    res.render("results", {
      antigens: dbAntigen
    })
  });
});

app.get("/testResult/:patient_id", function(req, res) {
  db.antigen.findOne({ where: { patient_id: req.params.patient_id } }).then(function(dbAntigen) {
    console.log("dmm" + dbAtigen);
    res.render("results", {
      antigens: dbAntigen
    })
  });
});
app.get("/results", function(req, res){
  res.render("results")
})

app.get('/dashboard', function(req, res){
  res.render("dashboard");
});



//   app.get("/test", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/test.html"));
//   });
// //join antigens to patient
//   app.get("/authors", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/author-manager.html"));
//   });
};
