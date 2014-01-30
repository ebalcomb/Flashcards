$(document).ready(function() {
	$("#termfirst").click(function(){
		$(".card_term").removeClass("invisible secondary");
		$(".card_term").addClass("primary");
		$(".card_definition").addClass("invisible secondary");
		$(".card_definition").removeClass("primary");
	});
});

$(document).ready(function() {
	$("#definitionfirst").click(function(){
		$(".card_definition").removeClass("invisible secondary");
		$(".card_definition").addClass("primary");
		$(".card_term").addClass("invisible secondary");
		$(".card_term").removeClass("primary");
	});
});

$(document).ready(function() {
	$(".card").click(function(){
		$(this).children(".secondary").removeClass("invisible");
	});
});

$(document).ready(function() {
	$(".card").dblclick(function(){
		$(this).children(".secondary").addClass("invisible");
	});
});
