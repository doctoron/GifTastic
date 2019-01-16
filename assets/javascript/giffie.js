/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
GifTastic Assignment 
UCF Coding BootCamp
Ronald Antonio
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/


// Declaration of variables:
let APIkey = "a4b6f03e3859400807800105c26fc9bd";
let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Montego%20Bay,Jamaica&units=imperial&appid=" + APIkey;
let r;
let s;
let topics =["Bob Marley", "Blue Mountain Coffee", "Beaches", "Mountains"];

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

// Logging the resulting object
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

function myFunction() {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("value", "Your turn now!");
  document.body.appendChild(x);
}

// When button is clicked, log the queryURL + key for giphy.com API
$("button").on("click", function() {
    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    person + "&api_key=dc6zaTOxFJmzC&limit=10";
    
// Create an AJAX call to retrieve data Log the data in console
  console.log
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
// Add search input data to array
  $("button").on("click", function() {
    var animal = $(this).data("animal");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET" })
      .done(function(response) {
        for (var i = 0; i < response.data.length; i++) {
          var animalDiv = $("<div>");
          var p = $("<p>").text("Rating: " +response.data[i].rating);
          var animalImage = $('<img>');
          animalImage.attr("src",response.data[i].images.fixed_height.url);
          animalDiv.append(p);
          animalDiv.append(animalImage);
          $("#gifs-appear-here").append(animalDiv);
        }
      })
    })
    // Dynamically create buttons from users input
      // =================================================================================

      // 1. Create a for-loop to iterate through the letters array.
      for (var i = 0; i < letters.length; i++) {

        // Inside the loop...

        // 2. Create a variable named "letterBtn" equal to $("<button>");
        var letterBtn = $("<button>");

        // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
        letterBtn.addClass("letter-button letter letter-button-color");

        // 4. Then give each "letterBtn" a data-attribute called "data-letter".
        letterBtn.attr("data-letter", letters[i]);

        // 5. Then give each "letterBtns" a text equal to "letters[i]".
        letterBtn.text(letters[i]);

        // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
        $("#buttons").append(letterBtn);

      }

      // Be sure to test that your code works for this major task, before proceeding to the next one!

      // MAJOR TASK #2: ATTACH ON-CLICK EVENTS TO "LETTER" BUTTONS
      // =================================================================================

      // 7. Create an "on-click" event attached to the ".letter-button" class.
      $(".letter-button").on("click", function() {

        // Inside the on-click event...

        // 8. Create a variable called "fridgeMagnet" and set the variable equal to a new div.
        var fridgeMagnet = $("<div>");

        // 9. Give each "fridgeMagnet" the following classes: "letter fridge-color".
        fridgeMagnet.addClass("letter fridge-color");

        // 10. Then chain the following code onto the "fridgeMagnet" variable: .text($(this).attr("data-letter"))
        // attr acts as both a setter and a getter for attributes depending on whether we supply one argument or two
        // NOTE: There IS a $(data) jQuery method, but it doesn't do what you'd expect. So just use attr.
        fridgeMagnet.text($(this).attr("data-letter"));

        // 11. Lastly append the fridgeMagnet variable to the "#display" div (provided);
        // Again you can see we use that find, and once its found we append the item
        $("#display").append(fridgeMagnet);

      });

      // Be sure to test that your code works for this major task, before proceeding to the next one!

      // MAJOR TASK #3: ATTACH ON-CLICK EVENTS TO "CLEAR" BUTTON
      // =================================================================================

      // 12. Create an "on-click" event attached to the "#clear" button id.
      $("#clear").on("click", function() {

        // Inside the on-click event...

        // 13. Use the jQuery "empty()" method to clear the contents of the "#display" div.
        // We use find here and once its found it will empty the element
        $("#display").empty();

      });

    });