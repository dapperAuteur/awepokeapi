/**
 *
 */
function strict() {
  // Function-level strict mode syntax
  'use strict';
	$(document).ready(function() {
	// DOM is ready
		//user enter's pokemon and game starts
	$("#start_button").click(function() {
		var input =  $("#userInput").val().toLocaleLowerCase();
		var inputTitle = input.charAt(0).toUpperCase() + input.substring(1);
		var player1 = "player_1";
		var playerScore = 100;
		console.log(input + " " + player1 + "\'s score is: " + playerScore + " " + inputTitle);
		
		//create cookie to store user score
		//$.cookie("player1", 0);
		
		//create an array of random pokemon to test user's knowledge
		var arr = [];
		for(var i = 0; i < 4; i++) {
			var randomPoke = Math.floor( Math.random() * 721 );
			arr[i] = randomPoke;
		}
		console.log(arr);
		
		//grab data from api about user's chosen pokemon
		$.ajax({
			method:"GET",
			url: "https://pokeapi.co/api/v2/pokemon/" + input + "/",
			success: function(data) {
				console.log(data);
				$("#pokemon_chosen").html(inputTitle);
				$("#pokemon_choices").html(inputTitle);
				$("#player_score").html(playerScore);

			}
		});
		
		//grab data for q1 about random pokemon 0
		$.ajax({
			method:"GET",
			url: "https://pokeapi.co/api/v2/pokemon/" + arr[0] + "/",
			success: function(data) {
				console.log(data);
				$("#pokemon_0").html(data.name);
//				$("#pokemon_weight").html("My weight is " + data.weight);
			}
		});
		
		//grab data for q1 about random pokemon 1
		$.ajax({
			method:"GET",
			url: "https://pokeapi.co/api/v2/pokemon/" + arr[1] + "/",
			success: function(data) {
				console.log(data);
				$("#pokemon_1").html(data.name);
			}
		});
		
		//grab data for q1 about random pokemon 2
		$.ajax({
			method:"GET",
			url: "https://pokeapi.co/api/v2/pokemon/" + arr[2] + "/",
			success: function(data) {
				console.log(data);
				$("#pokemon_2").html(data.name);
//				$("#pokemon_choices").html("My name is " + inputTitle);
//				$("#pokemon_base_experience").html("My base experience is " + data.base_experience);
			}
		});
		
		//grab data for q1 about random pokemon 3
		$.ajax({
			method:"GET",
			url: "https://pokeapi.co/api/v2/pokemon/" + arr[3] + "/",
			success: function(data) {
				console.log(data);
				$("#pokemon_3").html(data.name);
//				$("#pokemon_choices").html("My name is " + inputTitle);
//				$("#pokemon_species").html("My species is " + data.species.name);
			}
		});

	});
		//print cookie data to console
	//console.log($.cookie("player1"));
});
}
strict();

