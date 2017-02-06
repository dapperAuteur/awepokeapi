/**
 *
 */
/*jshint esversion: 6 */
function strict() {
  // Function-level strict mode syntax
  'use strict';
	$(document).ready(function() {
	// DOM is ready
		let player1 = "player_1";
		let playerScore = 100;
		//user enter's pokemon and game starts
		$("#start_button").click(function() {
			let input =  $("#userInput").val().toLocaleLowerCase();
			let inputTitle = input.charAt(0).toUpperCase() + input.substring(1);
			let randomPoke;
			let arrPokeWeight = [];
			let arrPokeHeight = [];
			let arrPokeSpecies = [];
			let arrPokeBaseExp = [];
			let arrDummyPokeNum = [];
			let arrDummyPokeData = [];
			let objPoke0 = {};
			let objPoke1 = {};
			let objPoke2 = {};
			let objPoke3 = {};
//			let pokeURL = "https://pokeapi.co/api/v2/pokemon/";
			let pokeTraits = function(name, weight, height, speciesName, baseExperience) {
				this.name = name;
				this.weight = weight;
				this.height = height;
				this.speciesName = speciesName;
				this.baseExperience = baseExperience;
			};
			var inCorrect = function() {
				playerScore -= 50;
				console.log("incorrect works");
				$("#player_score").html(playerScore);
				alert("You Don't Know " + input);

			};
		
			var correct = function() {
				playerScore += 100;
				console.log("correct works");
				$("#player_score").html(playerScore);
				alert("You Do Know " + input);
			};
			//create cookie to store user score
			//$.cookie("player1", 0);
			
//			console.log(pokemon);
			
			

			//create an array of random pokemon to test user's knowledge
			
			for(let i = 0; i < 4; i++) {
				randomPoke = Math.floor( Math.random() * 721 );
				arrDummyPokeNum[i] = randomPoke;
				$.ajax({
				method:"GET",
				url: "https://pokeapi.co/api/v2/pokemon/" + randomPoke + "/",
				success: function(data) {
					console.log(data);
					arrDummyPokeData[i] = data;
					console.log("line 47 will print random construction of pokemon in loop ");
//					console.log(arrDummyPoke[i]);
					console.log("line 52 will print random number of pokemon in loop for arrDummyPokeNum[" + i + "] ");
					console.log(arrDummyPokeNum[i]);
					console.log("arrDummyPokeData[i]");
					console.log(arrDummyPokeData[i]);
					$("#pokemon_" + i).html(arrDummyPokeData[i].weight);
					console.log("arrPoke[i]");
					console.log(arrDummyPokeData[i].weight);
					if(i === 0) {
						objPoke0 = pokeTraits(data.name, data.weight, data.height, data.species, data.baseExperience);
					} else if (i === 1) {
						objPoke1 = pokeTraits(data.name, data.weight, data.height, data.species, data.baseExperience);
					} else if (i === 2) {
						objPoke2 = pokeTraits(data.name, data.weight, data.height, data.species, data.baseExperience);
					} else {
						objPoke3 = pokeTraits(data.name, data.weight, data.height, data.species, data.baseExperience);
					}
						
					console.log(data.weight);
					arrPokeWeight = data.weight;
					console.log(arrPokeWeight[i]);
					arrPokeHeight = data.height;
					arrPokeSpecies = data.species;
					arrPokeBaseExp = data.baseExperience;
					//$("#pokemon_" + i).html(data.weight);
					
				}
			});
				
			}
			
			
			
//			for(let i = 0; i < arrPoke.length; i++) {
//				$("#pokemon_" + i).html(arrPoke[i]);
//				$("#pokemon_" + i).html(i);
//				console.log(arrPoke[i]);
//			}
			

			//grab data from api about user's chosen pokemon
			$.ajax({
				method:"GET",
				url: "//pokeapi.co/api/v2/pokemon/" + input + "/",
				success: function(data) {
					console.log("prints user chosen pokemon data ");
					console.log(data);
					$("#pokemon_chosen").html(inputTitle);
					$("#pokemon_choices").html(inputTitle);
					$("#player_score").html(playerScore);
					$("#pokemon_4").html(data.weight);

				}
			});
			
			$("#pokemon_0").html(objPoke0.weight);
			$("#pokemon_1").html(objPoke1.weight);
			$("#pokemon_2").html(objPoke2.weight);
			$("#pokemon_3").html(objPoke3.weight);
			
			document.getElementById("pokemon_0").addEventListener("click", inCorrect);
			document.getElementById("pokemon_1").addEventListener("click", inCorrect);
			document.getElementById("pokemon_2").addEventListener("click", inCorrect);
			document.getElementById("pokemon_3").addEventListener("click", inCorrect);
			document.getElementById("pokemon_4").addEventListener("click", correct);
			
			


		});
		//print cookie data to console
		//console.log($.cookie("player1"));
		
		
	});
}
strict();

