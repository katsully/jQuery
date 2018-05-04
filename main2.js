// JAVASCRIPT FILE
$(document).ready(function(){

	$("button").click(function(){
		$("#anotherPara").toggle();
	});

	$('li').hover(function(){
		$(this).css("font-size", "96px");
	}, function(){
    	$(this).css("font-size", "36px");
	});
})