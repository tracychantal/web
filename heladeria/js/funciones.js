$(document).ready(listo());

function listo()
{
	//alert("Funciona JQuery");
	jQuery(".hamb").click(function(e)
	{
		e.preventDefault();
		$("header .container nav").toggleClass("open");

		$(".hamb i").toggleClass("fa-rectangle-xmark");
	});

$("header .container nav a").click(function(e){
	$("header .container nav").removeClass("open");
	$(".hamb i").removeClass("fa-rectangle-xmark");

	var dev = $(this).attr("href");

	$("html,body").animate({
		"scrolltop": $(captura).offset().top - 76
	});
});
}