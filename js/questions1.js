/**
 *
 */
/*jshint esversion: 6 */
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
			let randomPoke;
			let arrDummyPoke = [];
			let arrDummyPokeNum = [];
			let pokeURL = "https://pokeapi.co/api/v2/pokemon/";
			let pokeTraits = function(name, weight, height, speciesName, baseExperience) {
				this.name = name;
				this.weight = weight;
				this.height = height;
				this.speciesName = speciesName;
				this.baseExperience = baseExperience;
//				console.log("pokeTraits are: name " + pokeTraits.name + " weight: " + pokeTraits.weight + " height: " + pokeTraits.height+ " speciesName: " + pokeTraits.speciesName+ " baseExperience: " + pokeTraits.baseExperience);
			};
			let pokemon = new pokeTraits();
			
			//create cookie to store user score
			//$.cookie("player1", 0);
			
			

			//create an array of random pokemon to test user's knowledge
			
			for(let i = 0; i < 4; i++) {
				randomPoke = Math.floor( Math.random() * 721 );
				arrDummyPokeNum[i] = randomPoke;
				$.ajax({
				method:"GET",
				url: pokeURL + arrDummyPokeNum[i] + "/",
				success: function(data) {
					console.log("line 44 will print random pokemon object in loop ");
					console.log(data);
					pokemon(data.name, data.weight, data.height, data.speciesName, data.baseExperience);
					console.log("line 47 will print random construction of pokemon in loop ");
					console.log(pokemon);
					arrDummyPoke[i] = pokemon;
					console.log("line 50 will print random construction of pokemon in loop for arrDummyPoke[" + i + "] ");
					console.log(arrDummyPoke[i]);
					console.log("line 52 will print random number of pokemon in loop for arrDummyPokeNum[" + i + "] ");
					console.log(arrDummyPokeNum[i]);
//					$("#pokemon_chosen").html(inputTitle);
//					$("#pokemon_choices").html(inputTitle);
//					$("#player_score").html(playerScore);

				}
			});
				
			}
			console.log(arrDummyPoke[0]);
			console.log(arrDummyPoke[1]);
			console.log(arrDummyPoke[2]);
			console.log(arrDummyPoke[3]);
			console.log(arrDummyPokeNum[0]);
			console.log(arrDummyPokeNum[1]);
			console.log(arrDummyPokeNum[2]);
			console.log(arrDummyPokeNum[3]);
//			console.log("line 58 will print arr of construction of pokemon arrDummyPoke[]" + arrDummyPoke[]);
//			console.log("line 58 will print arr of construction of pokemon arrDummyPoke[]" + arrDummyPokeNum[]);

			//grab data from api about user's chosen pokemon
			$.ajax({
				method:"GET",
				url: "https://pokeapi.co/api/v2/pokemon/" + input + "/",
				success: function(data) {
					console.log("prints user chosen pokemon data ");
					console.log(data);
					$("#pokemon_chosen").html(inputTitle);
					$("#pokemon_choices").html(inputTitle);
					$("#player_score").html(playerScore);

				}
			});
			
			for(let i = 0; i < arrDummyPoke.length; i++) {
				$("#pokemon_" + i).html(arrDummyPoke[i]);
			}
			
			//refactor to a for loop
//			for(let i = 0; i < arrDummyPoke.length; i++) {
//				$.ajax({
//					method:"GET",
//					url: "//pokeapi.co/api/v2/pokemon/" + arrDummyPoke[i] + "/",
//					success: function(data) {
//						console.log(data);
//						$("#pokemon_" + i).html(data.name);
//					}
//				});
//			}
//
//			//refactor to a for loop
//			for(let i = 0; i < arrDummyPoke.length; i++) {
//				$.ajax({
//					method:"GET",
//					url: "//pokeapi.co/api/v2/pokemon/" + arrDummyPoke[i] + "/",
//					success: function(data) {
//						console.log(data);
//						$("#pokemon_" + i).html(data.name);
//					}
//				});
//			}

		});
		//print cookie data to console
		//console.log($.cookie("player1"));
	});
}
strict();

