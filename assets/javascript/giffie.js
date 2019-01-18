/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
GifTastic Assignment 
UCF Coding BootCamp
Ronald Antonio
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

// Declaration of variables:
let APIkey = "a4b6f03e3859400807800105c26fc9bd";
let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Montego%20Bay,Jamaica&units=imperial&appid=" + APIkey;
let queryURL2;
let person;
let topics;
let r;
let s;
// let getTopics =["Bob Marley","Jamaica","Husein Bolt"];
// $("#find-images").on("click", function(event) {
//   event.preventDefault();
//   console.log("Button was clicked...test successful");
//   var topics = $("#topics-input").val();
//   console.log(topics);
  
//   // Define queryURL string with input-topic and giphy APIkey
//   queryURL2 = "https://api.giphy.com/v1/gifs/search?q=" +
//   topics + "&api_key=dc6zaTOxFJmzC&limit=10";
  
  
//   // Create an AJAX call to retrieve data & log the data in console
//   $.ajax({
//     url: queryURL2,
//     method: "GET"
//   })
//   .then(function(response) {
//     var results2 = response.data;
//     console.log(queryURL2);
//     console.log(results2);
    
//     for (var i = 0; i < results2.length; i++) {
//       var gifDiv = $("<div>");
//       var rating = results2[i].rating;
//       var p = $("<p>").text("Rating: " + rating);
//       var personImage = $("<img>");
//       personImage.attr("src", results2[i].images.fixed_height.url);
//       gifDiv.append(p);
//       gifDiv.append(personImage);
//       $("#gifs-appear-here").prepend(gifDiv);
//     }
//     // GET WEATHER INFORMATION FROM OPEN WEATHER API
//   });
// });

// function to convert UTC to  regular Time
convertUTC = (x) => {
    return new Date(1000 * x);
} 

// getWeather();


// AJAX call to OpenWeatherMap API
// Use th AJAX call to queryURL (openweathermap) to retrieve data
// let getWeather =() => {
$.ajax({
      url: queryURL, 
      method: "GET"
  })
// We store all of the retrieved data inside of an object called "response"
  .then(function(response) {

// We put sunrise and sunset in variables for conversion from UTC to standard time
      r = response.sys.sunrise;
      s = response.sys.sunset;
      // // Logging the queryURL variable and response to check communication
      console.log(queryURL);
      console.log(response)
        
// Logging the resulting object
    // console.log("Wind Speed: " + response.wind.speed);
    // console.log("Humidity: " + response.main.humidity);
    // console.log("Temperature (Fº): " + response.main.temp);
    // console.log("Weather Description: " + response.weather[0].description);
    // console.log("Visibility: " + response.visibility);
    // console.log("Sunrise: " + convertUTC(r));
    // console.log("Sunset: " + convertUTC(s));  

    
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

  
