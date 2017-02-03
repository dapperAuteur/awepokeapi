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
			let input =  $("#userInput").val().toLocaleLowerCase();
			let inputTitle = input.charAt(0).toUpperCase() + input.substring(1);
			let player1 = "player_1";
			let playerScore = 100;
			console.log(input + " " + player1 + "\'s score is: " + playerScore + " " + inputTitle);

			//create cookie to store user score
			//$.cookie("player1", 0);
			
			

			//create an array of random pokemon to test user's knowledge
			let arr = [];
			for(let i = 0; i < 4; i++) {
				let randomPoke = Math.floor( Math.random() * 721 );
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

			//refactor to a for loop
			for(let i = 0; i < arr.length; i++) {
				$.ajax({
					method:"GET",
					url: "//pokeapi.co/api/v2/pokemon/" + arr[i] + "/",
					success: function(data) {
						console.log(data);
						$("#pokemon_" + i).html(data.name);
					}
				});
			}

		});
		//print cookie data to console
		//console.log($.cookie("player1"));
	});
}
strict();

