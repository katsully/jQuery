// JAVASCRIPT FILE
$(document).ready(function(){

	
	$("#myPara").click(function(){
		$(this).hide();
	});

	$("#hide").click(function(){
		$("#anotherPara").hide();
	});

	$("#cssPara").hover(function(){
		$(this).css("background-color", "#c8b34f");
	});

	$("div").hide();

	$("#show").click(function(){
		// $("div").show()
		$("div").fadeIn(5000)
	})






});