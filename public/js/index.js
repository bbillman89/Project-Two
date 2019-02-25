$(document).ready(function(){

  /*var antigens;
  var url = window.location.search;
  var patientId;

  if (url.indexOf("?patient_id=") !== -1) {
    patientId = url.split("=")[1];
    renderAntigens(patientId);
  }

  function renderAntigens(patient){
    patientId = patient || "";
    if (patientId) {
      patientId = "/?patient_id=" + patientId;
    }
    $.get("/api/antigens" + patientId, function(data) {
      console.log("antigens", data);
      antigens = data;
      if (!antigens || !antigens.length) {
        console.log("no antigens for this user")
      }
      else {
        console.log("antigens")
      }
    });
  }*/

  //Push new patient information to patient table - working as of 4:15pm BB
  function newPatient(event) {
    event.preventDefault();

    let new_patient = {
      patient_id: $("#patient_id").val().trim(),
      first_name: $("#first_name").val().trim(),
      last_name: $("#last_name").val().trim(),
      address: $("#address").val().trim(),
      sex: $("#sex").val().trim(),
      birth: $("#birth").val().trim(),
      phone: $("#phone").val().trim()
    };

    $.ajax("/api/patient", {
      type: "POST",
      data: new_patient
      })
      .then(function() {
          console.log("new patient added");
          location.reload();
      }
    );
    $("#form")[0].reset();
  };

  //New test results - needs to connect with patient by primary key (ID)
  function results(event) {
    event.preventDefault();

    let new_Testresults = {
      cat: $("#cat_test").val().trim(),
      dog: $("#dog_test").val().trim(),
      epic: $("#epic_test").val().trim(),
      grass: $("#grass_test").val().trim(),
      pig: $("#pig_test").val().trim(),
      rag: $("#rag_test").val().trim(),
      tree: $("#tree_test").val().trim(),
      oak: $("#oak_test").val().trim(),
      plant: $("#plant_test").val().trim(),
      patient_id: $("#patient_id").val().trim(),
      notes: $("#notes").val().trim()
    };

    let new_Treatment = {
      cat: $("#cat_ment").val().trim(),
      dog: $("#dog_ment").val().trim(),
      epic: $("#epic_ment").val().trim(),
      grass: $("#grass_ment").val().trim(),
      pig: $("#pig_ment").val().trim(),
      rag: $("#rag_ment").val().trim(),
      tree: $("#tree_ment").val().trim(),
      oak: $("#oak_ment").val().trim(),
      plant: $("#plant_ment").val().trim(),
      patient_id: $("#patient_id").val().trim(),
      notes: $("#notes").val().trim()
    };

    if (typeof new_Testresults.cat === "undefined" && typeof new_Treatment.cat === "undefined"){
      alert("fill out all fields");
    } else if (typeof new_Testresults.cat && typeof new_Treatment.cat) {
      $.ajax("/api/dilution", {
        type: "POST",
        data: new_Treatment
      })
        .then(function() {
          location.reload();
        }
      );

      $.ajax("/api/antigen", {
        type: "POST",
        data: new_Testresults
      })
        .then(function() {
          location.reload();
        }
      );
    } else if (typeof new_Testresults.cat === "undefined" && typeof new_Treatment.cat){
      $.ajax("/api/dilution", {
        type: "POST",
        data: new_Treatment
      })
        .then(function() {
          location.reload();
        }
      );
    }
    $("#results-form")[0].reset();
  }

  $(document).on("click", "#new_patient", newPatient);
  $(document).on("click", "#submit", results);

})