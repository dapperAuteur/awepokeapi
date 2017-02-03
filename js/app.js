/**
 *
 */
function strict() {
  // Function-level strict mode syntax
  'use strict';
	$(document).ready(function() {
	// DOM is ready

	$("#start_button").click(function() {
		var input =  $("#userInput").val().toLocaleLowerCase();
		var inputTitle = input.charAt(0).toUpperCase() + input.substring(1);
		var player1 = "player_1";
		var playerScore = 100;
		console.log(input + " " + player1 + "\'s score is: " + playerScore + " " + inputTitle);
		//$.cookie("player1", 0);
		

		$.ajax({
			method:"GET",
			url: "https://pokeapi.co/api/v2/pokemon/" + input + "/",
			success: function(data) {
				console.log(data);
				$("#pokemon_name").html("How well do you know " + inputTitle + "?");
				$("#pokemon_choices").html("My name is " + inputTitle);
				$("#pokemon_weight").html("My weight is " + data.weight);
				$("#pokemon_height").html("My height is " + data.height);
				$("#pokemon_base_experience").html("My base experience is " + data.base_experience);
				$("#pokemon_species").html("My species is " + data.species.name);
				$("#player_score").html(playerScore);

			}
		});

	});
	console.log($.cookie("player1"));
});
}
strict();

