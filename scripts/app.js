/**
 *
 */
function strict() {
  // Function-level strict mode syntax
  'use strict';
	$(document).ready(function() {
	// DOM is ready

	$("#start_button").click(function() {
		var input =  $("#userInput").val();
		console.log(input);

		$.ajax({
			method:"GET",
			url: "https://pokeapi.co/api/v2/pokemon/" + input + "/",
			success: function(data) {
				console.log(data);
				$("#pokemon_name").html("How well do you know " + data.name);
				$("#pokemon_choices").html("My name is " + data.name);
				$("#pokemon_weight").html("My weight is " + data.weight);
				$("#pokemon_height").html("My height is " + data.height);
				$("#pokemon_base_experience").html("My base experience is " + data.base_experience);
				$("#pokemon_species").html("My species is " + data.species.name);

			}
		});

	});
});
}
strict();

