$(document).ready(function(){
	$('.ba-slider').slick({
	 	/*centerMode: true,
		centerPadding: '60px', по центру. но тогда прокручивает по одному слайду*/
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 100,
  		infinite:true,
		slide: ".slide-show",
		prevArrow: ".ba-slider__prev",
		nextArrow: ".ba-slider__next",
  		responsive: [
  			{
  				breakpoint: 1024,
  				settings: {
  					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 100,
		  			infinite:true
  				}
  			}
  		] // на экране шириной менее 1024
	});

	$('.slide-btn').on('mouseleave', function(){
		$(this).blur();
	}); // убираем фокус, если мышку увели и не нажали в другом месте
});
