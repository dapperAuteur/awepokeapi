/**
 *
 */

$(document).ready(function() {
	// DOM is ready

	$("#start_button").click(function() {
		var input = Math.floor( Math.random() * 721 );
		console.log(input);

		$.ajax({
			method:"GET",
			url: "http://pokeapi.co/api/v2/pokemon/" + input + "/",
			success: function(data) {
				console.log(data);
				$("#pokemon_name").html(data.name);

			}
		});

	});
})
