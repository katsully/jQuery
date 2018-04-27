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
=======
var textOne = "this is some text";
var textTwo = "kat needs a nap";

$(document).ready(function(){

	$("h2").text(textOne);
	switchText();

	function switchText() {
		if($("h2").text() == textOne){
			$("h2").text(textTwo);
		} else {
			$("h2").text(textOne);
		}
		setTimeout(switchText, 3000);
	}



	$('span').hide();


	$('div').mouseover(function(){
		$(this).css("background-color", "yellow");
		$('span').slideDown();
	})

	$('div').mouseleave(function(){
		$(this).css("background-color", "white");
		$('span').slideUp();
	})



})
>>>>>>> dc3287ec04868a9e63ad4a76a0cabf72ecc28ce1
