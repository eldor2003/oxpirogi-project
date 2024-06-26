$(document).ready(function () {
	// hamburger
	$(".hamburger").on("click", function (e) {
		e.preventDefault();
		$(".header_top_box").addClass("active");
	});

	$(".close").on("click", function (e) {
		e.preventDefault();
		$(".header_top_box").removeClass("active");
	});

	// swiper
	var swiper = new Swiper(".mySwiper", {
		slidesPerView: 1,
		centeredSlides: true,
		spaceBetween: 20,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
});
