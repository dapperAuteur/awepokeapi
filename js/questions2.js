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
		var arr = [];
		for(var i = 0; i < 4; i++) {
			var randomPoke = Math.floor( Math.random() * 721 );
			arr[i] = randomPoke;
		}
		console.log(arr);
		

		$.ajax({
			method:"GET",
			url: "https://pokeapi.co/api/v2/pokemon/" + arr[0] + "/",
			success: function(data) {
				console.log(data);
				$("#pokemon_0").html(data.name);
				$("#pokemon_1").html(data.height);
				$("#pokemon_2").html(data.weight);
				$("#player_3").html(data.base_experience);

			}
		});
//		
//		$.ajax({
//			method:"GET",
//			url: "https://pokeapi.co/api/v2/pokemon/" + arr[1] + "/",
//			success: function(data) {
//				console.log(data);
//				$("#pokemon_name").html("How well do you know " + inputTitle + "?");
//				$("#pokemon_choices").html("My name is " + inputTitle);
//				$("#pokemon_height").html("My height is " + data.height);
//				$("#player_score").html(playerScore);
//
//			}
//		});
//		
//		$.ajax({
//			method:"GET",
//			url: "https://pokeapi.co/api/v2/pokemon/" + arr[2] + "/",
//			success: function(data) {
//				console.log(data);
//				$("#pokemon_name").html("How well do you know " + inputTitle + "?");
//				$("#pokemon_choices").html("My name is " + inputTitle);
//				$("#pokemon_base_experience").html("My base experience is " + data.base_experience);
//				$("#player_score").html(playerScore);
//
//			}
//		});
//		
//		$.ajax({
//			method:"GET",
//			url: "https://pokeapi.co/api/v2/pokemon/" + arr[3] + "/",
//			success: function(data) {
//				console.log(data);
//				$("#pokemon_name").html("How well do you know " + inputTitle + "?");
//				$("#pokemon_choices").html("My name is " + inputTitle);
//				$("#pokemon_species").html("My species is " + data.species.name);
//				$("#player_score").html(playerScore);
//
//			}
//		});
//
	});
//	console.log($.cookie("player1"));
});
}
strict();

