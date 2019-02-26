$(document).ready(function(){

    let lat = 48.857456;
    let lon = 2.354611;
    let apikey = "b335d27b2dc6441fa1e72aed0ff47c1e";

    function pollenSeason(){
        let queryURL = "https://api.breezometer.com/pollen/v2/current-conditions?lat=" + lat + "&lon=" + lon + "&key="+ apikey;
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function(response){
            let grassSeason = response.data.types.grass.in_season
            let treeSeason = response.data.types.tree.in_season
            console.log(grassSeason);
            console.log(treeSeason);
            if (grassSeason) {
                $("#grass-report").text("Grass Season True");
            } else {
                $("#grass-report").text("Grass Season False");
            }
            if (treeSeason) {
                $("#tree-report").text("Tree Season True");
            } else {
                $("#tree-report").text("Tree Season False");
            }
        })
    }

    function breezoWeather(){        
        let queryURL = "https://api.breezometer.com/weather/v1/current-conditions?lat=" + lat + "&lon=" + lon + "&key="+ apikey + "&units=imperial";
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function(response){
            let temp = response.data.temperature.value
            let weathDescription = response.data.weather_text
            console.log(Math.round(temp));
            console.log(weathDescription);
            $("#current-temp").text(Math.round(temp));
            $("#weath-des").text(weathDescription);
        })
    }

    breezoWeather();
    pollenSeason();
})