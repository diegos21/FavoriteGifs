$(document).ready(function() {

    $(document).on("click", ".movie", displayMovieInfo);

    function displayMovieInfo() {

        var toDoTask = $(this).attr("data-name");
        console.log(toDoTask);

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + toDoTask + "&api_key=2ar9HCfclzIrluoyGO6cJaNblJ4lDW2N";
        $.ajax ({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            $("#gifs-view").empty();


            for (var i = 0; i < 10; i++) {
                    var movieDiv = $("<div class='movie'>");
                    var imgURL = response.data[i].images.fixed_height.url;
                    var rating = response.data[i].rating;
                    var p = $("<p>").text("Rating: " + rating);
                    var image = $("<img>").attr("src", imgURL);
                    movieDiv.append(image);
                    movieDiv.append(p);
                    $("#gifs-view").prepend(movieDiv);
                }
        });
    }



});
