$(document).ready(function(){
    
    function loginValid(){
        var userName = $("#username").val();
        var password = $("#password").val();
        //values are hardcorded until connection with db is made
        // var dbUN = "admin";
        // var dbPW = "admin";

        // Comment out until connection with db is made
        for (let index of userLogin){
            //stop if userName input is valid / if valid store db username and password in variables
            if (index === userName){
                break
            }
            dbUN = index.userName;
            dbPW = index.password;
            loadPage(dbUN, dbPW);
        }

        function loadPage(dbUN, dbPW){
            if (userName === dbUN && password === dbPW){
                //open dashboard
                let redirect = window.location.href + "dashboard";
                alert(redirect);
                window.location.href = "http://localhost:3000/dashboard";
    
            } else {
                alert("invalid login information");
            }
        }

        //comment out when db is setup
        loadPage(dbUN, dbPW);
    }

    $(document).on("click", "#login", loginValid)
})