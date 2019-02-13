$(document).ready(function() {

	$(".mobile-menu-cart").click(function () {
		$(this).toggleClass("active");
	});

	$(".js-mobile-menu-phone").click(function () {
		$(".mobile-phones-list").toggleClass("active");

		$(".js-mobile-search").removeClass("active");
		$(".js-mobile-menu-search").removeClass("active");

		$(".js-burger-menu").removeClass("active");
		$(".js-mobile-navigation").removeClass("active");
	});

	$(".js-mobile-menu-search").click(function () {
		$(".js-mobile-search").toggleClass("active");
		$(".js-mobile-menu-search").toggleClass("active");

		$(".mobile-phones-list").removeClass("active");

		$(".js-burger-menu").removeClass("active");
		$(".js-mobile-navigation").removeClass("active");
	});

	$(".js-burger-menu").click(function () {
		$(this).toggleClass("active");
		$(".js-mobile-navigation").toggleClass("active");

		$(".mobile-phones-list").removeClass("active");
		
		$(".js-mobile-search").removeClass("active");
		$(".js-mobile-menu-search").removeClass("active");
	});

});	