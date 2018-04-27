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