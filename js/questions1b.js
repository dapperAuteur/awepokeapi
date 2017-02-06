/**
 *
 */
/*jshint esversion: 6 */
function strict() {
  // Function-level strict mode syntax
  'use strict';
	$(document).ready(function() {
	// DOM is ready
		$(".nextQuestion").hide();
		let player1 = "Player";
		let playerScore = 100;
		//user enter's pokemon and game starts
		$("#start_button").click(function() {
			let input =  $("#userInput").val().toLocaleLowerCase();
			let inputTitle = input.charAt(0).toUpperCase() + input.substring(1);
			let randomPoke;
			let arrDummyPokeNum = [];
			let arrDummyPokeData = [];
			let objPlayerPoke = {};
			let objPoke0 = {};
			let objPoke1 = {};
			let objPoke2 = {};
			let objPoke3 = {};
//			let pokeURL = "https://pokeapi.co/api/v2/pokemon/";
			let pokeTraits = function(name, moves, height, speciesName, baseExperience) {
				this.name = name;
				this.moves = moves;
				this.height = height;
				this.speciesName = speciesName;
				this.baseExperience = baseExperience;
			};
			
			var showNext = function() {
				$(".nextQuestion").show();
			};
			//question2
			let question2 = function(objplr, obj0, obj1, obj2, obj3, inCorrect, correct) {
				$("#pokemon_0").html(objPoke0.height);
				$("#pokemon_1").html(objPoke1.height);
				$("#pokemon_2").html(objPoke2.height);
				$("#pokemon_3").html(objPoke3.height);
				$("#pokemon_4").html(objPlayerPoke.height);
				document.getElementById("pokemon_0").addEventListener("click", inCorrect);
				document.getElementById("pokemon_1").addEventListener("click", inCorrect);
				document.getElementById("pokemon_2").addEventListener("click", inCorrect);
				document.getElementById("pokemon_3").addEventListener("click", inCorrect);
				document.getElementById("pokemon_4").addEventListener("click", correct);
		};
			
			var inCorrect = function() {
				playerScore -= 50;
				console.log("incorrect works");
				$("#player_score").html(playerScore);
				$("#questionResult").html(player1 + " doesn't know " + inputTitle + "!");
				question2();
				$(".nextQuestion").show();

			};
		
			var correct = function() {
				playerScore += 100;
				console.log("correct works");
				$("#player_score").html(playerScore);
				$("#questionResult").html(player1 + " knows " + inputTitle + "!");
				question2();
				$(".nextQuestion").show();
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
					$("#pokemon_" + i).html(arrDummyPokeData[i].moves.length);
					console.log("arrPoke[i]");
					console.log(arrDummyPokeData[i].moves.length);
					if(i === 0) {
						objPoke0 = pokeTraits(data.name, data.moves.length, data.height, data.species, data.baseExperience);
					} else if (i === 1) {
						objPoke1 = pokeTraits(data.name, data.moves.length, data.height, data.species, data.baseExperience);
					} else if (i === 2) {
						objPoke2 = pokeTraits(data.name, data.moves.length, data.height, data.species, data.baseExperience);
					} else {
						objPoke3 = pokeTraits(data.name, data.moves.length, data.height, data.species, data.baseExperience);
					}
					
//					return objPoke0, objPoke1, objPoke2, objPoke3;
				}
			});
				
			}
			

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
					$("#pokemon_4").html(data.moves.length);
					$("#trait").html("moves");
					objPlayerPoke = pokeTraits(data.name, data.moves.length, data.height, data.species, data.baseExperience);
					return objPlayerPoke;

				}
			});
			
//			let isCorrect = function() {
//				objPlayerPoke == 
//			}
			
			$("#pokemon_0").html(objPoke0.moves.length);
			$("#pokemon_1").html(objPoke1.moves.length);
			$("#pokemon_2").html(objPoke2.moves.length);
			$("#pokemon_3").html(objPoke3.moves.length);
			
			document.getElementById("pokemon_0").addEventListener("click", function() {
				inCorrect();
				showNext();
																					  } );
			document.getElementById("pokemon_1").addEventListener("click", function() {
				inCorrect();
				showNext();
																					  } );
			document.getElementById("pokemon_2").addEventListener("click", function() {
				inCorrect();
				showNext();
																					  } );
			document.getElementById("pokemon_3").addEventListener("click", function() {
				inCorrect();
				showNext();
																					  } );
			document.getElementById("pokemon_4").addEventListener("click", function() {
				correct();
				showNext();
																					  } );
			
			question2(objPlayerPoke, objPoke0, objPoke1, objPoke2, objPoke3, inCorrect, correct);
			

		});
		//print cookie data to console
		//console.log($.cookie("player1"));
		
	});
}
strict();

