/**
 *
 */
function strict() {
  // Function-level strict mode syntax
  'use strict';
	$(document).ready(function() {
	// DOM is ready

	$("#start_button").click(function() {
		var input = Math.floor( Math.random() * 721 );
		console.log(input);

		$.ajax({
			method:"GET",
			url: "./sprites/pokemon/" + input + ".png/",
			success: function(data) {
				console.log(data);
				$("#pokemon_name").html(data.name);

			}
		});

	});
});
}
strict();

