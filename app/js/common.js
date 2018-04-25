$(document).ready(function() {
	/// Collapser
	if($(window).width() < 767) {
		let x = $("#cut"); 
		x.collapser({
			mode: 'lines',
			truncate: 8
		});
	}
	///Animate Scroll
	$(".container-dots>ul>li>a").on('click.smothscroll',function(e){
		e.preventDefault();
		var hash = $(this).attr('href');
		var offset = $(hash).offset().top-10;
		$('body,html').animate({scrollTop: offset},1000);

		$('.container-dots>ul>li>a').removeClass('active');
		$(this).addClass('active');
		});
		$(document).on("scroll", onScroll);
		function onScroll(){
			var scroll_top = $(document).scrollTop();
			$('.container-dots>ul>li>a').each(function(){
				var hash = $(this).attr("href");
				var target = $(hash);
				if (target.position().top <= scroll_top && target.position().top + target.outerHeight() >= scroll_top) {
					$(".container-dots>ul>li>a.active").removeClass("active");
					$(this).addClass("active");
				} else {
					$(this).removeClass("active");
				}
			});
		}

		///Slick slider
	let title = [];
	$('.sliderItem').each(function(i){
		title[i] = $(this).attr('data');
	 });
	var customslick = $('.slick-slider');
	customslick.on("init", function(event, slick){
	$(".slick-title").text( title[slick.currentSlide] );
	$(".slick-counter").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
	});
	customslick.on("afterChange", function(event, slick, currentSlide){
		$(".slick-title").text( title[slick.currentSlide] );
	$(".slick-counter").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
	});
	customslick.slick({
			slidesToShow: 1,
			arrows: true,
			adaptiveHeight: true,
			prevArrow: '<button type="button" class="slick-prev"></button>',
			nextArrow: '<button type="button" class="slick-next"></button>'
	});
	var currentSlide = customslick.slick('slickCurrentSlide');


});
$(window).on('resize',function(){
	if($(window).width() < 767) {
		let x = $("#cut");
		x.collapser({
			mode: 'lines',
			truncate: 8,
			dynamic: true
		});
	
	}
});
