// Get weather information from OpenWeather API
let APIkey = "a4b6f03e3859400807800105c26fc9bd";
let iFetch;

// Here we are building the URL we need to query the database
let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Montego%20Bay,Jamaica&units=imperial&appid=" + APIkey;
let r;
let s;
// let convertUTC; not needed once Open Weather API documentation provided conversion to imperial units.

// function to convert UTC to  regular Time
function convertUTC(x) {
return new Date(1000 * x);
}   

// Create an AJAX call to retrieve data Log the data in console
  // Here we run our AJAX call to the OpenWeatherMap API
  $.ajax({
      url: queryURL, 
      method: "GET"
  })
  // We store all of the retrieved data inside of an object called "response"
  .then(function(response) {
  // We put sunrise and sunset in variables for conversion from UTC to standard time
      r = response.sys.sunrise;
      s = response.sys.sunset;

  // Log the queryURL
    console.log(queryURL);
    console.log(response)

    // Log the resulting object
    console.log("Wind Speed: " + response.wind.speed);
    console.log("Humidity: " + response.main.humidity);
    console.log("Temperature (Fº): " + response.main.temp);
    console.log("Weather Description: " + response.weather[0].description);
    console.log("Visibility: " + response.visibility);
    console.log("Sunrise: " + convertUTC(r));
    console.log("Sunset: " + convertUTC(s));  

    
    // Transfer content to HTML
    $(".city").html("<h1>" + response.name + ", " + response.sys.country + " Weather Details</h1>");
    $(".wind").text("Wind Speed: " + response.wind.speed);
    $(".humidity").text("Humidity: " + response.main.humidity);
    $(".temp").text("Temperature (Fº) " + response.main.temp);
    $(".description").text("Weather Description: " + response.weather[0].description);
    $(".visibility").text("Visibility: " + response.visibility);
    $(".sunrise").text("Sunrise: " + convertUTC(r));
    $(".sunset").text("Sunset: " + convertUTC(s)); 


});
// 
$("button").on("click", function() {
    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(personImage);

          $("#gifs-appear-here").prepend(gifDiv);
        }
      });
  });