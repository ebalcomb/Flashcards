$(document).ready(function() {
	$("#termfirst").click(function(){
		$(".term").removeClass("invisible secondary");
		$(".term").addClass("primary");
		$(".definition").addClass("invisible secondary");
		$(".definition").removeClass("primary");
	});
});

$(document).ready(function() {
	$("#definitionfirst").click(function(){
		$(".definition").removeClass("invisible secondary");
		$(".definition").addClass("primary");
		$(".term").addClass("invisible secondary");
		$(".term").removeClass("primary");
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
