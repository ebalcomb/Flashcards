$(document).ready(function() {
	$(".termdisplay").dblclick(function(){
		$(this).fadeTo("fast", 0.0);
		$(".definitiondisplay").fadeTo("fast", 1);
	});
});