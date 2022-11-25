//Similar products
window.addEventListener('load', function () {
	new Glider(document.querySelector('.carousel-list-similar-products'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__previous',
			next: '.carousel__next',
		},
		responsive: [
			{
				// screens greater than >= 775px
				breakpoint: 580,
				settings: {
					// Set to `auto` and provide item width to adjust to viewport
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				// screens greater than >= 1024px
				breakpoint: 1115,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				// screens greater than >= 1024px
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				},
			},
		],
	});
});
